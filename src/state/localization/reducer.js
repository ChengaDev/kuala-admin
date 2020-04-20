import initialState from '../initialState';
import localizationTypes from './types';

export default function localizationReducer(
    state = initialState.localization,
    action
) {
    switch (action.type) {
        case localizationTypes.CHANGE_LANGUAGE: {
            return Object.assign({}, state, {
                currentLanguage: action.newLanguage
            });
        }
        default:
            return state;
    }
}
