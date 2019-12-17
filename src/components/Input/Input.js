import React from 'react';

import './Input.css';

function Input({ label, id, ...restProps }) {
  return (
    <div className="Input">
      <input {...restProps} id={id} className="Input__input" />
      <label htmlFor={id} className="Input__label">{label}</label>
    </div>
  );
}

export default Input;
