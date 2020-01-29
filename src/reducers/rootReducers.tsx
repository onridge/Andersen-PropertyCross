import { combineReducers } from 'redux';
import searchedListReducer from './searchedListReducer';
import apartmentsListReducer from './apartmentsListReducer';
import favoritesListReducer from './favoritesListReducer';

const rootReducer = combineReducers({
    searchedListReducer,
    apartmentsListReducer,
    favoritesListReducer,
});

export default rootReducer;
