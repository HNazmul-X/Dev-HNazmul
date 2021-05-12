import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { slideInUp } from "react-animations";
import { useHistory } from "react-router";
import styled, { keyframes } from "styled-components";

const slideUpAnimation = keyframes`${slideInUp}`;


const ProjectDetailsShowerDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    background: rgba(0, 0, 0, 0.897);
    z-index: 10000;
    left: 0px;
    overflow-y: auto;

    animation: 1s ${slideUpAnimation};
    &::-webkit-scrollbar {
        display: none;
    }
    .nav {
        width: 100%;
        height: 60px;
        background: #0c0d13;
        box-shadow: 20px 30px 50px -15px rgba(0, 0, 0, 0.651);
        position: relative;
        text-align: center;
        border: 2px solid rgba(128, 128, 128, 0.507);
        color: dimgray;
        .times-icon {
            position: absolute;
            right: 19px;
            top: 9px;
            font-size: 30px;
            padding: 5px;
            background: black;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
                background: goldenrod;
            }
            &:active {
                background: red;
            }
        }
    }
`;



const PojectDetailsShower = ({ isShow, setIsModalShow,children,headline }) => {
     const history = useHistory()
    return (
        <>
            {isShow && (
                <>
                    <ProjectDetailsShowerDiv className={`project-details-shower`}>
                        <div className="container wrapper">
                            <div className="nav">
                                <h4 className="p-2 text-center w-100">{headline?headline:""}</h4>
                                <FontAwesomeIcon onClick={() => history.push("/projects")} className="times-icon" icon={faTimes} />
                            </div>

                            <div className="pt-5 content">
                                {children}
                            </div>
                        </div>
                    </ProjectDetailsShowerDiv>
                </>
            )}
        </>
    );
};

export default PojectDetailsShower;
