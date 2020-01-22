const initState = {
    favorites: [],
};

function favoritesListReducer(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'FAVORITES_LIST_UPDATED':
            return { ...state, favorites: payload };
        default:
            return state;
    }
}

export default favoritesListReducer;
