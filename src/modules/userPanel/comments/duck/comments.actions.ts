import { AddCommentRequestAction, AddCommentSuccessAction, AddCommentFailureAction } from "./comments.interfaces";
import { CommentActionTypes } from "./comments.types";


export const addCommentRequest = (): AddCommentRequestAction => ({
  type: CommentActionTypes.ADD_COMMENT_REQUEST
});

export const addCommentSuccess = (): AddCommentSuccessAction => ({
  type: CommentActionTypes.ADD_COMMENT_SUCCESS,
  // payload: userData
});

export const addCommentFailure = (error: string): AddCommentFailureAction => ({
  type: CommentActionTypes.ADD_COMMENT_FAILURE,
  payload: error
});