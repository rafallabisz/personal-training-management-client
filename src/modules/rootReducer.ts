import { Reducer, combineReducers } from "redux";
import { Store } from "./auth/duck/auth.interfaces";
import { authReducer } from "./auth/duck/auth.reducers";
import { commentReducer } from "./userPanel/comments/duck/comments.reducers";

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: authReducer,
  trainerComments: commentReducer
});

export default rootReducer;
