import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import InstagramLogo from "./Pictures/instagramlogo.jpeg"
import LinkedInLogo from "./Pictures/LinkedIn_Logo.png"
import TwitterLogo from "./Pictures/twitter-logo-final.png"

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="ContactMe">
                    <a href="https://twitter.com/Alexiskjg16" target="_blank" rel="noopener noreferrer"><img src={TwitterLogo} className="AddLogo" alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} className="AddLogo" alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en" target="_blank" rel="noopener noreferrer"><img src={InstagramLogo} className="AddLogo" alt="Instagram" /></a>
                </section>
                <section>
                    <Link to={"/HomePage"} className="AverageHomeLink">Back to Home</Link>
                </section>
                    <h6 className="copyright">Made with love and REACT at Suncoast Developers Guild 2018</h6>
            </div>
        )
    }
}

export default Footer;