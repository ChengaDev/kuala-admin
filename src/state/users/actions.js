import types from './types';

export const updateUserStart = (user) => ({
    type: types.UPDATE_USER_START,
    user
});

export const updateUserSuccess = (user) => ({
    type: types.UPDATE_USER_SUCCESS,
    user
});

export const updateUserFailed = (error) => ({
    type: types.UPDATE_USER_FAILED,
    error
});

export default {
    updateUserStart,
    updateUserSuccess,
    updateUserFailed
};
