import kualaApi from '../base';

const usersPath = '/users';

export const login = async (email, password) => {
    const body = {
        email,
        password
    };
    try {
        debugger;
        let response = await kualaApi.post(`${usersPath}/login`, body);
        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
};
