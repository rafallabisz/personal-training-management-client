import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData, SignInCredentials, AuthActions, SignUpCredentials } from "./auth.interfaces";
import {
  signInRequest,
  signInSuccess,
  signInFailure,
  clearErrors,
  signUpFailure,
  signUpRequest,
  signUpSuccess
} from "./auth.actions";
import { authSignIn, authSignUp } from "./auth.service";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";

export const authSignInActionCreator: ActionCreator<
  ThunkAction<Promise<Action>, UserData, SignInCredentials, AnyAction>
> = (loginData: SignInCredentials) => async (dispatch: Dispatch) => {
  dispatch(signInRequest());
  try {
    const userData = await authSignIn(loginData).then(unwrapResponseData);
    return dispatch(signInSuccess(userData));
  } catch (error) {
    return dispatch(signInFailure(error.message));
  }
};

export const authSignUpActionCreator: ActionCreator<
  ThunkAction<Promise<Action>, UserData, SignUpCredentials, AnyAction>
> = (registerData: SignUpCredentials) => async (dispatch: Dispatch) => {
  dispatch(signUpRequest());
  try {
    const userData = await authSignUp(registerData).then(unwrapResponseData);
    return dispatch(signUpSuccess(userData));
  } catch (error) {
    return dispatch(signUpFailure(error.message));
  }
};

export const authClearErrors = () => (dispatch: Dispatch<AuthActions>) => {
  dispatch(clearErrors());
};
