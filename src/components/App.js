/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <SearchForm />
        <Gallery />
      </>
    );
  }
}

export default App;
