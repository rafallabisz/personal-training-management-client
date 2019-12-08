import { Reducer, combineReducers } from "redux";
import { Store } from "./auth/duck/auth.interfaces";
import { authReducer } from "./auth/duck/auth.reducers";
import { commentReducer } from "./comments/duck/comments.reducers";
import { offerReducer } from "./offers/duck/offers.reducers";
import { reservationReducer } from "./reservations/duck/reservations.reducers";

const rootReducer: Reducer<Store> = combineReducers<Store>({
  user: authReducer,
  trainerComments: commentReducer,
  trainerOffers: offerReducer,
  reservations: reservationReducer
});

export default rootReducer;
