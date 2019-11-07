import { UserReducerState, UserActions } from "./auth.interfaces";
import { Reducer } from "redux";
import { UserActionTypes } from "./auth.types";

const initState: UserReducerState = {
  isFetching: false,
  isLoggedIn: false
};

export const userReducer: Reducer<UserReducerState, UserActions> = (state = initState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false,
        isLoggedIn: true
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};
