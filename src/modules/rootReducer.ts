import { Reducer, combineReducers } from "redux";
import { Store } from "./auth/duck/auth.interfaces";
import { authReducer } from "./auth/duck/auth.reducers";

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: authReducer
});

export default rootReducer;
