import { put, takeLatest, select } from 'redux-saga/effects';
import { fetchProjectsSuccess } from '../actions';
import { FETCH_PROJECTS } from '../types';
import { fetchProjects } from '../../../api/kuala-api/projects/projects';
import { token } from '../../auth/selectors';

function* handleFetchProjects() {
    try {
        const authToken = yield select(token);
        const response = yield fetchProjects(authToken);
        const projects = response.data;
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        throw new Error(error);
    }
}

export default function* watchFetchProjects() {
    yield takeLatest(FETCH_PROJECTS, handleFetchProjects);
}
