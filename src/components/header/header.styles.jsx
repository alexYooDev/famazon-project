import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/* creates css block that could be added on to styled components 
enables the developer to make changes in one place 
for different kinds of elements with the same style
*/
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

/* Wrapping the components in styled */
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `;
