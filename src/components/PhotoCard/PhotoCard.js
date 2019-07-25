/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

const PhotoCard = ({
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
  isOpen,
  handleOpen,
  handleClose,
}) => (
  <div className={styles.photoCard}>
    <img className={styles.img} src={webformatURL} alt="" />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>

    {!isOpen && (
      <button
        type="button"
        className={styles.fullscreenButton}
        onClick={handleOpen}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    )}
    {isOpen && <Modal url={largeImageURL} onClose={handleClose} />}
  </div>
);

export default PhotoCard;
