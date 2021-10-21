import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Assets
import FacebookIcon from "../assets/icons/facebook.inline.svg";
import TwitterIcon from "../assets/icons/twitter.inline.svg";
import LinkedinIcon from "../assets/icons/linkedin.inline.svg";
import TumblrIcon from "../assets/icons/tumblr.inline.svg";
import GlobeIcon from "../assets/icons/globe.inline.svg";

// Fonts
import "@fontsource/nunito-sans/600.css";

// Styles
import "../styles/components/person-blob.scss";

// Helpers
function getIcon(type) {
  switch (type) {
    case "Facebook":
      return <FacebookIcon />;
    case "Twitter":
      return <TwitterIcon />;
    case "Linkedin":
      return <LinkedinIcon />;
    case "Tumblr":
      return <TumblrIcon />;
    case "Personal Website":
      return <GlobeIcon />;
  }
}

const ImageBlob = ({ photo, alt }) => (
  <div className="image-blob-wrapper flex-center-center">
    <div className="pattern"></div>
    <div className="person-photo">
      <GatsbyImage image={photo} alt={alt} />
    </div>
  </div>
);

const PersonBlob = ({ person }) => {
  return (
    <div className="person-blob">
      <ImageBlob photo={getImage(person.photo)} alt={person.fullName} />
      <div className="person-data-wrapper">
        <h5>{person.fullName}</h5>
        {person.role && <h6>{person.role}</h6>}
        {person.company && (
          <div className="company">
            {person.companyWebsite ? (
              <a
                href={person.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{person.company}
              </a>
            ) : (
              <p>@ {person.company}</p>
            )}
          </div>
        )}
        {person.socialMediaLink && (
          <div className="socials">
            {person.socialMediaLink.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(social.platform)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonBlob;
