import { HYDRATE } from "next-redux-wrapper";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.user };
        case 'USER_LOGIN':
            const newState = { ...state };
                newState.user = action.payload
            return newState;
        case 'USER_LOGOUT':
            return initialState
        default:
            return state;
    }
}

export default reducer;