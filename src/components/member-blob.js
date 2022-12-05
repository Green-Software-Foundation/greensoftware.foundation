import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Styles
import "../styles/components/member-blob.scss";

const MemberBlob = ({ member }) => {
  const companyName = member.companyName ? `/ ${member.companyName}` : "";
  let socialLink = "";
  if (member.socialMediaLink === "string") {
    socialLink = member.socialMediaLink;
  } else {
    if (member.socialMediaLink.length) {
      socialLink = member.socialMediaLink[0].link;
    }
  }
  if (!socialLink) {
    return (
      <div
        data-tooltip={`${member.fullName} ${companyName}`}
        href={socialLink}
        className="member-blob-wrapper flex-center-center"
      >
        <div className="person-photo">
          <GatsbyImage
            className="photo"
            image={getImage(member.photo)}
            alt={member.fullName}
          />
        </div>
      </div>
    );
  }
  return (
    <a
      data-tooltip={`${member.fullName} ${companyName}`}
      href={socialLink}
      target="_blank"
      rel="noopener noreferrer"
      className="member-blob-wrapper flex-center-center"
    >
      <div className="person-photo">
        <GatsbyImage
          className="photo"
          image={getImage(member.photo)}
          alt={member.fullName}
        />
      </div>
    </a>
  );
};

export default MemberBlob;
