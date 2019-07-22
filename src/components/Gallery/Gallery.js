/*eslint-disable*/
import React from 'react';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ photo }) => (
  <ul className={styles.gallery}>
    <PhotoCard />
  </ul>
);

export default Gallery;
