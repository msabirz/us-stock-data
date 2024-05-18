import React, { useContext } from 'react';
import { Link } from '@mui/material';
import { ArticleContext } from '../../context/ArticleContext';
import { Article } from '../../types';
import Pagination from '../Pagination/Pagination';
import './ArticleList.scss';
import { baseURL } from '../../constants';


const ArticleList: React.FC = () => {
  const { currentPage, filteredArticles } = useContext(ArticleContext)!;
  const articlesPerPage = 5;
  const startIdx = (currentPage - 1) * articlesPerPage;
  const endIdx = startIdx + articlesPerPage;
 
  const paginatedArticles = filteredArticles.slice(startIdx, endIdx);
  return (
    <div className="article-list">
      {paginatedArticles.map((article: Article) => (
        <Link key={article.title} className="article" href={article.url}>
          <div className="row-1">
            <div className="image-container">
              <img src={`${baseURL}${article.image}`} alt={article.title}  />
            </div>
            <div className="date-category">
              <div className='date-category-container'>
                  <p className="date">{article.date}</p>
                  <p className="category">{article.source}</p>   
              </div>
               <div className="row-title">
              <div className="title" dangerouslySetInnerHTML={{__html:article.title}}></div>
            </div>
            </div>
          </div>
          
          <div className="row-2">
            <div className="deep" dangerouslySetInnerHTML={{__html:article.body}}></div>
          </div>
          <div className="row-3">
            <div className="author"><strong>{article.author}</strong></div>
          </div>
        </Link>
      ))}
      {paginatedArticles.length===0 ? " No result found for Selection. Try chaning the selections. ":null}
      <Pagination />
    </div>
  );
};

export default ArticleList;
