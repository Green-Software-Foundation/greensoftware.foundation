import * as React from "react";
import { Link } from "gatsby";

// Components
import NewsletterForm from "./newsletter-form";

// Assets
import Logo from "../assets/icons/logo-sign.inline.svg";
import GithubIcon from "../assets/icons/github.inline.svg";
import TwitterIcon from "../assets/icons/twitter.inline.svg";
import LinkedinIcon from "../assets/icons/linkedin.inline.svg";

// Styles
import "../styles/components/footer.scss";

const legalData = [
  {
    title: "Trademark Policy",
    to: "/policy/trademark",
  },
  {
    title: "Terms and Privacy Policy",
    to: "/policy/terms",
  },
];

const moreData = [
  {
    title: "Membership enquires",
    href: "https://share.hsforms.com/1NNvkCLgfS4GIUJ0XPH93iw4tvhy",
  },
  {
    title: "Join us",
    to: "/join-us",
  },
  {
    title: "Helpdesk",
    to: "/helpdesk",
  },
];
const socialMediaLinks = [
  {
    icon: <GithubIcon />,
    link: "https://github.com/Green-Software-Foundation",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/gsfcommunity",
  },
  {
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/company/green-software-foundation/",
  },
];
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="container">
        <div className="logo-copyrights-wrapper">
          <Logo />
          <p>
            Copyright © {new Date().getFullYear()} Joint Development Foundation
            Projects, LLC, Green Software Foundation Series
          </p>
          <ul className="social-links">
            {socialMediaLinks.map(({ link, icon }) => (
              <li key={link}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="links-wrapper legal-links">
          <h2>Legal</h2>
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
          <h2>More</h2>
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
          <h2>JOIN OUR NEWSLETTER</h2>
          <NewsletterForm position="footer" placeholder="you@example.xyz" hasDarkBg />
        </div>
      </footer>
      <div className="sub-footer">
        <p>
          The Joint Development Foundation Projects, LLC is an affiliate of the
          Linux Foundation.
        </p>
      </div>
    </div>
  );
};

export default Footer;
