import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData, SignInCredentials } from "./auth.interfaces";
import { signInRequest, signInSuccess, signInFailure } from "./auth.actions";
import { fetchUsers } from "./auth.service";

export const authLogIn: ActionCreator<ThunkAction<Promise<Action>, UserData, SignInCredentials, AnyAction>> = (
  loginData: SignInCredentials
) => async (dispatch: Dispatch) => {
  dispatch(signInRequest());
  try {
    const userData = await fetchUsers(loginData).then(res => res.data);
    return dispatch(signInSuccess(userData));
  } catch (error) {
    return dispatch(signInFailure(error.message));
  }
};
