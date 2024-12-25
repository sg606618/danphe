import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Header/Sidebar";
import Header from "../Header/Header";

const Admin = () => {
  return (
    <>
      <div className="flex w-full gap-5 px-5 py-2">
        <Sidebar />
        <div className="flex w-full flex-col gap-5">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
