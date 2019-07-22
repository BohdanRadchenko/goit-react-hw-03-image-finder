/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';

const PhotoCard = () => (
  <div className={styles.photoCard}>
    <img src="" alt="" />

    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>thumb_up</i>
        1108
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>visibility</i>
        320321
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>comment</i>
        129
      </p>
      <p className={styles.statsItem}>
        <i className={styles.materialIcons}>cloud_download</i>
        176019
      </p>
    </div>

    {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
    <button type="button" className={styles.fullscreenButton}>
      <i className={styles.materialIcons}>zoom_out_map</i>
    </button>
  </div>
);

export default PhotoCard;
