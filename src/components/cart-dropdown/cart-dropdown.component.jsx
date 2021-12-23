import React from 'react';
import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartItemsCount,
} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItems from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItems key={cartItem.id} item={cartItem}></CartItems>
      ))}
    </div>
    <CustomButton>Go TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
