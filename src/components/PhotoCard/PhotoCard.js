/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhotoCard.module.css';
import Modal from '../Modal/Modal';

class PhotoCard extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleOpen = () => {
    console.log('toogle modal');
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    const {
      id,
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
    } = this.props;
    const { isModalOpen } = this.state;
    console.log(isModalOpen);
    return (
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

        {!isModalOpen && (
          <button
            type="button"
            className={styles.fullscreenButton}
            onClick={this.handleToggleOpen}
          >
            <i className="material-icons">zoom_out_map</i>
          </button>
        )}
        {isModalOpen && (
          <Modal id={id} url={largeImageURL} onClose={this.handleToggleOpen}>
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <img src={largeImageURL} alt="" />
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default PhotoCard;
