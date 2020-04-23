import localization from '../localization/localization';
import { eLanguage } from '../staticData/language';

export default {
    auth: {
        user: null,
        token: null,
        isFetchingLogin: false,
        hasFailed: false,
        isAuthenticated: false
    },
    localization: {
        texts: localization,
        currentLanguage: eLanguage.English
    },
    projects: null
};
