import { PanelActionTypes } from "./panel.types";
import { UpdateUserRequestAction, UpdateUserFailureAction, UpdateUserSuccessAction } from "./panel.interface";
import { UserData } from "../../auth/duck/auth.interfaces";

export const updateUserRequest = (): UpdateUserRequestAction => ({
  type: PanelActionTypes.UPDATE_USER_REQUEST
});

export const updateUserSuccess = (userData: UserData): UpdateUserSuccessAction => ({
  type: PanelActionTypes.UPDATE_USER_SUCCESS,
  payload: userData
});

export const updateUserFailure = (error: string): UpdateUserFailureAction => ({
  type: PanelActionTypes.UPDATE_USER_FAILURE,
  payload: error
});
