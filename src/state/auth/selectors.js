export const user = (state) => state.auth.user;
export const token = (state) => state.auth.token;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const hasFailed = (state) => state.auth.hasFailed;
export const isFetchingLogin = (state) => state.auth.isFetchingLogin;

export default {
    user,
    token,
    hasFailed,
    isFetchingLogin,
    isAuthenticated
};
