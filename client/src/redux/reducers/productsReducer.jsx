import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_PRODUCT_FAILED:
      return { error: action.payload };

    default:
      return state;
  }
};
export const getProductDeatilsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
      return { loading: true };
    case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionTypes.GET_PRODUCTS_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    case actionTypes.GET_PRODUCTS_DETAILS_RESET:
      return { product: {} };

    default:
      return state;
  }
};
