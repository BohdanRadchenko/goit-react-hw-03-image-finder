/*eslint-disable*/
import React from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(el => (
        <li key={el.id}>
          <PhotoCard {...el} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
