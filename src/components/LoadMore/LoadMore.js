/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMore.module.css';

const LoadMore = ({ handleMoreClick }) => {
  return (
    <>
      <button className={styles.button} type="button" onClick={handleMoreClick}>
        Load more
      </button>
    </>
  );
};

export default LoadMore;
