import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeSpan,TitleDesc } from '../../Components/Theme/ThemeStyledComponent';
import PojectDetailsShower from './PojectDetailsShower';
import ProjectLargeCard from './ProjectLargeCard';
import { projectsData } from './ProjectsData';



const ProjectPageDiv = styled.div`


`

const ModalContent = styled.div`
    .banner-img {
        width: 100%;
    }
    .blog-text {
        font-size: 18px;
        font-family: montserrat;
        font-weight: lighter !important;
    }
    .all-freatured {
        .feature-ul{
            .feature-li{
                font-weight:normal;
            }
        }
    }
`;



const ProjectPage = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [currentModalData,setCurrentModalData] = useState({})
    const {projectId} = useParams()
    const location = useLocation()
    console.log(projectId)
    console.log(location)

    useEffect(()=> {

        const newModaldata = projectsData.filter((project) => project.id === projectId);
        setCurrentModalData(
            newModaldata[0]
        )
        if(projectId){
            setIsOpenModal(true)
        }
        else if(location.pathname === "/projects"){
            setIsOpenModal(false)
        }


    },[currentModalData, location.pathname, projectId])

    console.log("current modal data",currentModalData)


    return (
        <ProjectPageDiv>
            <div className="container-fluid">
                <div className="row">
                    {projectsData.map((item) => {
                        return (
                            <div className="col-md-6 py-2">
                                <ProjectLargeCard project={item} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <PojectDetailsShower headline={currentModalData?.name} isShow={isOpenModal} setIsModalShow={setIsOpenModal}>
                <ModalContent className=" w-100">
                    <div className="text-center">
                        <img src={currentModalData?.bannerImg} alt="" className="img-fluid banner-img" />
                    </div>

                    {currentModalData.section.map((project) => {
                        return (
                            <div className="specific-section mb-5">
                                <div className="title mb-2">
                                    <TitleDesc>{project.title}</TitleDesc>
                                </div>
                                <div className="description">
                                    {project.title.includes("Feature") ? (
                                        <ul className="">
                                            {project?.description.map((desc) => (
                                                <li>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : project.title.includes("Tools") ? (
                                        <ul className="">
                                            {project?.description.map((desc) => (
                                                <li>{desc}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        project.description.map((desc) => <p className="mb-0">{desc}</p>)
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    <div className="desc pt-5">
                        <div className="screenShots-gellery">
                            <div className="p-3">
                                <TitleDesc className="mx-auto">SreenShots</TitleDesc>
                            </div>
                        </div>

                        <div className="links py-2 text-center">
                            <a target="_blank" rel="noreferrer" href={`https://${currentModalData?.livesite}`} className="">
                                <FontAwesomeIcon className=" bg-secondary rounded rounded-circle p-2 fa-3x mx-2" icon={faGithub} />
                            </a>
                            <a target="_blank" rel="noreferrer" href={`https://${currentModalData?.livesite}`} className="">
                                <FontAwesomeIcon className=" bg-secondary rounded rounded-circle p-2 fa-3x mx-2" icon={faGlobe} />
                            </a>
                        </div>
                    </div>
                </ModalContent>
            </PojectDetailsShower>
        </ProjectPageDiv>
    );
};

export default ProjectPage;