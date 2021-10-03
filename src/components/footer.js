import * as React from "react";
import { Link } from "gatsby";

// Components
import Button from "./button";

// Assets
import Logo from "../assets/icons/logo-sign.inline.svg";
import HeartIcon from "../assets/icons/heart.inline.svg";

// Styles
import "../styles/components/footer.scss";

const legalData = [
  {
    title: "Trademark",
    to: "/trademark",
  },
  {
    title: "Privacy Policy",
    to: "/privacy-policy",
  },
  {
    title: "Terms and Conditions",
    to: "/terms-and-conditions",
  },
];

const moreData = [
  {
    title: "Contact us",
    href: "https://share.hsforms.com/1NNvkCLgfS4GIUJ0XPH93iw4tvhy",
  },
  {
    title: "Join us",
    to: "/join-us",
  },
  {
    title: "Community",
    href: "https://www.discourse.org/",
  },
];
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="logo-copyrights-wrapper">
          <Logo />
          <p>
            Copyright © {new Date().getFullYear()} Joint Development Foundation
            Projects, LLC, Green Software Foundation Series
          </p>
          <p>
            The Joint Development Foundation Projects, LLC is an affiliate of
            the Linux Foundation.
          </p>
        </div>
        <div className="links-wrapper legal-links">
          <h6>Legal</h6>
          <ul>
            {legalData.map((linkItem) => (
              <li key={linkItem.title}>
                {linkItem.to ? (
                  <Link to={linkItem.to}>{linkItem.title}</Link>
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkItem.href}
                  >
                    {linkItem.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="links-wrapper more-links">
          <h6>More</h6>
          <ul>
            {moreData.map((linkItem) => (
              <li key={linkItem.title}>
                {linkItem.to ? (
                  <Link to={linkItem.to}>{linkItem.title}</Link>
                ) : (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkItem.href}
                  >
                    {linkItem.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="newsletter-wrapper">
          <h6>JOIN OUR NEWSLETTER</h6>
          <input type="text" placeholder="you@example.xyz" />
          <Button color="primary" edgeColor="primary-darkest">
            Sign up
          </Button>
        </div>
      </footer>
      <div className="made-by">
        Made with <HeartIcon /> by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://osamajandali.com/"
        >
          Osama Jandali
        </a>
      </div>
    </div>
  );
};

export default Footer;
