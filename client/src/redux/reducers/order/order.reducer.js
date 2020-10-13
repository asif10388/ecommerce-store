import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAILED } from "./order.types";

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return {
        order: payload,
        loading: false,
        success: true
      };

    case ORDER_CREATE_FAILED:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
