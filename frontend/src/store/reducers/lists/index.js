import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    list_1: [],
    list_2: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case 'EDIT_LIST1':
            const newState = { ...state };
                newState.list_1 = action.payload
            return newState;
        case 'EDIT_LIST2':
            const newState = { ...state };
                newState.list_2 = action.payload
            return newState;
        case 'CLEAR_LIST1':
            const clearState = { ...state };
                clearState.list_1 = [];
            return clearState;
        case 'CLEAR_LIST2':
            const clearState = { ...state };
                clearState.list_2 = [];
            return clearState;
        default:
            return state;
    }
}

export default reducer;