import { includes } from 'ramda';
import deleteFromFavorites from './deleteFromFavorites';
import addApartmentToFavorites from './addApartmentToFavorites';
import getLocalStorage from '../services/getLocalStorage';
import { favoritesList } from '../constants/constants';

function isApartmentInStorage(searchedApartment) {
    return getLocalStorage(favoritesList).then((favesList) => {
        return includes(searchedApartment, favesList);
    });
}

function addToFavoritesList(payload) {
    return (dispatch) => {
        return isApartmentInStorage(payload).then((result) => {
            result ? deleteFromFavorites(payload) : addApartmentToFavorites(payload);
            return dispatch({ type: 'STATUS_FAVORITES', payload: result });
        });
    };
}

export default addToFavoritesList;
