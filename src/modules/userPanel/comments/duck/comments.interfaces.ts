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


/**====Action Interfaces ==== */

export interface AddCommentRequestAction {
  type: CommentActionTypes.ADD_COMMENT_REQUEST;
}

export interface AddCommentSuccessAction {
  type: CommentActionTypes.ADD_COMMENT_SUCCESS;
  // payload: UserData;
}

export interface AddCommentFailureAction {
  type: CommentActionTypes.ADD_COMMENT_FAILURE;
  payload: string;
}

export type CommentActions = 
| AddCommentRequestAction
|AddCommentSuccessAction
|AddCommentFailureAction

/* === Reducer Interface ==== */

export interface CommentReducerState{
  comments?:CommentsResponse,
  isFetching:boolean;
  error?:string;
}

