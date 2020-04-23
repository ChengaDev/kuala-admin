import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { localizationReducer } from './localization';
import { projectsReducer } from './projects';

export default combineReducers({
    auth: authReducer,
    localization: localizationReducer,
    projects: projectsReducer
});
