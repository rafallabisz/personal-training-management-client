import { SignInRequestAction, UserData, SignInSuccessAction, SignInFailureAction } from "./auth.interfaces";
import { UserActionTypes } from "./auth.types";

export const signInRequest = (): SignInRequestAction => ({
  type: UserActionTypes.SIGN_IN_REQUEST
});

export const signInSuccess = (userData: UserData): SignInSuccessAction => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: userData
});

export const signInFailure = (error: string): SignInFailureAction => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
