/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import DashboardUsersPage from "../pages/DashboardUsers";
import ArticleAdminPage from "../pages/ArticleAdmin";
import ArticleUserPage from "../pages/ArticleUser";
import ArticleDetialPage from "../pages/ArticleDetail";
import ProfilePage from "../pages/Profile";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<ProfilePage />} />
      <Route path="/dashboard-users" element={<DashboardUsersPage />} />
      <Route path="/dashboard/articles" element={<ArticleAdminPage />} />
      <Route path="/dashboard/articles-users" element={<ArticleUserPage />} />
      <Route path="/articles-users/:id" element={<ArticleDetialPage />} />
    </Routes>
  );
};

export default Router;
