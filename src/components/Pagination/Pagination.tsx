import React, { useContext } from 'react';
import { ArticleContext } from '../../context/ArticleContext';
import { Pagination as MuiPagination } from '@mui/material';
import './Pagination.scss';

const Pagination: React.FC = () => {
  const { currentPage, setCurrentPage, filteredArticles } = useContext(ArticleContext)!;
  const articlesPerPage = 5;
  const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="pagination">
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
