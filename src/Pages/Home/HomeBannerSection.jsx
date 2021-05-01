import React from 'react';
import styled from 'styled-components';
import {ThemeSpan, ThemeA, ThemeButton, ThemeP } from '../../Components/Theme/ThemeStyledComponent';
import compterBgimg from "../../Images/maxwell-nelson-v6TksP-5d9w-unsplash.jpg"
import mySmileImg from "../../Images/HNazmul-smile.png"


const HomeBannerSectionDiv = styled.div`
    padding: 20px;
    background: url(${compterBgimg}) no-repeat center;
    background-color: #5c5555;
    background-blend-mode: soft-light;
    background-size: cover;
    margin-bottom:40px;

    .profile-name-title {
        font-size: 56px;
        line-height: 50px;
    }
    .profile-img {
        margin-bottom: -20px;
    }
`;
const HomeBannerSection = () => {



    
    return (
        <HomeBannerSectionDiv>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1 className="profile-name-title font-montserrat">
                            Hello, I am <br /> <ThemeSpan> H. Nazmul</ThemeSpan> Hassan{" "}
                        </h1>
                        <h6 className="mb-3">Full Stack Web Developer</h6>
                        <p className="small fw-normal">Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos, itaque alias facere laboriosam blanditiis aliquam! Nam laudantium sapiente sequi. sit amet consectetur adipisicing elit. Voluptas, reiciendis.</p>

                        <ThemeButton className="btn">
                            <a href={mySmileImg} download>Download My Resume</a>
                        </ThemeButton>
                    </div>
                    <div className="col-md-5">
                        <img src={mySmileImg} className="img-fluid profile-img" alt="" />
                    </div>
                </div>
            </div>
        </HomeBannerSectionDiv>
    );
};

export default HomeBannerSection;