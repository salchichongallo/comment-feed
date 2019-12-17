import React from 'react';
import propTypes from 'prop-types';

import { ReactComponent as Star } from './star.svg';

import './StarButton.css';

function StarButton({ active, className = '', ...restProps }) {
  const buttonClass = `StarButton StarButton--${active ? 'active' : 'unactive'} ${className}`;
  return (
    <button {...restProps} className={buttonClass}>
      <Star data-testid="star" />
    </button>
  );
}

StarButton.defaultProps = {
  active: false,
  'data-testid': 'starButton',
  type: 'button',
};

StarButton.propTypes = { active: propTypes.bool };

export default StarButton;
