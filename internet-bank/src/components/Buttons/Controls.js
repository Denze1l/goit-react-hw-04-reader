import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.css';

const Controls = ({ handelPlus, handelMinus, step }) => {
  return (
    <section className={Styles.controls}>
      <button
        onClick={handelMinus}
        type="button"
        disabled={step === 1 && true}
        className={Styles.button}
      >
        Назад
      </button>
      <button
        onClick={handelPlus}
        type="button"
        disabled={step === 12 && true}
        className={Styles.button}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  step: PropTypes.number.isRequired,
  handelPlus: PropTypes.func.isRequired,
  handelMinus: PropTypes.func.isRequired,
};

export default Controls;
