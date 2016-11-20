import React, { PropTypes } from 'react';
import styles from './styles.scss';

const Feed = (props) => (
  <div className={styles.feed}>
    {props.items.map((item, key) => (
      <p key={key}>{item.id} - {item.title}</p>
    ))}
  </div>
);

Feed.propTypes = {
  items: PropTypes.array,
};

export default Feed;
