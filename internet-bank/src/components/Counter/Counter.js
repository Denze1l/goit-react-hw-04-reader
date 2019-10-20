import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.css';

const Counter = ({ state }) => {
  return <p className={Styles.counter}>{state.step}/12</p>;
};

Counter.propTypes = {
  state: PropTypes.shape({
    step: PropTypes.number.isRequired,
  }).isRequired,
};
export default Counter;
