export const loginUser = (user: Object) => {
    localStorage.setItem("user-login", JSON.stringify(user));
    return {
        type: 'USER_LOGIN',
        payload: user
    }
};

export const userLogout = () => {
    localStorage.removeItem('user-login');
    return {
        type: 'USER_LOGOUT'
    }
}