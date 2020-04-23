import React, { useEffect } from 'react';
import styled from 'styled-components';
import withLanguage from '../hoc/WithLanguage';
import { fetchProjects } from '../../state/projects/actions';
import { useDispatch, useSelector } from 'react-redux';
import { allProjects } from '../../state/projects/selectors';

const ProjectsIndexPage = () => {
    const dispatch = useDispatch();
    const projects = useSelector(allProjects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const renderProjects = () => {
        return <Page>{projects.length}</Page>;
    };

    const renderLoader = () => {
        return <div>Loading...</div>;
    };

    const render = () => {
        if (projects) {
            return renderProjects();
        } else {
            return renderLoader();
        }
    };

    return render();
};

const Page = styled.div`
    padding: 3%;
    padding-right: 20%;
    padding-left: 20%;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
`;

export default withLanguage(ProjectsIndexPage);
