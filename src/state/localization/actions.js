import localizationTypes from './types';

export const changeLanguage = (newLanguage) => ({
    type: localizationTypes.CHANGE_LANGUAGE,
    newLanguage
});

export default { changeLanguage };
