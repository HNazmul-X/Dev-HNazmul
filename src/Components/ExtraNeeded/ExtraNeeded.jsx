import React, { useEffect, useRef } from 'react';
import bgImg from "../../Images/maxwell-nelson-v6TksP-5d9w-unsplash.jpg"



const ExtraNeeded = () => {
    //  useEffect(() => {
    //      const mouseCursor = document.querySelector(".mouse-cursor");
    //      window.addEventListener("mousemove", (e) => {
    //          mouseCursor.style.top = `${e.pageY}px`;
    //          mouseCursor.style.left = `${e.pageX}px`;
    //      });
    //      window.addEventListener("scroll", (e) => {
    //          mouseCursor.style.top = `${e.pageY}px`;
    //          mouseCursor.style.left = `${e.pageX}px`;
    //      });

    //  }, []);


   
    return (
        <>
            <img src={bgImg} className="body-bg-img" alt="" />
            <div className="bg-overlay"></div>
            <div  className="mouse-cursor"></div>
        </>
    );
};

export default ExtraNeeded;