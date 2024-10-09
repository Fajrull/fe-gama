import React, { useEffect, useState } from "react";
import Header from "../Fragments/Header";
import Sidebar from "../Fragments/Sidebar";
import { getArticlesById } from "../../services/Article";
import { useParams } from "react-router-dom";

const ArticleDetailContent = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      const data = await getArticlesById(id);

      setArticle(data);
    };
    getArticle();
  }, [id]);

  return (
    <>
      <Header />
      <div className="flex w-full h-auto">
        <Sidebar />
        <main className="w-[90%] m-1 p-4 border-2">
          <div className="p-4">
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <img
              src={article.image}
              alt={article.caption}
              className="w-full h-[400px] object-cover mt-4"
            />
            <p className="mt-4">{article.caption}</p>
            <p>{article.content}</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ArticleDetailContent;
