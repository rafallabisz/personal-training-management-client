import {
  SignInRequestAction,
  UserData,
  SignInSuccessAction,
  SignInFailureAction,
  ClearErrorsAction,
  SignUpRequestAction,
  SignUpSuccessAction,
  SignUpFailureAction,
  SignOutAction
} from "./auth.interfaces";
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

export const signUpRequest = (): SignUpRequestAction => ({
  type: AuthActionTypes.SIGN_UP_REQUEST
});

export const signUpSuccess = (userData: UserData): SignUpSuccessAction => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: userData
});

export const signUpFailure = (error: string): SignUpFailureAction => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const signOut = (): SignOutAction => ({
  type: AuthActionTypes.SIGN_OUT
});

export const clearErrors = (): ClearErrorsAction => ({
  type: AuthActionTypes.CLEAR_ERRORS
});
