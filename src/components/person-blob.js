import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Assets
import FacebookIcon from "../assets/icons/facebook.inline.svg";
import TwitterIcon from "../assets/icons/twitter.inline.svg";
import LinkedinIcon from "../assets/icons/linkedin.inline.svg";
import TumblrIcon from "../assets/icons/tumblr.inline.svg";
import GithubIcon from "../assets/icons/github.inline.svg";
import SoundCloudIcon from "../assets/icons/soundcloud.inline.svg";
import YoutubeIcon from "../assets/icons/youtube.inline.svg";
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
    case "Github":
      return <GithubIcon />;
    case "SoundCloud":
      return <SoundCloudIcon />;
    case "YouTube":
      return <YoutubeIcon />;
    case "Personal Website":
      return <GlobeIcon />;
    default:
      return <></>;
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
        <span className="fullname">{person.fullName}</span>
        {person.role && <span className="role">{person.role}</span>}
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
              <span>@ {person.company}</span>
            )}
          </div>
        )}
        {person.socialMediaLink && (
          <div className="socials">
            {person.socialMediaLink.map((social) => (
              <a
                key={social.link}
                href={social.link}
                aria-label={social.platform}
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
