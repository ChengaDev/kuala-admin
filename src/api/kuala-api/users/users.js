import kualaApi from '../base';

const usersPath = '/users';

export const login = async (email, password) => {
    try {
        let response = await kualaApi.post(`${usersPath}/login`, {
            email,
            password
        });
        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
};
