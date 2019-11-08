import { AuthReducerState, AuthActions } from "./auth.interfaces";
import { Reducer } from "redux";
import { AuthActionTypes } from "./auth.types";

const initState: AuthReducerState = {
  isFetching: false,
  isLoggedIn: false
};

export const authReducer: Reducer<AuthReducerState, AuthActions> = (state = initState, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        isLoggedIn: true
      };
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
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
