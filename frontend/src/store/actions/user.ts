export const userLogin = (user: Object) => {
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