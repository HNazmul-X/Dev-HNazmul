import React from 'react';
import HomeBannerSection from '../Home/HomeBannerSection';

import {ThemeSpan, TitleDesc } from "../../Components/Theme/ThemeStyledComponent";

import blogBg from "../../Images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import mySmileImg from "../../Images/undraw_blogging_vpvv.svg";
import BlogCard from '../../Components/BlogCard/BlogCard';


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


            <div className="container-fluid">
                <div className="text-center pb-5">
                    <TitleDesc>My Blog</TitleDesc>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {[...new Array(3)].map(blog=> {
                           return (
                               <div className="col-md-4 p-3">
                                   <BlogCard />
                               </div>
                           );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;