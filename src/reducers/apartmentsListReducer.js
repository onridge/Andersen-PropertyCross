const initState = {
    apartmentsList: [],
};

function apartmentsListReducer(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'RESULT_LIST_UPDATE':
            return { ...state, apartmentsList: [...state.apartmentsList, ...payload.listings] };
        case 'GET_CURRENT_APARTMENT':
            return { ...state, currentApartment: payload };
        default:
            return state;
    }
}

export default apartmentsListReducer;
