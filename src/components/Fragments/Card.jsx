import React, { useState } from "react";
import { GetArticles } from "../../services/Article";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [dataArticles, setdDataArticles] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getDataArticles = async () => {
      const data = await GetArticles();
      // console.log(data);
      setdDataArticles(data.data);
    };
    getDataArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = dataArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(dataArticles.length / articlesPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  //   const handleCardClick = (id) => {
  //     navigate(`/articles-users/${id}`);
  //   };

  return (
    <>
      {currentArticles.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col w-[500px] p-4 border border-gray-300 rounded-lg"
                // onClick={() => handleCardClick(article.id)}
              >
                <img
                  src={article.image}
                  alt={article.caption}
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <h1 className="text-xl font-semibold mt-2">{article.title}</h1>
                <p className="mt-1">{article.caption}</p>
              </div>
            ))}
          </div>

          <Stack spacing={2} className="mt-6 items-center">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </>
      ) : (
        <p>No articles available</p>
      )}
    </>
  );
};

export default Card;
