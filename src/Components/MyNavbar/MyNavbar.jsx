import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeButton, ThemeSpan } from '../Theme/ThemeStyledComponent';
import myResume from "../../Images/Hnazmul Hassan full Stack Web development Resume_2.pdf"
import "./MyNavbar.css"

const MyNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                       <ThemeSpan>H. Nazmul Hassan</ThemeSpan>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/about-me" >
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/contact-me" >
                                    Contact Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href={myResume} download className="btn"> <ThemeButton className="btn"> Download Resume </ThemeButton> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="navbar-spacer"></div>
        </div>
    );
};

export default MyNavbar;