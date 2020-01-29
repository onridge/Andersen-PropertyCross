import { isNil } from 'ramda';

const getLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key);

        if (isNil(data)) {
            return Promise.resolve([]);
        }
        return Promise.resolve(JSON.parse(data));
    } catch {
        return [];
    }
};

export default getLocalStorage;
