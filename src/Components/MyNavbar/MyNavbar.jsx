import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeButton, ThemeSpan } from "../Theme/ThemeStyledComponent";
import myResume from "../../Images/Hnazmul Hassan full Stack Web development Resume_2.pdf";
import togglerIcon from "../../Images/toggler-icon.svg";
import canclerIcon from "../../Images/times-navbar-clouser-icon.svg";
import "./MyNavbar.css";

const MyNavbar = () => {
    useEffect(() => {
        const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
        const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
        const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

        navbarToggleIcon?.addEventListener("click", (e) => {
            NavbarContent.classList.toggle("navbar-show");
            e.stopPropagation();
        });
        navbarCloserIcon?.addEventListener("click", (e) => {
            NavbarContent.classList.toggle("navbar-show");
            e.stopPropagation()
        });

        window.onclick = () => {    
            if(NavbarContent.classList.contains("navbar-show")){
                NavbarContent.classList.remove("navbar-show")
            }

        }
    });

    return (
        <div>
            <nav className="hnazmul-navbar">
                <div className="hnazmul-navbar-container">
                    <div className="hnazmul-nav-brand">
                        <h4>
                            <ThemeSpan>H. Nazmul</ThemeSpan>
                        </h4>
                    </div>
                    <div className="hnazmul-nav-toggle-btn">
                        <button>
                            <img className="toggler-btn" src={togglerIcon} alt="" />
                        </button>
                    </div>

                    <div className="hnazmul-navbar-content">
                        <div className="hnazmul-navbar-content-wrapper">
                            <ul className="navbar-list">
                                <li className="navbar-list-item">
                                    <NavLink exact to="/" activeClassName="nav-item-active" className="navbar-list-link font-montserrat">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavLink exact to="/blog" activeClassName="nav-item-active" className="navbar-list-link font-montserrat">
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavLink exact to="/projects" activeClassName="nav-item-active" className="navbar-list-link font-montserrat">
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavLink exact to="/about" activeClassName="nav-item-active" className="navbar-list-link font-montserrat">
                                        About
                                    </NavLink>
                                </li>
                                <li className="navbar-list-item">
                                    <NavLink exact to="/contact" activeClassName="nav-item-active" className="navbar-list-link font-montserrat">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="navbar-list-item">
                                    <a href={myResume} download>
                                        {" "}
                                        <ThemeButton className="btn fw-bold">Download My Cv</ThemeButton>
                                    </a>
                                </li>
                            </ul>
                            <button className="navbar-closer-icon">
                                <img className="navbar-closer" src={canclerIcon} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-spacer"></div>
        </div>
    );
};

export default MyNavbar;
