import apartmentsService from '../services/apartmentsService';

function getApartment(payload) {
    const { apartmentId, city, pageNumber } = payload;

    return (dispatch) => {
        return apartmentsService({ place_name: city, pageNumber }).then(({ listings }) => {
            const apartment = listings.find((apart) => {
                const { latitude, price_high: priceHigh } = apart;
                const id = latitude + priceHigh;

                return Math.abs(apartmentId) === id ? apart : null;
            });

            return dispatch({ type: 'GET_CURRENT_APARTMENT', payload: apartment });
        });
    };
}

export default getApartment;
