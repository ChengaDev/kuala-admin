import initialState from '../initialState';
import { LOGIN_SUCCESS, LOGOUT } from '../auth/types';
import { UPDATE_USER_SUCCESS } from './types';

export default function authReducer(state = initialState.users, action) {
    switch (action.type) {
        case UPDATE_USER_SUCCESS: {
            return Object.assign({}, state, {
                currentUser: action.user
            });
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                currentUser: action.user
            });
        }
        case LOGOUT: {
            return Object.assign({}, state, { ...initialState.users });
        }
        default:
            return state;
    }
}
