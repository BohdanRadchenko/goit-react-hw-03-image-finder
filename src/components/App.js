/*eslint-disable*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import axios from 'axios';
import styles from '../components/App.module.css';
import LoadMore from './LoadMore/LoadMore';

class App extends Component {
  state = {
    items: [],
    emptyItems: false,
    searchValue: '',
    perPage: '12',
  };

  servicesAPI = (searchValue, perPage) => {
    this.setState({
      isWait: true,
    });
    axios
      .get(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=1&per_page=${perPage}&key=12869322-4857e225bc17e2a940faa9df9`,
      )
      .then(({ data }) => this.setState({ items: data.hits }))
      .finally(() =>
        this.setState({
          isWait: false,
        }),
      );
  };

  componentDidMount() {
    const { searchValue, perPage } = this.state;
    this.servicesAPI(searchValue, perPage);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, perPage, items, isWait } = this.state;
    if (prevState.searchValue !== searchValue) {
      this.resetPerPage();
      this.servicesAPI(searchValue, perPage);
    }
    if (prevState.perPage !== perPage && perPage !== '12') {
      this.servicesAPI(searchValue, perPage);
    }
    if (items.length > 12) {
      this.scrollPageToBottom();
    }
  }

  resetPerPage = () => {
    this.setState({
      perPage: '12',
    });
  };

  getSearchValue = value => {
    this.setState({
      searchValue: value,
    });
  };

  handleMoreClick = e => {
    const count = 12;
    this.setState(prevState => ({
      perPage: String(Number(prevState.perPage) + count),
    }));
  };

  scrollPageToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { items, searchValue, emptyItems, isOpen } = this.state;
    return (
      <div className={styles.app}>
        <SearchForm
          getSearchValue={this.getSearchValue}
          searchValue={searchValue}
        />
        {emptyItems && (
          <div>
            <p>null</p>
          </div>
        )}
        <Gallery items={items} handleMoreClick={this.handleMoreClick} />
        {items.length > 0 && (
          <LoadMore
            className={styles.loadMore}
            handleMoreClick={this.handleMoreClick}
          />
        )}
      </div>
    );
  }
}

export default App;
