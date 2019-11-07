import { UserActionTypes } from "./auth.types";

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

export interface SignInRequestAction {
  type: UserActionTypes.SIGN_IN_REQUEST;
}

export interface SignInSuccessAction {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: UserData;
}

export interface SignInFailureAction {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: string;
}

export type UserActions = SignInRequestAction | SignInSuccessAction | SignInFailureAction;

export interface UserReducerState {
  currentUser?: UserData;
  isFetching: boolean;
  error?: string;
}

export interface Store {
  user: UserReducerState;
}
