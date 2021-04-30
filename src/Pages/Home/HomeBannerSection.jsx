import React from 'react';
import styled from 'styled-components';
import { ThemeA, ThemeButton } from '../../Components/Theme/ThemeStyledComponent';
import compterBgimg from "../../Images/maxwell-nelson-v6TksP-5d9w-unsplash.jpg"


const HomeBannerSectionDiv = styled.div`
padding:20px;
background:url(${compterBgimg}) no-repeat center;
background-color:#434357;
background-blend-mode:soft-light;
background-size:cover;



`;
const HomeBannerSection = () => {
    return (
        <HomeBannerSectionDiv>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <h1>Discover my Amazing Art Space!</h1>
                        <ThemeA>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, reiciendis.</ThemeA>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, reiciendis.</p>
                        <ThemeButton className="btn">Explore Now</ThemeButton>
                    </div>
                    <div className="col-md-5"></div>
                </div>
            </div>
        </HomeBannerSectionDiv>
    );
};

export default HomeBannerSection;