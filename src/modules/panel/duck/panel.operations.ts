import { SettingsData } from "./panel.interface";
import { Dispatch, Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData } from "../../auth/duck/auth.interfaces";
import {
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure
} from "./panel.actions";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";
import { panelUpdateUser } from "./panel.service";


export const panelUpdateUserActionCreator: ActionCreator<ThunkAction<Promise<Action>, UserData, any, AnyAction>> = (
  userId: string,
  settingsData: SettingsData
) => async (dispatch: Dispatch) => {
  dispatch(updateUserRequest());
  try {
    const userData = await panelUpdateUser(userId, settingsData).then(unwrapResponseData);
    return dispatch(updateUserSuccess(userData));
  } catch (error) {
    return dispatch(updateUserFailure(error.message));
  }
};
