import apartmentsService from '../services/apartmentsService';
import getApartmentId from '../utils/getApartmentId';

function getApartment(payload) {
    const { apartmentId, city, numberPage } = payload;

    return (dispatch) => {
        function searchApartment(id, placeName, page) {
            return apartmentsService({ place_name: placeName, page }).then(({ listings }) => {
                const apartment = listings.find((apart) => Math.abs(id) === getApartmentId(apart));

                if (apartment) {
                    return dispatch({ type: 'CURRENT_APARTMENT_LOADED', payload: { ...apartment, placeName } });
                }
                return searchApartment(id, placeName, page + 1);
            });
        }
        return searchApartment(apartmentId, city, numberPage);
    };
}

export default getApartment;
