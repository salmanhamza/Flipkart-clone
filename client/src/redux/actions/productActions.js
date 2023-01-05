import axios from "axios";
import * as actionTypes from "../constants/productConstants";
const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/products`);

    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCT_FAILED, payload: error.message });
  }
};
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });

    let { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAILED,
      payload: error.message,
    });
  }
};
