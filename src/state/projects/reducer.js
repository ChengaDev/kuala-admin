import initialState from '../initialState';
import projectsTypes from './types';

export default function projectsReducer(state = initialState.projects, action) {
    switch (action.type) {
        case projectsTypes.FETCH_PROJECTS_SUCCESS: {
            return Object.assign([], state, action.projects);
        }
        default:
            return state;
    }
}
