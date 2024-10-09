/* eslint-disable no-unused-vars */
import React from "react";
import DashboardPage from "../components/Layouts/DashboardPage";
import useAuth from "../hooks/useAuth";

const DashboardUsers = () => {
  useAuth();
  return (
    <>
      <DashboardPage />
    </>
  );
};

export default DashboardUsers;
