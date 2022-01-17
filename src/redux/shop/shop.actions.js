import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const changeShopParams = (param) => ({
  type: ShopActionTypes.CHANGE_PARAMS,
  payload: param,
});
