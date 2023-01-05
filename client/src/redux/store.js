import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer } from "./reducers/productsReducer";
import { getProductDeatilsReducer } from "./reducers/productsReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductsDetails: getProductDeatilsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
