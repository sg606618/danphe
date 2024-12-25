import { faCalendarWeek, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="flex h-fit w-full items-center gap-5 rounded-lg bg-background px-5 sticky top-0 py-1 z-10">
        <div className="flex w-full items-center gap-2 rounded-full bg-slate-300 px-3 py-1 text-primary">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-none bg-transparent px-5 py-2 outline-none text-black"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} className="text-2xl text-black" />
          </button>
        </div>
        <div className="items-center border border-black flex rounded-lg overflow-hidden bg-white px-2">
          <FontAwesomeIcon
            icon={faCalendarWeek}
            className="w-5 h-5 z-[1111111]"
          />
          <select
            name="date"
            id="date"
            className="w-[20rem] px-2 py-1 font-semibold outline-none border-none bg-white"
          >
            <option>something</option>
          </select>
          <select
            name="date"
            id="date"
            className="w-[20rem] px-2 py-1 font-semibold outline-none border-none bg-white"
          >
            <option>something</option>
          </select>
        </div>
        <div className="flex text-primary mr-auto p-5">
          <h1 className="m-auto font-semibold text-xl">Dashboard</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
