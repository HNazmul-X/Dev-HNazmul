import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SocailIconGroup = () => {
    return (
        <div id="social-icon-group-site-bar-profile">
            <a href="https://github.com/HNazmul" target={"_blank"} className="icon">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://facebook.com/HNazmul.me" target={"_blank"} className="icon">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instragram.com/hnazmul.me" target={"_blank"} className="icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/in/HNazmul" target={"_blank"} className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    );
};

export default SocailIconGroup;
