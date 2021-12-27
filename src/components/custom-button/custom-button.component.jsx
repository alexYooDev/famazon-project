import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

/* presentational component? : Functional componenent with no state declared */
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
