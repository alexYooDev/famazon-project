import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItems } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='checkout item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <span className='remove-button' onClick={() => clearItems(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItems: (item) => dispatch(clearItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);