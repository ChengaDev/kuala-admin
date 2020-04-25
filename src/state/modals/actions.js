import { SHOW_PROCESSING_MODAL, HIDE_MODAL } from './types';

export const showProcessingModal = () => ({
    type: SHOW_PROCESSING_MODAL
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

export default {
    showProcessingModal,
    hideModal
};
