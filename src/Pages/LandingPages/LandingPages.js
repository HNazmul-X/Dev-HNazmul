import React from 'react';
import MyNavbar from '../../Components/MyNavbar/MyNavbar';
import MyRouter from '../../Router/MyRouter/MyRouter';

const LandingPages = () => {
    return (
        <>
            <MyNavbar></MyNavbar>
            <div className="website-layout">
                <div className="profile-site">
                    <div className="profile-site-content"></div>
                </div>
                <div className="website-content-site">
                    <div className="website-layout-content">
                        <MyRouter></MyRouter>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPages;