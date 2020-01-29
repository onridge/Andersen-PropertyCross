const initState = {
    apartmentsList: [],
};

function apartmentsListReducer(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'RESULT_LIST_UPDATED':
            return {
                ...state,
                apartmentsList: [...state.apartmentsList, ...payload.listings],
                totalResults: payload.totalResults,
            };
        case 'CURRENT_APARTMENT_LOADED':
            return { ...state, currentApartment: payload };
        default:
            return state;
    }
}

export default apartmentsListReducer;
