import React from "react";
import useAuth from "../hooks/useAuth";
import ArticleUserContent from "../components/Layouts/ArticleUserContent";

const ArticleUser = () => {
  useAuth();
  return (
    <>
      <ArticleUserContent />
    </>
  );
};

export default ArticleUser;
