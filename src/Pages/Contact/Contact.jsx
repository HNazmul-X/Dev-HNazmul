import React from 'react';
import { ThemeSpan, TitleDesc } from '../../Components/Theme/ThemeStyledComponent';
import HomeBannerSection from '../Home/HomeBannerSection';
import blogBg from "../../Images/joanna-kosinska-LbMy35NyCNg-unsplash.jpg";
import mySmileImg from "../../Images/undraw_personal_email_t7nw.svg";
import ContactMeForm from './ContactMeForm';




const Contact = () => {
    return (
        <div id="contact-me">
            <HomeBannerSection
                title={
                    <>
                        <h1 className="profile-name-title font-montserrat">
                            <br /> <ThemeSpan> Contact</ThemeSpan> Me{" "}
                        </h1>
                        <h6 className="my-3">here every blog is my own written blog. Hope You will find your necessary blog that your want. Thank you </h6>
                    </>
                }
                background={blogBg}
                siteImg={mySmileImg}
            />

            <div className="contact-me-form container-fluid">
                <div className="title p-5 pb-2 text-center">
                    <TitleDesc>Stay In Touch</TitleDesc>
                    <p>Contact Me for your Project, any help or any Idea About your project</p>
                </div>
                <ContactMeForm/>
            </div>





        </div>
    );
};

export default Contact;