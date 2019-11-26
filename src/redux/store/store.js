import {createStore} from "redux";
import {counterReducer} from "../reducers/reducers";
import {devToolsEnhancer} from "redux-devtools-extension";

export const store = createStore(counterReducer, devToolsEnhancer());
