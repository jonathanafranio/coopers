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
            const newList1 = { ...state };
                newList1.list_1 = action.payload
            return newList1;
        case 'EDIT_LIST2':
            const newList2 = { ...state };
                newList2.list_2 = action.payload
            return newList2;
        case 'CLEAR_LIST1':
            const clearList1 = { ...state };
                clearList1.list_1 = [];
            return clearList1;
        case 'CLEAR_LIST2':
            const clearList2 = { ...state };
                clearList2.list_2 = [];
            return clearList2;
        default:
            return state;
    }
}

export default reducer;