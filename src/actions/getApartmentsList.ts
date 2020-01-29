import apartmentsService from '../services/apartmentsService';

function getApartmentsList(payload) {
    return (dispatch) => {
        return apartmentsService({ place_name: payload.city, page: payload.pageNumber }).then((data) => {
            return dispatch({
                type: 'RESULT_LIST_UPDATED',
                payload: {
                    listings: data.listings,
                    totalResults: data.total_results,
                },
            });
        });
    };
}

export default getApartmentsList;
