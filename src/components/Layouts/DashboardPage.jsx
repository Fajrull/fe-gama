/* eslint-disable no-unused-vars */
import React from "react";
import TableUser from "../Fragments/TableUser";
import Sidebar from "../Fragments/Sidebar";
import Header from "../Fragments/Header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-[90vh]">
        <Sidebar />
        <main className="w-[90%] m-1 p-4 border-2">
          <TableUser />
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
