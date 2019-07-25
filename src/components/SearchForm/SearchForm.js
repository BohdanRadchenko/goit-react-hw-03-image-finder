/*eslint-disable */
import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    value: '',
    upperSearch: 'Search images...',
  };

  getValue = e => {
    this.setState({ value: e.target.value });
  };

  getSearchValue = e => {
    const { getSearchValue } = this.props;
    const { value } = this.state;
    e.preventDefault();
    getSearchValue(value);
    this.setUpperSearch(value);
    this.reset();
  };

  setUpperSearch = value => {
    const upper = value.toUpperCase();
    this.setState({
      upperSearch: upper,
    });
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value, upperSearch } = this.state;
    const { searchValue } = this.props;
    return (
      <form className={styles.searchForm} onSubmit={this.getSearchValue}>
        <input
          type="text"
          autoComplete="off"
          // placeholder="Search images..."
          placeholder={upperSearch}
          value={value}
          onChange={this.getValue}
          className={styles.searchFormInput}
        />
      </form>
    );
  }
}

export default SearchForm;
