import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { FadeInAnimation } from '../Animations';

const ProjectsIndexPage = ({ project }) => {
    return (
        <ProjectItem>
            <Project>
                <ProjectContent>
                    <Details>
                        <ProjectName>{project.name}</ProjectName>
                        <ProjectOrganization>
                            {project.organization}
                        </ProjectOrganization>
                        <ProjectDescription>
                            {project.description}
                        </ProjectDescription>
                    </Details>
                </ProjectContent>
                <Actions>
                    <Button variant='warning'>Edit</Button>
                    <Button variant='danger'>Delete</Button>
                </Actions>
            </Project>
        </ProjectItem>
    );
};

const ProjectDescription = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
    margin-top: 13px;
    color: ${(props) => props.theme.colors.black};
    font-size: 20px;
    height: 88px;
    overflow: hidden;

    @media screen and (max-width: 1400px) {
        font-size: 18px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }
`;

const Actions = styled.div`
    height: 60px;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-top: 1px solid lightgrey;
    text-align: center;

    & button {
        margin-left: 7px;
        margin-right: 7px;
        margin-top: 15px;
        height: 30px;
        line-height: 13px;
        width: 80px;
        font-size: 15px;
    }
`;

const ProjectOrganization = styled.div`
    font-size: 15px;
    color: ${(props) => props.theme.colors.grayFont};
`;

const ProjectName = styled.div`
    line-clamp: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.colors.green};
    font-size: 30px;
    font-weight: bold;
`;

const ProjectItem = styled.div`
    animation: ${FadeInAnimation} 2s;
    margin: 0 auto;
    position: relative;
    padding-right: 3%;
    padding-left: 3%;
    user-select: none;
    margin-bottom: 50px;
    max-width: 450px;
`;

const Details = styled.div`
    padding: 5%;
    padding-right: 10%;
    padding-left: 10%;
`;

const Project = styled.div`
    position: relative;
`;

const ProjectContent = styled.div`
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    height: 280px;
    width: 100%;
    color: ${(props) => props.theme.colors.grayFont};
    border: 1px solid #c0c0c0;
    user-select: none;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
        0 4px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
`;

export default ProjectsIndexPage;
