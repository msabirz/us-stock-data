import React, { useContext } from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, FormLabel } from '@mui/material';
import { ArticleContext } from '../../context/ArticleContext';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { FilterOptions } from '../../types';
import './Filters.scss';

export const  Filters: React.FC = () => {
  const { articles, filterOptions, setFilterOptions } = useContext(ArticleContext)!;

  const categories = Array.from(new Set(articles.map(article => article.source)));
  const authors = Array.from(new Set(articles.map(article => article.author)));

  const handleCategoryChange = (category: string) => {
    setFilterOptions(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  };

  const handleAuthorChange = (author: string) => {
    setFilterOptions(prev => ({
      ...prev,
      authors: prev.authors.includes(author)
        ? prev.authors.filter(a => a !== author)
        : [...prev.authors, author],
    }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions(prev => ({
      ...prev,
      sortBy: event.target.value as FilterOptions['sortBy'],
    }));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Categories</FormLabel>
      <FormGroup>
        {categories.map(category => (
          <FormControlLabel
            control={
              <Checkbox
                checked={filterOptions.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            }
            label={category}
            key={category}
          />
        ))}
      </FormGroup>
      <FormLabel component="legend">Authors</FormLabel>
      <FormGroup>
        {authors.map(author => (
          <FormControlLabel
            control={
              <Checkbox
                checked={filterOptions.authors.includes(author)}
                onChange={() => handleAuthorChange(author)}
              />
            }
            label={author}
            key={author}
          />
        ))}
      </FormGroup>
      <FormLabel component="legend">Sort By</FormLabel>
      <RadioGroup value={filterOptions.sortBy} onChange={handleSortChange}>
        <FormControlLabel value="dateDesc" control={<Radio />} label={<div className='labelWithIcon'>
            <div >Date  </div><ArrowDownwardIcon/>
            </div>}  />
        <FormControlLabel value="dateAsc" control={<Radio />} label="Date: Earliest to Latest" />
        <FormControlLabel value="titleAsc" control={<Radio />} label="Title - Asending" />
        <FormControlLabel value="titleDesc" control={<Radio />} label="Title - Descending" />
      </RadioGroup>
    </FormControl>
  );
};

