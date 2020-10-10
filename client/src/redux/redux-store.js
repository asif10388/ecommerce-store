import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import alert from "./reducers/alert/alert.reducer";
import { productListReducer } from "./reducers/product/product.reducer";
import { productDetailsReducer } from "./reducers/product/product.reducer";

const rootReducer = combineReducers({
  alert,
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
