import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeA } from '../Theme/ThemeStyledComponent';


const ProjectCardDiv = styled.div`
    background: #19181d;
    padding: 20px;
    cursor: pointer;
    border-radius:10px;
    border:2px solid #19181d;
    transition:0.3s;
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

const ProjectCard = () => {


    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab eligendi, facilis delectus neque obcaecati odit! Quas sapiente doloribus voluptatem cupiditate obcaecati tempora, dicta tempore? Sequi porro natus harum ex";
    return (
        <ProjectCardDiv>
            <div className="cardimg-wrapper mb-2">
                <img src="https://hnazmul.github.io/assignment-1-personal-website/images/image%208-min%20(1).webp" alt="" className="img-fluid" />
            </div>
            <div className="card-img-desc">
                <h4>Creative Agency</h4>
                <p className=" fw-normal small">{desc.substring(0, 100)}... <Link><ThemeA>Show More</ThemeA></Link> </p>
            </div>
        </ProjectCardDiv>
    );
};

export default ProjectCard;