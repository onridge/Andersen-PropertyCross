import { combineReducers } from 'redux';
import searchedListReducer from './searchedListReducer';

const rootReducer = combineReducers({
    searchedList: searchedListReducer,
});

export default rootReducer;
