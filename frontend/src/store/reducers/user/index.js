import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.user };
        case 'USER_LOGIN':
            //return { ...state, user: action.payload };
            const newState = { ...state };
                newState.user = action.payload
            return newState;
        case 'USER_LOGOUT':
            return { ...state, user: {} }
        default:
            return state;
    }
}

export default reducer;