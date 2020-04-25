import initialState from '../initialState';
import modalsTypes from './types';

export default function modalsReducer(
    state = initialState.localization,
    action
) {
    switch (action.type) {
        case modalsTypes.SHOW_PROCESSING_MODAL: {
            return Object.assign({}, state, {
                showProcessingModal: true
            });
        }
        case modalsTypes.HIDE_MODAL: {
            return Object.assign({}, state, initialState.modals);
        }
        default:
            return state;
    }
}
