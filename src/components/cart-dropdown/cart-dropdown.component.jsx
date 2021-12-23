import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartItems from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

// dispatch function is already passed to the component as props
const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItems key={cartItem.id} item={cartItem}></CartItems>
          ))
        ) : (
          <span className='empty-message'>Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout', { replace: true });
          dispatch(toggleCartHidden());
        }}
      >
        Go To CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
