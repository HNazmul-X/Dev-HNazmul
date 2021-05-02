import React, { useState } from 'react';
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

    const selectCurrentModalData = (id) => {

        const newModaldata = projectsData.filter((project) => project.id === id);
        setCurrentModalData(
            newModaldata[0]
        )
        console.log(currentModalData)
    }


    return (
        <ProjectPageDiv>
            <div className="container-fluid">
                <div className="row">
                    {projectsData.map((item) => {
                        return (
                            <div className="col-md-6 py-2">
                                <ProjectLargeCard selectCurrentModalData={selectCurrentModalData} project={item} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
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

                    <div className="desc pt-5">
                        <div className="about">
                            <h2 className="pb-3">
                                <TitleDesc>About My Project</TitleDesc>
                            </h2>
                            {currentModalData?.descriptions?.map((desc) => {
                                return (
                                    <div className="py-1">
                                        <p className="blog-text">{desc}</p>
                                    </div>
                                );
                            })}
                        </div>


                        <div className="feature">
                            <h2><TitleDesc>Implemented Feature</TitleDesc></h2>
                            <div className="all-freatured">
                                <ul className="feature-ul">
                                    {currentModalData?.feature?.map(featureText => <li className="feature-li font-montserrat">{featureText}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </ModalContent>
            </PojectDetailsShower>
        </ProjectPageDiv>
    );
};

export default ProjectPage;