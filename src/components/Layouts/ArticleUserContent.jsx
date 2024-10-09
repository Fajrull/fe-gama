/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Fragments/Header";
import Sidebar from "../Fragments/Sidebar";
import TableArticle from "../Fragments/TableArticle";
import Card from "../Fragments/Card";

const ArticleUserContent = () => {
  return (
    <>
      <Header />
      <div className="flex w-full h-auto">
        <Sidebar />
        <main className="w-[90%] m-1 p-4 border-2">
          <Card />
        </main>
      </div>
    </>
  );
};

export default ArticleUserContent;
