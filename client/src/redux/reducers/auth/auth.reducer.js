import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILED,
  USER_DETAILS_RESET,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILED,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILED,
  USER_STATE_UPDATE_REQUEST,
  USER_STATE_UPDATE_SUCCESS,
  USER_STATE_UPDATE_FAILED,
  USER_STATE_UPDATE_RESET
} from "./auth.types";

export const userLoginReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      return { userInfo: payload, loading: false };

    case LOGIN_FAILED:
      return { loading: false, error: payload };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST:
      return { loading: true };

    case REGISTER_SUCCESS:
      return { userInfo: payload, loading: false };

    case REGISTER_FAILED:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return { user: payload, loading: false };

    case USER_DETAILS_FAILED:
      return { loading: false, error: payload };

    case USER_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_UPDATE_REQUEST:
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      return { userInfo: payload, success: true, loading: false };

    case USER_UPDATE_FAILED:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_REQUEST:
      return { loading: true };

    case USER_LIST_SUCCESS:
      return { users: payload, loading: false };

    case USER_LIST_FAILED:
      return { loading: false, error: payload };
    case USER_LIST_RESET: {
      return { users: [] };
    }

    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DELETE_REQUEST:
      return { loading: true };

    case USER_DELETE_SUCCESS:
      return { success: true, loading: false };

    case USER_DELETE_FAILED:
      return { loading: false, error: payload };

    default:
      return state;
  }
};

export const userUpdateStateReducer = (state = { user: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_STATE_UPDATE_REQUEST:
      return { loading: true };

    case USER_STATE_UPDATE_SUCCESS:
      return { success: true, loading: false };

    case USER_STATE_UPDATE_FAILED:
      return { loading: false, error: payload };

    case USER_STATE_UPDATE_RESET:
      return { user: {} }

    default:
      return state;
  }
};
