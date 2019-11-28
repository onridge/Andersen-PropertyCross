import { createStore } from 'redux';
import counterReducer from '../reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(counterReducer, devToolsEnhancer());

export default store;
