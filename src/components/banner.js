
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
                <p>Attend the Closing & Award Ceremony Live Stream on {" "}
                    <strong>April 18<sup>th</sup></strong>
                </p>
                <a href="https://hack.greensoftware.foundation/awards/" target="_blank"
                    rel="noopener noreferrer"
                >Join Now</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
