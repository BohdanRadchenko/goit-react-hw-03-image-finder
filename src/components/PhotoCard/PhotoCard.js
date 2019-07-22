/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = () => (
  <div className="photo-card">
  <img src="" alt="" />

  <div className="stats">
    <p className="stats-item">
      <i className="material-icons">thumb_up</i>
      1108
    </p>
    <p className="stats-item">
      <i className="material-icons">visibility</i>
      320321
    </p>
    <p className="stats-item">
      <i className="material-icons">comment</i>
      129
    </p>
    <p className="stats-item">
      <i className="material-icons">cloud_download</i>
      176019
    </p>
  </div>

  <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении -->
  <button type="button" class="fullscreen-button">
    <i className="material-icons">zoom_out_map</i>
  </button>
</div>
);

export default PhotoCard;