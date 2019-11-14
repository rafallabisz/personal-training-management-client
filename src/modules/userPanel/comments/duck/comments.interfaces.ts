import {CommentActionTypes} from './comments.types'
import { UserData } from '../../../auth/duck/auth.interfaces';

export interface AddComment{
  author:string,
  content:string,
  rating:number,
}

export interface CommentsResponse{
  author:string,
  content:string,
  rating:number,
  createdAt:Date,
  trainer:UserData
}


/**====Action Comments Interfaces ==== */

export interface AddCommentRequestAction {
  type: CommentActionTypes.ADD_COMMENT_REQUEST;
}

export interface AddCommentSuccessAction {
  type: CommentActionTypes.ADD_COMMENT_SUCCESS;
}

export interface AddCommentFailureAction {
  type: CommentActionTypes.ADD_COMMENT_FAILURE;
  payload: string;
}

export interface GetTrainerCommentsRequestAction {
  type: CommentActionTypes.GET_TRAINER_COMMENTS_REQUEST;
}

export interface GetTrainerCommentsSuccessAction {
  type: CommentActionTypes.GET_TRAINER_COMMENTS_SUCCESS;
  payload:CommentsResponse
}

export interface GetTrainerCommentsFailureAction {
  type: CommentActionTypes.GET_TRAINER_COMMENTS_FAILURE;
  payload: string;
}

export type CommentActions = 
| AddCommentRequestAction
|AddCommentSuccessAction
|AddCommentFailureAction
|GetTrainerCommentsRequestAction
|GetTrainerCommentsSuccessAction
|GetTrainerCommentsFailureAction

/* === Reducer Interface ==== */

export interface CommentReducerState{
  comments?:CommentsResponse,
  isFetching:boolean;
  error?:string;
}

