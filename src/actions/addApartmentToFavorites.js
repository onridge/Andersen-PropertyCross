import { includes } from 'ramda';
import getLocalStorage from '../services/getLocalStorage';
import setLocalStorage from '../services/setLocalStorage';
import { favoritesList } from '../constants/constants';

function addApartmentToFavorites(searchApartment) {
    return (dispatch) => {
        return getLocalStorage(favoritesList).then((list) => {
            if (!includes(searchApartment, list)) {
                const updatedList = [...list, searchApartment];

                setLocalStorage(favoritesList, updatedList);
                return dispatch({
                    type: 'FAVORITES_LIST_UPDATED',
                    payload: updatedList,
                });
            }
        });
    };
}

export default addApartmentToFavorites;
