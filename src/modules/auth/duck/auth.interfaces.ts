import { AuthActionTypes } from "./auth.types";
import {
  AddOfferRequestAction,
  AddOfferFailureAction,
  AddOfferSuccessAction,
  DeleteOfferRequestAction,
  DeleteOfferSuccessAction,
  DeleteOfferFailureAction,
  UpdateUserRequestAction,
  UpdateUserSuccessAction,
  UpdateUserFailureAction
} from "../../panel/duck/panel.interface";
import { CommentReducerState } from "../../userPanel/comments/duck/comments.interfaces";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  firstName: string;
  lastName: string;
  email: string;
  isTrainer: boolean;
  password: string;
}

export interface OfferDescriptionResponse {
  _id: string;
  description: string;
}

export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isTrainer: boolean;
  password: string;
  offers: OfferDescriptionResponse[];
  data: {
    age: number;
    city: string;
    phone: number;
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

export interface SignUpRequestAction {
  type: AuthActionTypes.SIGN_UP_REQUEST;
}

export interface SignUpSuccessAction {
  type: AuthActionTypes.SIGN_UP_SUCCESS;
  payload: UserData;
}

export interface SignUpFailureAction {
  type: AuthActionTypes.SIGN_UP_FAILURE;
  payload: string;
}

export interface SignOutAction {
  type: AuthActionTypes.SIGN_OUT;
}

export interface ClearErrorsAction {
  type: AuthActionTypes.CLEAR_ERRORS;
}

export type AuthActions =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | SignOutAction
  | ClearErrorsAction
  | AddOfferRequestAction
  | AddOfferSuccessAction
  | AddOfferFailureAction
  | DeleteOfferRequestAction
  | DeleteOfferSuccessAction
  | DeleteOfferFailureAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction;

/*====== Reducer Interface ====== */
export interface AuthReducerState {
  currentUser?: UserData;
  isFetching: boolean;
  error?: string;
  isAuth: boolean;
}

export interface Store {
  user: AuthReducerState;
  trainerComments:CommentReducerState
}
