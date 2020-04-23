import kualaApiBaseRequest from '../base';

const usersPath = '/users';

export const login = async (email, password) => {
    try {
        let response = await kualaApiBaseRequest().post(`${usersPath}/login`, {
            email,
            password
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
