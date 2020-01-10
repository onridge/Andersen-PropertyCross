const initState = {
    favorites: [],
};

function favoritesListReducer(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_FAVORITES_LIST':
            return { ...state, favorites: payload };
        default:
            return state;
    }
}

export default favoritesListReducer;
