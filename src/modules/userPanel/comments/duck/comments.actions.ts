import {
  AddCommentRequestAction,
  AddCommentSuccessAction,
  AddCommentFailureAction,
  GetTrainerCommentsRequestAction,
  CommentsResponse,
  GetTrainerCommentsSuccessAction,
  GetTrainerCommentsFailureAction
} from "./comments.interfaces";
import { CommentActionTypes } from "./comments.types";

export const addCommentRequest = (): AddCommentRequestAction => ({
  type: CommentActionTypes.ADD_COMMENT_REQUEST
});

export const addCommentSuccess = (): AddCommentSuccessAction => ({
  type: CommentActionTypes.ADD_COMMENT_SUCCESS
});

export const addCommentFailure = (error: string): AddCommentFailureAction => ({
  type: CommentActionTypes.ADD_COMMENT_FAILURE,
  payload: error
});

export const getTrainerCommentsRequest = (): GetTrainerCommentsRequestAction => ({
  type: CommentActionTypes.GET_TRAINER_COMMENTS_REQUEST
});

export const getTrainerCommentsSuccess = (comments: CommentsResponse[]): GetTrainerCommentsSuccessAction => ({
  type: CommentActionTypes.GET_TRAINER_COMMENTS_SUCCESS,
  payload: comments
});

export const getTrainerCommentsFailure = (error: string): GetTrainerCommentsFailureAction => ({
  type: CommentActionTypes.GET_TRAINER_COMMENTS_FAILURE,
  payload: error
});
