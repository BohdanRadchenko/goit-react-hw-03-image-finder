/*eslint-disable*/
import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

const Gallery = ({ items }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(el => (
        <li className={styles.photoCard} key={el.id}>
          <PhotoCard {...el} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
