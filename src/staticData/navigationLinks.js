import appRoutes from '../appRoutes';

const getNavigationLinks = (localization) => {
    return [
        {
            text: localization.home,
            path: appRoutes.home
        },
        {
            text: localization.personalInfo,
            path: appRoutes.personalInfo
        },
        {
            text: localization.experience,
            path: appRoutes.experience
        },
        {
            text: localization.education,
            path: appRoutes.education
        },
        {
            text: localization.recommendations,
            path: appRoutes.recommendations
        },
        {
            text: localization.achievments,
            path: appRoutes.achievments
        },
        {
            text: localization.projects,
            path: appRoutes.projects
        },
        {
            text: localization.skills,
            path: appRoutes.skills
        }
    ];
};

export default getNavigationLinks;
