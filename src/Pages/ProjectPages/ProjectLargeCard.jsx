import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled,{keyframes} from 'styled-components';
import { bounce, slideInUp } from "react-animations";


const ProjectLargeCardDiv = styled.div`

.project-card-img{
    width:100%;
    height:300px;
    position:relative;
    z-index:1;
    overflow:hidden;
    transition:0.6s;

    &:hover{
            .project-desc{
                bottom:0px;
                transition:0.4s;
            }
            .expand-icon{
                top:20px;
            }
            img{
                transform:scale(1.2)
            }
        }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:0.3s;
        transition-delay:0.1s;
        
    }
    .project-desc{
        position:absolute;
        width:100%;
        height:100px;
        bottom:-100%;
        background:rgba(27, 25, 29, 0.993);
        padding:10px;
        transition:0.5s;
        .project-desc-content{
            position:relative;
            z-index:1;
        }

        
    }.expand-icon{
            font-size:30px;
            position:absolute;
            background:rgba(0, 0, 0, 0.39);
            color:white;
            top:-100%;;
            left:20px;
            padding:5px;
            border-radius:50%;
            cursor: pointer;
            transition:0.5s;
            &:hover{
                color:goldenrod;
            }
        }
}

`;


const bounceAnimation = keyframes`${slideInUp}`;

const BouncyDiv = styled.div`
    animation: 1s ${bounceAnimation};
`;

const ProjectLargeCard = ({ isModalOpen, setIsOpenModal, project, selectCurrentModalData }) => {
    const { name, bannerImg, id } = project;
    const selectedProject = (id) => {
        setIsOpenModal(true)
        selectCurrentModalData(id)

    }

    return (
        <BouncyDiv>
            <ProjectLargeCardDiv>
                <div className="project-card-img">
                    <img src={bannerImg} alt="" />

                    <div className="project-desc">
                        <div className="project-desc-content">
                            <h4>{name}</h4>
                            <p className="small fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, mollitia!</p>
                        </div>
                    </div>

                    <FontAwesomeIcon onClick={() => selectedProject(id)} className="expand-icon" icon={faExpand} />
                </div>
            </ProjectLargeCardDiv>
        </BouncyDiv>
    );
};

export default ProjectLargeCard;