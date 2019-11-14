import { CommentReducerState, CommentActions } from "./comments.interfaces";
import { Reducer } from "redux";
import { CommentActionTypes } from "./comments.types";


const initState:CommentReducerState={
  isFetching:false,
}

export const commentReducer:Reducer<CommentReducerState,CommentActions>=(state=initState,action)=>{
  switch(action.type){
    case CommentActionTypes.ADD_COMMENT_REQUEST:
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
    case CommentActionTypes.ADD_COMMENT_FAILURE:
      return{
        ...state,
        isFetching:false,
        error:action.payload
      }
      default:
        return state;
  }
}