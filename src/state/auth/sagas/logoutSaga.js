import { put, takeLatest } from 'redux-saga/effects';
import { logout } from '../actions';
import { LOGOUT_STARTED } from '../types';

function* handleLogout() {
    // delete cookie
    yield put(logout());
}

export default function* watchAuth() {
    yield takeLatest(LOGOUT_STARTED, handleLogout);
}
