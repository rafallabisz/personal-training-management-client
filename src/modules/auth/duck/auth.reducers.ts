import { AuthReducerState, AuthActions } from "./auth.interfaces";
import { Reducer } from "redux";
import { AuthActionTypes } from "./auth.types";

const initState: AuthReducerState = {
  isFetching: false,
  isAuth: false
};

export const authReducer: Reducer<AuthReducerState, AuthActions> = (state = initState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
    case AuthActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        isAuth: true
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
    case AuthActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        isAuth: false,
        currentUser: undefined,
        error: undefined
      };

    case AuthActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: undefined
      };

    default:
      return state;
  }
};
