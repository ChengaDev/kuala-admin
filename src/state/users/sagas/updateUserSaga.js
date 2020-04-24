import { put, takeLatest, select } from 'redux-saga/effects';
import { updateUser } from '../../../api/kuala-api/users/users';
import { UPDATE_USER_START } from '../types';
import { updateUserSuccess, updateUserFailed } from '../actions';
import { token } from '../../auth/selectors';

function* handleUpdateUser({ user }) {
    try {
        // put show modal
        const userToken = yield select(token);
        const updateUserResponse = yield updateUser(userToken, user);
        yield put(updateUserSuccess(updateUserResponse.data));
    } catch (error) {
        yield put(updateUserFailed(error));
    }
}

export default function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER_START, handleUpdateUser);
}
