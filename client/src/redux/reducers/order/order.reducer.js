import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAILED,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAILED,
  ORDER_PAY_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAILED,
  ORDER_LIST_RESET,
  ALL_ORDERS_LIST_REQUEST,
  ALL_ORDERS_LIST_SUCCESS,
  ALL_ORDERS_LIST_FAILED,
  ALL_ORDERS_LIST_RESET,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAILED,
  ORDER_DELIVER_RESET,
} from "./order.types";

export const orderCreateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return {
        order: payload,
        loading: false,
        success: true,
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

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ORDER_DETAILS_SUCCESS:
      return {
        order: payload,
        loading: false,
      };

    case ORDER_DETAILS_FAILED:
      return {
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };

    case ORDER_PAY_SUCCESS:
      return {
        success: true,
        loading: false,
      };

    case ORDER_PAY_FAILED:
      return {
        error: payload,
        loading: false,
      };

    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDeliverReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_DELIVER_REQUEST:
      return { loading: true };

    case ORDER_DELIVER_SUCCESS:
      return {
        success: true,
        loading: false,
      };

    case ORDER_DELIVER_FAILED:
      return {
        error: payload,
        loading: false,
      };

    case ORDER_DELIVER_RESET:
      return {};

    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };

    case ORDER_LIST_SUCCESS:
      return {
        orders: payload,
        loading: false,
      };

    case ORDER_LIST_FAILED:
      return {
        error: payload,
        loading: false,
      };

    case ORDER_LIST_RESET:
      return { orders: [] };

    default:
      return state;
  }
};

export const allOrdersReducer = (state = { orders: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALL_ORDERS_LIST_REQUEST:
      return { loading: true };

    case ALL_ORDERS_LIST_SUCCESS:
      return {
        orders: payload,
        loading: false,
      };

    case ALL_ORDERS_LIST_FAILED:
      return {
        error: payload,
        loading: false,
      };

    case ALL_ORDERS_LIST_RESET:
      return { orders: [] };

    default:
      return state;
  }
};
