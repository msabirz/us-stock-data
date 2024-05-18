
  export interface Article {
    title: string;
    author: string;
    source: string;
    date: string;
    body: string;
    image:string
    url:string;
  }
  
  export interface FilterOptions {
    categories: string[];
    authors: string[];
    sortBy: 'dateAsc' | 'dateDesc' | 'titleAsc' | 'titleDesc';
  }
  
  export interface ArticleContextProps {
    loader:boolean;
    filteredArticles:Article[] | [];
    articles: Article[];
    setFilteredArticles: React.Dispatch<React.SetStateAction<Article[]>>;
    filterOptions: FilterOptions;
    setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  }