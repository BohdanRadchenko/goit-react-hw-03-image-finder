/*eslint-disable */
import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = () => (
  <form className={styles.searchForm}>
    <input type="text" autoComplete="off" placeholder="Search images..." />
  </form>
);

export default SearchForm;
