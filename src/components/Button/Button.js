import React from 'react';

import './Button.css';

function Button(props) {
  return <button type="button" {...props} className="Button" />;
}

export default Button;
