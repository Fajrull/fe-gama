/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("Users");

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActive("Profile");
    } else if (location.pathname === "/dashboard/articles") {
      setActive("Articles");
    } else if (location.pathname === "/dashboard/articles-users") {
      setActive("Article Users");
    } else if (location.pathname === "/dashboard-users") {
      setActive("Users");
    }
  }, [location.pathname]);

  const handleNavigation = (value) => {
    if (value === "Users") {
      navigate("/dashboard-users");
    } else if (value === "Articles") {
      navigate("/dashboard/articles");
    } else if (value === "Article Users") {
      navigate("/dashboard/articles-users");
    } else if (value === "Profile") {
      navigate("/dashboard");
    }
  };

  const handleSignOut = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
    navigate("/");
  };

  return (
    <aside className="w-[10%] border-2 text-center p-4 flex flex-col gap-4 justify-between">
      <ul className=" flex flex-col items-center gap-4 cursor-pointer">
        <li
          className={`${
            active === "Profile" ? "text-blue-500 font-bold underline" : ""
          }`}
          onClick={() => handleNavigation("Profile")}
        >
          Profile
        </li>

        <li
          className={`${
            active === "Users" ? "text-blue-500 font-bold underline" : ""
          }`}
          onClick={() => handleNavigation("Users")}
        >
          Users
        </li>
        <li
          className={`${
            active === "Articles" ? "text-blue-500 font-bold underline" : ""
          }`}
          onClick={() => handleNavigation("Articles")}
        >
          Articles
        </li>
        <li
          className={`${
            active === "Article Users"
              ? "text-blue-500 font-bold underline"
              : ""
          }`}
          onClick={() => handleNavigation("Article Users")}
        >
          Article Users
        </li>
      </ul>
      <button onClick={handleSignOut}>Logout</button>
    </aside>
  );
};

export default Sidebar;
