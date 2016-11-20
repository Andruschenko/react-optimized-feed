import React, { Component } from 'react';

import Feed from './components/Feed';

import styles from './app.scss';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    Promise.resolve()
      .then(() => this.callApi())
      .then((items) => this.setState({ items }))
      .catch((error) => console.log(error));
  };

  async callApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response < 200 && response >= 300) {
      throw new Error("Error in fetch");
    }

    const responseJson = await response.json();

    if (responseJson && responseJson.error) {
      throw new Error(responseJson.error.message);
    }

    return responseJson;
  }

  render() {
    return (
      <div className={styles.app}>
        <Feed items={this.state.items} />
      </div>
    )
  }
}
