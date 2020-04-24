import initialState from '../initialState';
import { LOGIN_SUCCESS, LOGIN_FETCHED, LOGIN_FAILED, LOGOUT } from './types';

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case LOGIN_FETCHED:
            return Object.assign({}, state, {
                user: null,
                token: null,
                isFetchingLogin: true,
                hasFailed: false,
                isAuthenticated: false
            });
        case LOGIN_FAILED: {
            return Object.assign({}, state, {
                isFetchingLogin: false,
                hasFailed: true,
                isAuthenticated: false
            });
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                token: action.token,
                isFetchingLogin: false,
                hasFailed: false,
                isAuthenticated: true
            });
        }
        case LOGOUT: {
            return Object.assign({}, state, { ...initialState.auth });
        }
        default:
            return state;
    }
}
