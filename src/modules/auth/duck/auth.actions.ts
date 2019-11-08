import { SignInRequestAction, UserData, SignInSuccessAction, SignInFailureAction } from "./auth.interfaces";
import { AuthActionTypes } from "./auth.types";

export const signInRequest = (): SignInRequestAction => ({
  type: AuthActionTypes.SIGN_IN_REQUEST
});

export const signInSuccess = (userData: UserData): SignInSuccessAction => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: userData
});

export const signInFailure = (error: string): SignInFailureAction => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: error
});
