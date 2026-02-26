
import * as React from "react";

// Styles
import "../styles/components/banner.scss";

// Assets
import Logo from "../assets/banner/logo.svg";
const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="left">

            </div>
            <div className="center">
                <img src={Logo} alt="Banner logo" />
                <a href="https://grnsft.org/mov-plat-website" target="_blank" rel="noopener noreferrer">💚 Join the Green Software Movement Platform</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
