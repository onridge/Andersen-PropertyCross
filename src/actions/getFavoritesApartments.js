import { favoritesList } from '../constants/constants';
import getLocalStorage from '../services/getLocalStorage';

function getFavoritesApartments() {
    return (dispatch) => {
        return getLocalStorage(favoritesList).then((list) => {
            return dispatch({ type: 'GET_FAVORITES_LIST', payload: list });
        });
    };
}

export default getFavoritesApartments;
