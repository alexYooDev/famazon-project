import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

/* presentational component? : Functional componenent with no state declared */
const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <Link className='option' to='/sign-in'>
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
