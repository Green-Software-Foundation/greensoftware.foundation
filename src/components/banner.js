
import * as React from "react";

// Styles
import "../styles/components/banner.scss";

// Assets
import Logo from "../assets/banner/logo.svg";
const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="left">
                <img src={Logo} alt="SoGS logo" />
            </div>
            <div className="center">
                <p>Be part of the largest green software survey. <strong>Survey ends December 31<sup>st</sup></strong></p>
            </div>
            <div className="right">
                <a href="https://grnsft.org/sogs/survey" target="_blank"
                    rel="noopener noreferrer"
                >Take survey now</a>
            </div>
        </div>
    );
};

export default Banner;
