
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
                <p>Join Carbon Hack 24 on 18 March - 8 April
                    {/* <strong>Survey ends December 31<sup>st</sup></strong> */}
                </p>
                <a href="https://grnsft.org/hack/homepage" target="_blank"
                    rel="noopener noreferrer"
                >Register Now</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
