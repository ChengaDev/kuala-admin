import { all } from 'redux-saga/effects';
import loginSaga from './auth/sagas/loginSaga';
import logoutSaga from './auth/sagas/logoutSaga';
import projectsSaga from './projects/sagas/projectsSaga';

export default function* rootSaga() {
    yield all([loginSaga(), logoutSaga(), projectsSaga()]);
}
