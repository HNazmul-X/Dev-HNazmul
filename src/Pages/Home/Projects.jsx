import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { ThemeButton, TitleDesc } from '../../Components/Theme/ThemeStyledComponent';

const ProjectsDiv = styled.div`







`

const Projects = () => {
    return (
        <ProjectsDiv>
            <div className="title text-center p-5">
                <TitleDesc>Recent Projects</TitleDesc>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-4 pb-3 col-6"><ProjectCard/></div>
                    <div className="col-md-4 pb-3 col-6"><ProjectCard/></div>
                    <div className="col-md-4 pb-3 col-6"><ProjectCard/></div>
                </div>

                <div className="text-center mt-5">
                    <ThemeButton className="btn">Show More <FontAwesomeIcon icon={faChevronCircleRight}/> </ThemeButton>
                </div>
            </div>


        </ProjectsDiv>
    );
};

export default Projects;