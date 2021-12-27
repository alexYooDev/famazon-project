import React from 'react';

import {
  CartItemContainer,
  ImgContainer,
  ItemDetailContainer,
  NameContainer,
  PriceContainer,
} from './cart-item.styles';

const CartItems = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImgContainer src={imageUrl} alt='item' />
    <ItemDetailContainer className='item-details'>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
      {quantity} x ${price}
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItems;
