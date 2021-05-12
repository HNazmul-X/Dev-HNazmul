import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SocailIconGroup = () => {
    return (
        <div id="social-icon-group-site-bar-profile">
            <Link className="icon">
            <FontAwesomeIcon  icon={faGithub}/>
            </Link>
            <Link className="icon">
            <FontAwesomeIcon  icon={faFacebook}/>
            </Link>
            <Link className="icon">
            <FontAwesomeIcon  icon={faInstagram}/>
            </Link>
            <Link className="icon">
            <FontAwesomeIcon  icon={faLinkedin}/>
            </Link>
            
        </div>
    );
};

export default SocailIconGroup;