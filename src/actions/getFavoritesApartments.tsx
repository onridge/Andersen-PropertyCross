import { favoritesList } from '../constants/constants';
import getLocalStorage from '../services/getLocalStorage';

function getFavoritesApartments() {
    return (dispatch) => {
        return getLocalStorage(favoritesList).then((list) => {
            return dispatch({ type: 'FAVORITES_LIST_UPDATED', payload: list });
        });
    };
}

export default getFavoritesApartments;
