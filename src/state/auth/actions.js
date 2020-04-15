import authTypes from './types';

export const startLogin = (credentials) => ({
    type: authTypes.LOGIN_STARTED,
    credentials
});

export const loginFetched = () => ({ type: authTypes.LOGIN_FETCHED });

export const loginSuccess = (user, token) => ({
    type: authTypes.LOGIN_SUCCESS,
    user,
    token
});

export const loginFailed = (error) => ({
    type: authTypes.LOGIN_FAILED,
    error
});

export const startLogout = () => ({ type: authTypes.LOGOUT_STARTED });

export const logout = () => ({ type: authTypes.LOGOUT });

export default {
    startLogin,
    loginFailed,
    loginSuccess,
    startLogout,
    logout
};
