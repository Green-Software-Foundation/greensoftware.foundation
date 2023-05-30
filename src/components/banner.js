
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
                <p>Green Software Foundation releases first-ever State of Green Software report
                    {/* <strong>Survey ends December 31<sup>st</sup></strong> */}
                </p>
                <a href="https://stateof.greensoftware.foundation/" target="_blank"
                    rel="noopener noreferrer"
                >View Insights</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
