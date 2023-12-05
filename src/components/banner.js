
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
                {/* <img src={Logo} alt="SoGS logo" /> */}
                <p>View our Book of News for 2023
                    {/* <strong>Survey ends December 31<sup>st</sup></strong> */}
                </p>
                <a href="https://greensoftware.foundation/articles/green-software-foundation-book-of-news-2023/" target="_blank"
                    rel="noopener noreferrer"
                >Read now</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
