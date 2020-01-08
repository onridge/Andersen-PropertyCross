import apartmentsService from '../services/apartmentsService';

function getApartmentsList(payload) {
    return (dispatch) => {
        return apartmentsService({ place_name: payload.city, pageNumber: payload.pageNumber }).then((data) => {
            return dispatch({
                type: 'RESULT_LIST_UPDATE',
                payload: {
                    listings: data.listings,
                    totalResults: data.total_results,
                },
            });
        });
    };
}

export default getApartmentsList;
