import { PanelActionTypes } from "./panel.types";
import { UserData } from "../../auth/duck/auth.interfaces";

export interface SettingsData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  data: {
    age?: number;
    city?: string;
    phone?: number;
    avatar?:string;
  };
}

/*====Action Interfaces ====== */

export interface UpdateUserRequestAction {
  type: PanelActionTypes.UPDATE_USER_REQUEST;
}

export interface UpdateUserSuccessAction {
  type: PanelActionTypes.UPDATE_USER_SUCCESS;
  payload: UserData;
}

export interface UpdateUserFailureAction {
  type: PanelActionTypes.UPDATE_USER_FAILURE;
  payload: string;
}
