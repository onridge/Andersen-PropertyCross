const initialState = {
    searchedList: [],
};

function searchedListReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SEARCH_LIST_UPDATED':
            return { ...state, searchedList: payload };
        default:
            return state;
    }
}

export default searchedListReducer;
