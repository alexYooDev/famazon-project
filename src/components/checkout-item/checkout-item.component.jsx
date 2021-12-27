import { connect } from 'react-redux';

import { addItem, removeItem, clearItems } from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItems, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='checkout item' />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <PriceContainer>${price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItems(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItems: (item) => dispatch(clearItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
