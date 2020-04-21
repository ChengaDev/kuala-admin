import localization from '../localization/localization';
import { eLanguage } from '../staticData/language';

export default {
    auth: {
        user: {
            firstname: 'Chen',
            lastname: 'Gazit',
            username: 'Chenga',
            email: 'gazit.chen@gmail.com',
            birthdate: '1988-09-15'
        },
        token: null,
        isFetchingLogin: false,
        hasFailed: false,
        isAuthenticated: false
    },
    localization: {
        texts: localization,
        currentLanguage: eLanguage.English
    }
};
