import getLocalStorage from '../services/getLocalStorage';

function searchedListLoad(key) {
    return (dispatch) => getLocalStorage(key).then((payload) => dispatch({ type: 'SEARCH_LIST_UPDATE', payload }));
}

export default searchedListLoad;
