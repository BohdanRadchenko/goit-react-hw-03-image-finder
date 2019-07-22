/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import axios from 'axios';
import Preloader from './Preloader/Preloader';

// const API = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${find}&page=${page}&per_page=12&key=12869322-4857e225bc17e2a940faa9df9`;
// const find = 'cat';
// const page = '1';

// const API =
//   '  https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=12869322-4857e225bc17e2a940faa9df9';

class App extends Component {
  state = {
    items: [],
    searchValue: 'popular',
    page: '1',
    perPage: '12',
    preloader: false,
  };

  findByApi = (searchValue, page = '1', perPage = '12') => {
    this.setState({ preloader: true });
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${page}&per_page=${perPage}&key=12869322-4857e225bc17e2a940faa9df9`,
      )
      .then(({ data }) => this.setState({ items: data.hits }))
      .finally(() => this.setState({ preloader: false }));
  };

  componentDidMount() {
    const { searchValue, page, perPage } = this.state;
    this.findByApi(searchValue);
    // const { API } = this.state;
    // axios.get(API).then(({ data }) => this.setState({ items: data.hits }));
    // axios.get(API).then(data => console.log(data));
  }

  componentDidUpdate(prev, state) {
    if (prev !== state) {
      this.findByApi(state.searchValue);
    }
  }

  getSearchValue = value => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    const { items, searchValue, preloader } = this.state;
    console.log(searchValue);
    return (
      <>
        {preloader && <Preloader />}
        {!preloader && (
          <SearchForm
            getSearchValue={this.getSearchValue}
            searchValue={searchValue}
          />
        )}
        <Gallery items={items} />
      </>
    );
  }
}

export default App;
