import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItems from '../cart-item/cart-item.component';

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CheckoutButton,
} from './cart-dropdown.style';

// dispatch function is already passed to the component as props
const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem}></CartItems>
          ))
        ) : (
          <EmptyMessageContainer>Your Cart is Empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CheckoutButton
        onClick={() => {
          navigate('/checkout', { replace: true });
          dispatch(toggleCartHidden());
        }}
      >
        Go To CHECKOUT
      </CheckoutButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
