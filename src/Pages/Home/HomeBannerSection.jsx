import React from 'react';
import styled from 'styled-components';


const HomeBannerSectionDiv = styled.div`
    padding: 20px;
    background: url(${props => props.background}) no-repeat center;
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
const HomeBannerSection = ({title,siteImg,background,description}) => {



    
    return (
        <HomeBannerSectionDiv className="header-banner-components" background={background}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        {title}
                        <>
                        {description}</>
                        
                        
                    </div>
                    <div className="col-md-5">
                        <img src={siteImg} className="img-fluid profile-img" alt="" />
                    </div>
                </div>
            </div>
        </HomeBannerSectionDiv>
    );
};

export default HomeBannerSection;