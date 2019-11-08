import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData, SignInCredentials, AuthActions } from "./auth.interfaces";
import { signInRequest, signInSuccess, signInFailure, clearErrors } from "./auth.actions";
import { authSignIn } from "./auth.service";

export const authSignInActionCreator: ActionCreator<
  ThunkAction<Promise<Action>, UserData, SignInCredentials, AnyAction>
> = (loginData: SignInCredentials) => async (dispatch: Dispatch) => {
  dispatch(signInRequest());
  try {
    const userData = await authSignIn(loginData).then(res => res.data);
    return dispatch(signInSuccess(userData));
  } catch (error) {
    return dispatch(signInFailure(error.message));
  }
};

export const authClearErrors = () => (dispatch: Dispatch<AuthActions>) => {
  dispatch(clearErrors());
};
