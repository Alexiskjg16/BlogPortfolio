import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import InstagramLogo from "./Pictures/instagramlogo.jpeg"
import LinkedInLogo from "./Pictures/LinkedIn_Logo.png"
import TwitterLogo from "./Pictures/twitter-logo-final.png"

class Footer extends Component {
    render() {
        return (
            <div className="NavBar">
                <section className="ContactMe">
                    <a href="https://twitter.com/Alexiskjg16"><img src={TwitterLogo} className="AddLogo" alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/in/alexis-grisham-434401169/"><img src={LinkedInLogo} className="AddLogo" alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/alexiskjg16/?hl=en"><img src={InstagramLogo} className="AddLogo" alt="Instagram" /></a>
                </section>
            </div>
        )
    }
}

export default Footer;