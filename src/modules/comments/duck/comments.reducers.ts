import { CommentReducerState, CommentActions } from "./comments.interfaces";
import { Reducer } from "redux";
import { CommentActionTypes } from "./comments.types";


const initState:CommentReducerState={
  isFetching:false,
}

export const commentReducer:Reducer<CommentReducerState,CommentActions>=(state=initState,action)=>{
  switch(action.type){
    case CommentActionTypes.ADD_COMMENT_REQUEST:
    case CommentActionTypes.GET_TRAINER_COMMENTS_REQUEST:
      return{
        ...state,
        isFetching:true
      }
    case CommentActionTypes.ADD_COMMENT_SUCCESS:
      return{
        ...state,
        isFetching:false,
        error:undefined,
      }

    case CommentActionTypes.GET_TRAINER_COMMENTS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        error:undefined,
        comments:action.payload
      }

    case CommentActionTypes.ADD_COMMENT_FAILURE:
    case CommentActionTypes.GET_TRAINER_COMMENTS_FAILURE:
      return{
        ...state,
        isFetching:false,
        error:action.payload
      }
      default:
        return state;
  }
}