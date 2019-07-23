/*eslint-disable */
import React, { Component } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = { value: '' };

  getValue = e => {
    this.setState({ value: e.target.value });
  };

  getSearchValue = e => {
    const { getSearchValue } = this.props;
    const { value } = this.state;
    e.preventDefault();
    getSearchValue(value);
    this.reset();
  };

  reset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.getSearchValue}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={value}
          onChange={this.getValue}
          className={styles.searchFormInput}
        />
      </form>
    );
  }
}

export default SearchForm;
