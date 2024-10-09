import React from "react";
import useAuth from "../hooks/useAuth";
import ArticleDetialContent from "../components/Layouts/ArticleDetailContent";

const ArticleDetial = () => {
  useAuth();
  return (
    <>
      <ArticleDetialContent />
    </>
  );
};

export default ArticleDetial;
