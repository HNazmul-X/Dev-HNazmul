import React from 'react';
import { ThemeButton, ThemeSpan } from '../../Components/Theme/ThemeStyledComponent';
import HomeBannerSection from './HomeBannerSection';
import MyServices from './MyServices';
import Projects from './Projects';
import myResume from "../../Images/Hnazmul Hassan full Stack Web development Resume_2.pdf" 
import computerBg from "../../Images/maxwell-nelson-v6TksP-5d9w-unsplash.jpg"
import mySmileImg from "../../Images/HNazmul-smile.png"
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <>
            <HomeBannerSection
                title={
                    <>
                        <h1 className="profile-name-title font-montserrat">
                            Hello, I am <br /> <ThemeSpan> H. Nazmul</ThemeSpan> Hassan{" "}
                        </h1>
                        <h6 className="mb-3">Full Stack Web Developer</h6>
                    </>
                }
                description={
                    <>
                        <p className="small fw-normal">Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos, itaque alias facere laboriosam blanditiis aliquam! Nam laudantium sapiente sequi. sit amet consectetur adipisicing elit. Voluptas, reiciendis.</p>

                        <ThemeButton className="btn">
                            <a href={myResume} className="text-decoration-none" download>
                                Download My Resume
                            </a>
                        </ThemeButton>
                    </>
                }
                background={computerBg}
                siteImg={mySmileImg}
            />
            <MyServices />
            <Projects />
            <Footer/>
        </>
    );
};

export default Home;