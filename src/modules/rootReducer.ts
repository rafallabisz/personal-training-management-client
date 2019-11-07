import { Reducer, combineReducers } from "redux";
import { Store } from "./auth/duck/auth.interfaces";
import { userReducer } from "./auth/duck/auth.reducers";

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: userReducer
});

export default rootReducer;
