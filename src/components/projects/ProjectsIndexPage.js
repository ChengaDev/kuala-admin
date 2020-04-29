import React, { useEffect } from 'react';
import styled from 'styled-components';
import withLanguage from '../hoc/WithLanguage';
import { fetchProjects } from '../../state/projects/actions';
import { useDispatch, useSelector } from 'react-redux';
import { allProjects } from '../../state/projects/selectors';
import { Container, Row, Col } from 'react-bootstrap';
import PageLoader from '../common/PageLoader';
import ProjectIndexItem from './ProjectIndexItem';

const ProjectsIndexPage = () => {
    const dispatch = useDispatch();
    const projects = useSelector(allProjects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const renderProjects = () => {
        return (
            <Page>
                <PageTitle>Your main projects</PageTitle>
                <Container>
                    <Row>
                        {projects.map((project) => {
                            return (
                                <Col key={project.name} sm={12} md={6} xl={4}>
                                    <ProjectIndexItem project={project} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </Page>
        );
    };

    const renderLoader = () => {
        return (
            <Page>
                <PageLoader text='Loading projects...'>Loading...</PageLoader>
            </Page>
        );
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
    padding-top: 4%;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
`;

const PageTitle = styled.div`
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    font-size: 60px;
    text-align: center;
    margin-bottom: 4%;

    @media screen and (max-width: 1000px) {
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
`;

export default withLanguage(ProjectsIndexPage);
