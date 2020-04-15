import { put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFetched, loginFailed } from '../actions';
import { LOGIN_STARTED } from '../types';
import { login } from '../../../api/kuala-api/users/users';

function* handleLogin({ credentials }) {
    try {
        yield put(loginFetched());
        const response = yield login(credentials.email, credentials.password);
        const { user, token } = response.data;
        yield put(loginSuccess(user, token));
    } catch (error) {
        yield put(loginFailed(error));
    }
}

export default function* watchAuth() {
    yield takeLatest(LOGIN_STARTED, handleLogin);
}
