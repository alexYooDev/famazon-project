import { createSelector } from 'reselect';

// pulls a specific state element from the redux store;
const selectCart = (state) => state.cart;

// returns a memoized selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
