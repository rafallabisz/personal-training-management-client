import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AddComment } from "./comments.interfaces";
import { addCommentRequest, addCommentSuccess, addCommentFailure } from "./comments.actions";
import { unwrapResponseData } from "../../../../utils/unwrapResponseData";
import { sendNewComment } from "./comments.service";


export const addCommentActionCreator: ActionCreator<
ThunkAction<Promise<Action>, any, any, AnyAction>
> = (trainerId: string,addComment:AddComment) => async (dispatch: Dispatch) => {
dispatch(addCommentRequest());
try {
  await sendNewComment(trainerId,addComment)
  return dispatch(addCommentSuccess());
} catch (error) {
  return dispatch(addCommentFailure(error.message));
}
};
