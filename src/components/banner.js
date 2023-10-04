
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
                <p>Join Decarbonize Software on November 16
                    {/* <strong>Survey ends December 31<sup>st</sup></strong> */}
                </p>
                <a href="https://decarb.greensoftware.foundation/" target="_blank"
                    rel="noopener noreferrer"
                >Register Now</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
