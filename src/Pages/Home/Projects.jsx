import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { ThemeButton, TitleDesc } from '../../Components/Theme/ThemeStyledComponent';
import { projectsData } from '../ProjectPages/ProjectsData';

const ProjectsDiv = styled.div`







`

const Projects = () => {
    const FirstThreeProject = [projectsData[0], projectsData[1], projectsData[2]]
    console.log(FirstThreeProject)

    return (
        <ProjectsDiv>
            <div className="title text-center p-5">
                <TitleDesc>Recent Projects</TitleDesc>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    {FirstThreeProject.map(project=> <div className="col-md-4 pb-3"><ProjectCard project={project}/></div>)}
                    
                </div>

                <div className="text-center mt-5">
                    <ThemeButton className="btn">Show More <FontAwesomeIcon icon={faChevronCircleRight}/> </ThemeButton>
                </div>
            </div>


        </ProjectsDiv>
    );
};

export default Projects;