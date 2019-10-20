/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Publications from '../Publication/Publication';
import PubList from '../publication.json';
import Counter from '../Counter/Counter';
import Controls from '../Buttons/Controls';
import Style from './style.module.css';

const Options = [{ value: 'chocolate', label: 'Chocolate' }];

class Reader extends Component {
  state = {
    step: 1,
  };

  componentDidMount() {
    const { history, location } = this.props;
    const articleObj = queryString.parse(location.search);
    const aticleNumber = Number(articleObj.item);
    if (
      aticleNumber < PubList.length ||
      aticleNumber >= 1 ||
      aticleNumber !== isNaN(aticleNumber)
    ) {
      history.push({
        pathname: '/reader',
        search: '?item=1',
      });
    } else {
      this.setState({ step: aticleNumber });
    }
  }

  handelPlus = () => {
    const { history } = this.props;
    const { step } = this.state;
    history.push({
      pathname: '/reader',
      search: `?item=${step + 1}`,
    });
    if (step < 12) this.setState({ step: step + 1 });
  };

  handelMinus = () => {
    const { history } = this.props;
    const { step } = this.state;
    history.push({
      pathname: '/reader',
      search: `?item=${step - 1}`,
    });
    if (step > 1) this.setState({ step: step - 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className={Style.reader}>
        <Controls
          handelPlus={this.handelPlus}
          step={step}
          handelMinus={this.handelMinus}
          options={Options}
        />
        <Counter state={this.state} />
        <Publications step={step} items={PubList} />
      </div>
    );
  }
}

Reader.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reader;
