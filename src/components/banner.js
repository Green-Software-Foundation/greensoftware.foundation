
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
                <p>SCI Specification Achieves ISO Standard
                </p>
                <a href="https://greensoftware.foundation/articles/sci-specification-achieves-iso-standard-status" target="_blank"
                    rel="noopener noreferrer"
                >Read more</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
