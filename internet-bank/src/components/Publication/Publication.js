import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.css';

const Publications = ({ step, items }) => {
  return (
    <article className={Styles.publication} key={items[step - 1].id}>
      <h2>
        {step}.{items[step - 1].title}
      </h2>
      <p>{items[step - 1].text}</p>
    </article>
  );
};

Publications.propTypes = {
  step: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Publications;
