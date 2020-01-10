import { includes } from 'ramda';
import getLocalStorage from '../services/getLocalStorage';
import setLocalStorage from '../services/setLocalStorage';
import { favoritesList } from '../constants/constants';

function addApartmentToFavorites(searchApartment) {
    getLocalStorage(favoritesList).then((list) => {
        if (!includes(searchApartment, list)) {
            setLocalStorage(favoritesList, [...list, searchApartment]);
        }
    });
}

export default addApartmentToFavorites;
