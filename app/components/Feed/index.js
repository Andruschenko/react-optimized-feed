import React, { PropTypes } from 'react';
import styles from './styles.scss';

const times = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const Feed = (props) => (
  <div className={styles.container}>
    {
      times.map(t =>
        <div key={t} className={styles.listItem}>
          <img src={`http://lorempicsum.com/simpsons/350/200/${t}`} alt={`Simpsons ${t}`} />
          <p>{text}</p>
        </div>
      )
    }
  </div>
);

Feed.propTypes = {
  items: PropTypes.array,
};

export default Feed;
