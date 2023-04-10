export const loginUser = (user: Object) => {
    return {
        type: 'USER_LOGIN',
        payload: user
    }
};

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}