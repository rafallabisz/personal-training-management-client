import { AuthActionTypes } from "./auth.types";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  isTrainer: boolean;
  password: string;
  data: {
    age: number;
    city: string;
  };
}

/*===== Action Interfaces ===== */
export interface SignInRequestAction {
  type: AuthActionTypes.SIGN_IN_REQUEST;
}

export interface SignInSuccessAction {
  type: AuthActionTypes.SIGN_IN_SUCCESS;
  payload: UserData;
}

export interface SignInFailureAction {
  type: AuthActionTypes.SIGN_IN_FAILURE;
  payload: string;
}

export interface ClearErrorsAction {
  type: AuthActionTypes.CLEAR_ERRORS;
}

export type AuthActions = SignInRequestAction | SignInSuccessAction | SignInFailureAction | ClearErrorsAction;

/*====== Reducer Interface ====== */
export interface AuthReducerState {
  currentUser?: UserData;
  isFetching: boolean;
  error?: string;
  isLoggedIn: boolean;
}

export interface Store {
  user: AuthReducerState;
}
