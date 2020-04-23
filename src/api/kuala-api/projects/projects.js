import kualaApiBaseRequest from '../base';

const projectsPath = '/projects';

export const fetchProjects = async (token) => {
    try {
        let response = await kualaApiBaseRequest(token).get(
            `${projectsPath}/me`
        );
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
