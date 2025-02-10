
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
                <p>We are hiring! Come and join the GSF Team!</p>
                <a Tzhref="https://wiki.greensoftware.foundation/job-board" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
