import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const item = payload;

      const itemExists = state.cartItems.find(
        (cartItem) => cartItem.productId === item.productId
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.productId === itemExists.productId ? item : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== payload
        ),
      };
    default:
      return state;
  }
};
