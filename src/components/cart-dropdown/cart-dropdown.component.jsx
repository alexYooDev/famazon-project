import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItems from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartDropDown = ({ cartItems }) => {
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
      <CustomButton onClick={() => navigate('/checkout', { replace: true })}>
        Go To CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
