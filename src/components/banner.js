
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
                <p>SSIA joins the Green Software Foundation</p>
                <a href="https://greensoftware.foundation/articles/sustainable-and-scalable-infrastructure-alliance-joins-the-green-software-foundat" target="_blank"
                    rel="noopener noreferrer"
                >Read more</a>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default Banner;
