import { ActionCreator, Action, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AddComment, CommentsResponse } from "./comments.interfaces";
import {
  addCommentRequest,
  addCommentSuccess,
  addCommentFailure,
  getTrainerCommentsRequest,
  getTrainerCommentsSuccess,
  getTrainerCommentsFailure
} from "./comments.actions";
import { unwrapResponseData } from "../../../utils/unwrapResponseData";
import { sendNewComment, fetchTrainerComments } from "./comments.service";

export const addCommentActionCreator: ActionCreator<ThunkAction<Promise<Action>, any, any, AnyAction>> = (
  trainerId: string,
  addComment: AddComment
) => async (dispatch: Dispatch) => {
  dispatch(addCommentRequest());
  try {
    await sendNewComment(trainerId, addComment);
    return dispatch(addCommentSuccess());
  } catch (error) {
    return dispatch(addCommentFailure(error.message));
  }
};

export const getTrainerCommentsActionCreator: ActionCreator<ThunkAction<
  Promise<Action>,
  CommentsResponse,
  string,
  AnyAction
>> = (trainerId: string) => async (dispatch: Dispatch) => {
  dispatch(getTrainerCommentsRequest());
  try {
    const comments = await fetchTrainerComments(trainerId).then(unwrapResponseData);
    return dispatch(getTrainerCommentsSuccess(comments));
  } catch (error) {
    return dispatch(getTrainerCommentsFailure(error.message));
  }
};
