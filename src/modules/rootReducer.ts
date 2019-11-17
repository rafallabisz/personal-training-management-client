import { Reducer, combineReducers } from "redux";
import { Store } from "./auth/duck/auth.interfaces";
import { authReducer } from "./auth/duck/auth.reducers";
import { commentReducer } from "./userPanel/comments/duck/comments.reducers";
import { offerReducer } from "./trainerPanel/offerView/duck/offers.reducers";

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: authReducer,
  trainerComments: commentReducer,
  trainerOffers: offerReducer
});

export default rootReducer;
