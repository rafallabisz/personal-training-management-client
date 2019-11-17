import { AuthActionTypes } from "./auth.types";
import {
  UpdateUserRequestAction,
  UpdateUserSuccessAction,
  UpdateUserFailureAction
} from "../../panel/duck/panel.interface";
import { CommentReducerState } from "../../userPanel/comments/duck/comments.interfaces";
import { OfferReducerState } from "../../trainerPanel/offerView/duck/offers.interfaces";

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

export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isTrainer: boolean;
  password: string;
  data: {
    age: number;
    city: string;
    phone: number;
  };
  offers: [
    {
      _id: string;
      description: string;
    }
  ];
  comments: [
    {
      author: string;
      content: string;
      rating: number;
    }
  ];
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
  trainerComments: CommentReducerState;
  trainerOffers: OfferReducerState;
}
