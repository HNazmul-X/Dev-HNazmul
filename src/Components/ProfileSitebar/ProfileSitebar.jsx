import React from 'react';
import styled from 'styled-components';


const ProfileSiteBarDiv = styled.div`
    height: 100%;
    .intro-and-img {
        width: 100%;
        height: 200px;
        background: #1a181b;
        text-align: center;
        padding: 20px;
        .profile-img {
            width: 120px;
        }
        .name {
            font-size: 20px;
        }
        .name-under-title {
            font-size: 12px;
            color: dimgray;
        }
    }

    .profile-content {
        width: 100%;
        height: 60%;
        background: rgb(34, 34, 39);
        overflow: hidden;
        overflow-y: auto;
        padding:10px;
        &::-webkit-scrollbar {
            width: 0; /* Remove scrollbar space */
            background: transparent; /* Optional: just make scrollbar invisible */
        }
        /* Optional: show position indicator in red */
        &::-webkit-scrollbar-thumb {
            background: #ff0000;
        }
    }
`;





const ProfileSitebar = () => {

    return (
        <ProfileSiteBarDiv>
            <div className="intro-and-img">
                <img className="img-fluid profile-img" src="https://hnazmul.github.io/assignment-1-personal-website/images/profile-img-2.webp" alt="" />
                <h4 className="name">H. Nazmul Hassan</h4>
                <h6 className="name-under-title">Full Stack Web Developer</h6>
            </div>


            <div className="profile-content">
            </div>
        </ProfileSiteBarDiv>
    );
};

export default ProfileSitebar;