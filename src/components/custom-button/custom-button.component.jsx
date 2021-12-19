import React from 'react';

import './custom-button.styles.scss';

/* presentational component? : Functional componenent with no state declared */
const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
