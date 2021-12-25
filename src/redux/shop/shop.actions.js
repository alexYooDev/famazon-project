import ShopActionTypes from './shop.types';

export const changeShopParams = (param) => ({
  type: ShopActionTypes.CHANGE_PARAMS,
  payload: param,
});
