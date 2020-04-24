import localization from '../localization/localization';
import { eLanguage } from '../staticData/language';

export default {
    auth: {
        token: null,
        isFetchingLogin: false,
        hasFailed: false,
        isAuthenticated: false
    },
    localization: {
        texts: localization,
        currentLanguage: eLanguage.English
    },
    users: null,
    projects: null
};
