
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
                <img src={Logo} alt="SoGS logo" />
                <p>Learn how to build, maintain and run greener applications
                    {/* <strong>Survey ends December 31<sup>st</sup></strong> */}
                </p>
                <a href="https://grnsft.org/sogs/survey" target="_blank"
                    rel="noopener noreferrer"
                >Take Our Course</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
