import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeA } from '../Theme/ThemeStyledComponent';


const ProjectCardDiv = styled.div`
    background: #19181d;
    padding: 20px;
    cursor: pointer;
    border-radius:10px;
    border:2px solid #19181d;
    transition:0.3s;
    height:100%;
    &:hover{
        border:2px solid goldenrod;
    }
    .cardimg-wrapper {
        position: relative;
        &::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.226);
            top: 0px;
            left: 0px;
            z-index: 2;
        }
    }
`;

const ProjectCard = ({project}) => {
    const history = useHistory();
    console.log(project);

    const desc = project.section[0].description[0]
    return (
        <ProjectCardDiv onClick={() => history.push("/project/" + project.id)}>
            <div className="cardimg-wrapper mb-2">
                <img src={project?.bannerImg} alt="" className="img-fluid" />
            </div>
            <div className="card-img-desc">
                <h4>{project?.name}</h4>
                <p className=" fw-normal small">
                    {desc?.substring(0, 100)}...{" "}
                    <Link>
                        <ThemeA>Show More</ThemeA>
                    </Link>{" "}
                </p>
            </div>
        </ProjectCardDiv>
    );
};

export default ProjectCard;