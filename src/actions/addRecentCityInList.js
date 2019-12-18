import setLocalStorage from '../services/setLocalStorage';
import apartmentsService from '../services/apartmentsService';
import { searchStorage } from '../constants/constants';
import getLocalStorage from '../services/getLocalStorage';

function addRecentCityInList(city) {
    return apartmentsService({ place_name: city }).then(() =>
        getLocalStorage(searchStorage).then((data) => setLocalStorage(searchStorage, [...data, city]))
    );
}

export default addRecentCityInList;
