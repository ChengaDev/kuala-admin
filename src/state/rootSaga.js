import { all } from 'redux-saga/effects';
import loginSaga from './auth/sagas/loginSaga';
import logoutSaga from './auth/sagas/logoutSaga';

export default function* rootSaga() {
    yield all([loginSaga(), logoutSaga()]);
}
