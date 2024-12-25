import React, { useState } from "react";

interface Row {
  id: number;
  particular: string;
  counter: string;
  amount: number | string;
  status: string;
  payment: string;
}

interface Balances {
  counter1: number;
  counter2: number;
  total: number;
}

const DailyAccount: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([
    {
      id: 1,
      particular: "Opening Balance",
      counter: "",
      amount: 0,
      status: "",
      payment: "",
    },
    {
      id: 2,
      particular: "Color Print",
      counter: "",
      amount: 0,
      status: "",
      payment: "",
    },
  ]);

  const [balances, setBalances] = useState<Balances>({
    counter1: 0,
    counter2: 0,
    total: 0,
  });

  const handleRowChange = (
    id: number,
    key: keyof Row,
    value: string | number
  ) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [key]: value } : row
    );

    const counter1Balance = updatedRows
      .filter((row) => row.counter === "Counter 1")
      .reduce(
        (sum, row) =>
          sum +
          (typeof row.amount === "number"
            ? row.amount
            : parseFloat(row.amount || "0")),
        0
      );

    const counter2Balance = updatedRows
      .filter((row) => row.counter === "Counter 2")
      .reduce(
        (sum, row) =>
          sum +
          (typeof row.amount === "number"
            ? row.amount
            : parseFloat(row.amount || "0")),
        0
      );

    setRows(updatedRows);
    setBalances({
      counter1: counter1Balance,
      counter2: counter2Balance,
      total: counter1Balance + counter2Balance,
    });
  };

  const getRowStyle = (status: string) => {
    switch (status) {
      case "Debit":
        return "bg-green-500";
      case "Credit":
        return "bg-red-500";
      case "Debit QR":
        return "bg-blue-500";
      default:
        return "";
    }
  };

  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">S.N.</th>
            <th className="border border-gray-300 px-4 py-2">Particular</th>
            <th className="border border-gray-300 px-4 py-2">Counter</th>
            <th className="border border-gray-300 px-4 py-2">Amount (Rs.)</th>
            <th className="border border-gray-300 px-4 py-2">Amount Status</th>
            <th className="border border-gray-300 px-4 py-2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className={getRowStyle(row.status)}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {row.particular}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={row.counter}
                  onChange={(e) =>
                    handleRowChange(row.id, "counter", e.target.value)
                  }
                  className="p-1 border rounded"
                >
                  <option value="">Select Counter</option>
                  <option value="Counter 1">Counter 1</option>
                  <option value="Counter 2">Counter 2</option>
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  value={row.amount}
                  onChange={(e) =>
                    handleRowChange(
                      row.id,
                      "amount",
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="p-1 border rounded w-full"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={row.status}
                  onChange={(e) =>
                    handleRowChange(row.id, "status", e.target.value)
                  }
                  className="p-1 border rounded"
                >
                  <option value="">Select Status</option>
                  <option value="Debit">Debit</option>
                  <option value="Credit">Credit</option>
                  <option value="Debit QR">Debit QR</option>
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={row.payment}
                  onChange={(e) =>
                    handleRowChange(row.id, "payment", e.target.value)
                  }
                  className="p-1 border rounded"
                >
                  <option value="">Select Payment</option>
                  <option value="Cash">Cash</option>
                  <option value="FonePay">FonePay</option>
                  <option value="Bank">Bank</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-100">
            <td colSpan={2} className="border border-gray-300 px-4 py-2">
              Final Balance
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {balances.counter1}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {balances.counter2}
            </td>
            <td colSpan={2} className="border border-gray-300 px-4 py-2">
              {balances.total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DailyAccount;
