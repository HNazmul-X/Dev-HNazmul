import React from 'react';
import HomeBannerSection from './HomeBannerSection';
import MyServices from './MyServices';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <HomeBannerSection/>
            <MyServices/>
            <Projects/>
        </>
    );
};

export default Home;