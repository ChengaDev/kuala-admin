import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { localizationReducer } from './localization';

export default combineReducers({
    auth: authReducer,
    localization: localizationReducer
});
