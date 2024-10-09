/* eslint-disable no-unused-vars */
import React from "react";
import ArticleAdminContent from "../components/Layouts/ArticleAdminContent";
import useAuth from "../hooks/useAuth";

const ArticleAdmin = () => {
  useAuth();
  return (
    <>
      <ArticleAdminContent />
    </>
  );
};

export default ArticleAdmin;
