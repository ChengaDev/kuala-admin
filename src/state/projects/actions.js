import projectsTypes from './types';

export const fetchProjects = () => ({
    type: projectsTypes.FETCH_PROJECTS
});

export const fetchProjectsSuccess = (projects) => ({
    type: projectsTypes.FETCH_PROJECTS_SUCCESS,
    projects
});

export default { fetchProjects, fetchProjectsSuccess };
