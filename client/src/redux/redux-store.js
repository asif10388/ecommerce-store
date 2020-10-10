import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import alert from "./reducers/alert/alert.reducer";
import { productListReducer } from "./reducers/product/product.reducer";
import { productDetailsReducer } from "./reducers/product/product.reducer";
import { cartReducer } from "./reducers/cart/cart.reducer";

const rootReducer = combineReducers({
  alert,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
