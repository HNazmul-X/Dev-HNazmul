import { faCalculator, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled, { keyframes } from "styled-components";



const ScreenShotViewerDiv = styled.div`
    .image-wrapper {
        position: relative;
        z-index: 1;
        overflow:hidden;
        cursor:pointer;
        &:hover {
            .img-overlay {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                
            }
            img{
                filter:none;
                transform:scale(1.2)
            }
        }
        img{
            filter:grayscale(0.9) blur(1px);
            transition:0.5s;
        }

        .img-overlay {
            position: absolute;
            background: rgba(0, 0, 0, 0.281);
            width: 120px;
            height: 120px;
            z-index: 1;
            top: -100%;
            left: -100%;
            transition: 0.3s;
            border-radius:50%;
            &:hover{
                .expand-icon{
                    color:goldenrod;
                }
                cursor:zo;
            }

            .expand-icon{
                font-size:50px;
                color:white;
                margin: 40px 0px 0px 40px;
            }
        }
    }
`;

const ScreenShotViewer = ({ images }) => {
    return (
        <ScreenShotViewerDiv>
            <div className="row row-cols-md-3 justify-content-center gy-2">
                {images.map((image) => (
                    <div className="image-wrapper img-fluid">
                        <img className="img-fluid" src={image} alt="" />

                        <div className="img-overlay">
                            <FontAwesomeIcon className="expand-icon" icon={faExpand} />
                        </div>
                    </div>
                ))}
            </div>
        </ScreenShotViewerDiv>
    );
};

export default ScreenShotViewer;
