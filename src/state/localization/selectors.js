import LocalizedStrings from 'localized-strings';
import { createSelector } from 'reselect';

export const currentLanguage = (state) => {
    return state.localization.currentLanguage;
};

const allLocalization = (state) => {
    return state.localization.texts;
};

const localizedTexts = createSelector(
    allLocalization,
    currentLanguage,
    (allLocalization, currentLanguage) => {
        const localsObject = new LocalizedStrings(allLocalization);
        localsObject.setLanguage(currentLanguage.symbol);
        return localsObject;
    }
);

export const homeLocalization = createSelector(
    localizedTexts,
    (localizedTexts) => {
        return localizedTexts.home;
    }
);

export const sideBarLocalization = createSelector(
    localizedTexts,
    (localizedTexts) => {
        return localizedTexts.sideBar;
    }
);

export const loginLocalization = createSelector(
    localizedTexts,
    (localizedTexts) => {
        return localizedTexts.loginPage;
    }
);

export const personalInfoLocalization = createSelector(
    localizedTexts,
    (localizedTexts) => {
        return localizedTexts.personalInfo;
    }
);

export default {
    homeLocalization,
    sideBarLocalization,
    loginLocalization,
    personalInfoLocalization
};
