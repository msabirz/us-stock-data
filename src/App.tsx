import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout/Layout';
import ArticleProvider from './context/ArticleContext';
import './App.scss';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ArticleProvider>
        <Layout />
      </ArticleProvider>
    </ThemeProvider>
   );
};

export default App;
