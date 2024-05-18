import React, { useContext } from 'react';
import {Filters} from '../Filters/Filters';
import ArticleList from '../ArticleList/ArticleList';
import './Layout.scss';
import { ArticleContext } from '../../context/ArticleContext';
import { Skeleton } from '@mui/material';

const Layout: React.FC = () => {
  const { loader } = useContext(ArticleContext)!;
    return (
    <div className="layout">
      {loader ? <><Skeleton variant="rectangular" animation={'wave'} width={280} height={560} sx={{marginRight:'40px'}} /><Skeleton variant="rectangular" animation={'wave'} width={910} height={560} /></> : <><div className="filters">
        <Filters />
      </div>
      <div className="articles">
        <ArticleList />
      </div></>}
    </div>
  );
};

export default Layout;
