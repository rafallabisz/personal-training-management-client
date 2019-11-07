import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { Store as AppStore } from "./auth/duck/auth.interfaces";

const store: Store<AppStore> = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
