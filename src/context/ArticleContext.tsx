// src/context/ArticleContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { Article, ArticleContextProps, FilterOptions } from '../types';
import { baseURL } from '../constants';



export const ArticleContext = createContext<ArticleContextProps | undefined>(undefined);

const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const fetchNews = () => {
    fetch(`${baseURL}/api/v1/news`)
    .then((res)=>res.json())
    .then(res=>{
      setArticles(res)
      setLoader(false)
    })
    .catch((e)=>{  setLoader(false)})
  
  }

  useEffect(()=>{ 
    setLoader(true);
    fetchNews();
  },[])
  
  const [articles, setArticles] = useState<Article[]>([])
  const [loader, setLoader] = useState<boolean>(false)
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])


  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    authors: [],
    sortBy: 'dateDesc',
  });

  useEffect(()=>{
    const filteredArticles = articles
    ?.filter((article: Article) =>
      (filterOptions.categories.length === 0 || filterOptions.categories.includes(article.source)) &&
      (filterOptions.authors.length === 0 || filterOptions.authors.includes(article.author))
    )
    .sort((a, b) => {
      if (filterOptions.sortBy === 'dateAsc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (filterOptions.sortBy === 'dateDesc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (filterOptions.sortBy === 'titleAsc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredArticles(filteredArticles? filteredArticles : []);
    setCurrentPage(1)
  },[articles, filterOptions])

  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <ArticleContext.Provider value={{ loader, articles, filterOptions, setFilterOptions, currentPage, setCurrentPage, filteredArticles, setFilteredArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
