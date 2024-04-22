
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
                <img src={Logo} alt="Carbon Hack logo" />
                <p>Watch the Carbon Hack 24 Award Ceremony
                </p>
                <a href="https://hack.greensoftware.foundation/awards/" target="_blank"
                    rel="noopener noreferrer"
                >Watch Now</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
