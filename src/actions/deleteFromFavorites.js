import getLocalStorage from '../services/getLocalStorage';
import getApartmentId from '../utils/getApartmentId';
import setLocalStorage from '../services/setLocalStorage';
import { favoritesList } from '../constants/constants';

function deleteFromFavorites(apartment) {
    getLocalStorage(favoritesList).then((list) => {
        const favorites = list.filter((apart) => {
            return getApartmentId(apart) !== getApartmentId(apartment);
        });

        setLocalStorage(favoritesList, favorites);
    });
}
export default deleteFromFavorites;
