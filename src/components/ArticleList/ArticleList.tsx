import React, { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";
import { Article } from "../../types";
import Pagination from "../Pagination/Pagination";
import { NewsArticle } from "./parts/NewsArticle";
import "./ArticleList.scss";

const ArticleList: React.FC = () => {
  const { currentPage, filteredArticles } = useContext(ArticleContext)!;
  const articlesPerPage = 5;
  const startIdx = (currentPage - 1) * articlesPerPage;
  const endIdx = startIdx + articlesPerPage;

  const paginatedArticles = filteredArticles.slice(startIdx, endIdx);
  return (
    <div className="article-list">
      {paginatedArticles.map((article: Article) => (
        <NewsArticle article={article} key={article.title} />
      ))}
      {paginatedArticles.length === 0
        ? " No result found for Selection. Try chaning the selections. "
        : null}
      <Pagination />
    </div>
  );
};

export default ArticleList;
