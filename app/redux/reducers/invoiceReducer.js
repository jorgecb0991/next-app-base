import { reduxTypes } from '../../types';

const { request, list, failure } = reduxTypes.invoiceType;

const defaultState = {
    list: [],
    success: null,
    error: null
};

const invoiceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case request:
            return { ...state, loading: true, error: null, success: null };
        case list:
            return { ...state, loading: false, list: action.payload, deleted: null };
        case failure:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default invoiceReducer;
