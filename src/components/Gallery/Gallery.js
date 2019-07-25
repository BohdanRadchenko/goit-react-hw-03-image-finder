/*eslint-disable*/
import React, { Component } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

class Gallery extends Component {
  state = {
    modalOpen: false,
  };

  onOpen = () => {
    this.setState({
      modalOpen: true,
    });
  };

  onClose = () => {
    this.setState;
    ({
      modalOpen: false,
    });
  };

  render() {
    const { items } = this.props;
    const { modalOpen } = this.state;
    console.log(modalOpen);
    return (
      <ul className={styles.gallery}>
        {items.map(el => (
          <li className={styles.photoCard} key={el.id}>
            <PhotoCard
              {...el}
              isOpen={modalOpen}
              handleOpen={this.onOpen}
              handleClose={this.onClose}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Gallery;
