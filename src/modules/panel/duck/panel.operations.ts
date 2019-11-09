import { OfferDescription } from "./panel.interface";
import { Dispatch, Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { UserData } from "../../auth/duck/auth.interfaces";
import { addOfferRequest, addOfferFailure, addOfferSuccess } from "./panel.actions";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";
import { panelAddOffer } from "./panel.service";

export const panelAddOfferActionCreator: ActionCreator<ThunkAction<Promise<Action>, UserData, any, AnyAction>> = (
  description: OfferDescription,
  id: string
) => async (dispatch: Dispatch) => {
  dispatch(addOfferRequest());
  try {
    const userData = await panelAddOffer(description, id).then(unwrapResponseData);
    return dispatch(addOfferSuccess(userData));
  } catch (error) {
    return dispatch(addOfferFailure(error.message));
  }
};
