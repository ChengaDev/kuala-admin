import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { localizationReducer } from './localization';
import { usersReducer } from './users';
import { projectsReducer } from './projects';

export default combineReducers({
    auth: authReducer,
    localization: localizationReducer,
    users: usersReducer,
    projects: projectsReducer
});
