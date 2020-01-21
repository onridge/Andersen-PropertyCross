import apartmentsService from '../services/apartmentsService';
import getApartmentId from '../utils/getApartmentId';

function getApartment(payload) {
    const { apartmentId, city, pageNumber } = payload;

    return (dispatch) => {
        return apartmentsService({ place_name: city, pageNumber }).then(({ listings }) => {
            const apartment = listings.find((apart) => Math.abs(apartmentId) === getApartmentId(apart));

            return dispatch({ type: 'CURRENT_APARTMENT_LOADED', payload: { ...apartment, city } });
        });
    };
}

export default getApartment;
