import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Assets
import TwitterIcon from "../assets/icons/twitter.inline.svg";
import LinkedinIcon from "../assets/icons/linkedin.inline.svg";

// Fonts
import "@fontsource/nunito-sans/600.css";

// Styles
import "../styles/components/person-blob.scss";

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
        {(person.twitterUsername || person.linkedinUsername) && (
          <div className="socials">
            {person.twitterUsername && (
              <a
                href={`https://twitter.com/${person.twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "0.75rem" }}
              >
                <TwitterIcon />
              </a>
            )}
            {person.linkedinUsername && (
              <a
                href={`https://www.linkedin.com/in/${person.linkedinUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonBlob;
