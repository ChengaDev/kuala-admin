import { put, takeLatest, select, delay } from 'redux-saga/effects';
import { updateUser } from '../../../api/kuala-api/users/users';
import { UPDATE_USER_START } from '../types';
import { updateUserSuccess, updateUserFailed } from '../actions';
import { showProcessingModal, hideModal } from '../../modals/actions';
import { token } from '../../auth/selectors';

function* handleUpdateUser({ user }) {
    try {
        yield put(showProcessingModal());
        yield delay(2000);
        const userToken = yield select(token);
        const updateUserResponse = yield updateUser(userToken, user);
        yield put(updateUserSuccess(updateUserResponse.data));
        yield put(hideModal());
    } catch (error) {
        yield put(updateUserFailed(error));
    }
}

export default function* watchUpdateUser() {
    yield takeLatest(UPDATE_USER_START, handleUpdateUser);
}
