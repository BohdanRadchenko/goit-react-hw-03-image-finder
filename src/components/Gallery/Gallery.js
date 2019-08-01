/*eslint-disable*/
import React, { Component } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

class Gallery extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className={styles.gallery}>
        {items.map(el => (
          <li className={styles.photoCard} key={el.id}>
            <PhotoCard {...el} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Gallery;
