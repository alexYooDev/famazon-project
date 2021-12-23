import CartActionTypes from './cart.types';
import {
  addItemToCart,
  removeItemsFromCart,
  clearItemFromCart,
} from './cart.utils';

// where the initial state is defined
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

// functions that define the dynamics for each action types given
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
