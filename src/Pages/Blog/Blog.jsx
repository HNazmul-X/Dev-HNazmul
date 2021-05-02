import React from 'react';
import HomeBannerSection from '../Home/HomeBannerSection';

import {ThemeSpan } from "../../Components/Theme/ThemeStyledComponent";

import blogBg from "../../Images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import mySmileImg from "../../Images/undraw_blogging_vpvv.svg";


const Blog = () => {
    return (
        <div id="blog-page">
            <HomeBannerSection
                title={
                    <>
                        <h1 className="profile-name-title font-montserrat">
                            Welcome to, <br /> <ThemeSpan> Blog</ThemeSpan> Page{" "}
                        </h1>
                        <h6 className="my-3">here every blog is my own written blog. Hope You will find your necessary blog that your want. Thank you </h6>
                    </>
                }
                
                background={blogBg}
                siteImg={mySmileImg}
            />
        </div>
    );
};

export default Blog;