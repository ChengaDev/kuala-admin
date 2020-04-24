import baseKualaApiRequest from '../base';

const usersPath = '/users';

export const login = async (email, password) => {
    try {
        const response = await baseKualaApiRequest().post(
            `${usersPath}/login`,
            {
                email,
                password
            }
        );
        return response;
    } catch (error) {
        throw new Error(error);
    }
};

export const updateUser = async (token, user) => {
    try {
        const response = await baseKualaApiRequest(token).patch(
            `${usersPath}/me`,
            {
                ...user
            }
        );
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
