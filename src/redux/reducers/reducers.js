import { increment, decrement } from '../constants';

const initState = {
    count: 0,
};

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case increment:
            return {
                count: state.count + 1,
            };
        case decrement:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
