/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = ({
  webformatURL,
  largeImageURL,
  likes,
  views,
  comments,
  downloads,
}) => (
  <div className={styles.photoCard}>
    <img src={webformatURL} alt="" />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>cloud_download</i>
        {downloads}
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button type="button" className={styles.fullscreenButton}>
      <i className={styles.materialIcons}>zoom_out_map</i>
    </button>
  </div>
);

export default PhotoCard;
