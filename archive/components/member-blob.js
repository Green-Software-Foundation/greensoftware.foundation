import * as React from "react";
import NetlifyImage from "./netlify-image";

// Styles
import "../styles/components/member-blob.scss";

const MemberBlob = ({ member }) => {
  const companyName = member.companyName ? `/ ${member.companyName}` : "";
  const socialLinks = member.socialMediaLink || member.socialMedia || [];
  const photoUrl = typeof member.photo === "object" && member.photo !== null ? member.photo.publicURL : member.photo;
  let socialLink = "";
  if (typeof socialLinks === "string") {
    socialLink = socialLinks;
  } else if (socialLinks.length) {
    socialLink = socialLinks[0].link;
  }

  if (!socialLink) {
    return (
      <div
        data-tooltip={`${member.fullName} ${companyName}`}
        className="member-blob-wrapper flex-center-center"
      >
        <div className="person-photo">
          {photoUrl && (
            <NetlifyImage
              className="photo"
              src={photoUrl}
              width={130}
              alt={member.fullName}
              style={{ filter: "grayscale(100%)" }}
            />
          )}
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
        {photoUrl && (
          <img
            className="photo"
            src={photoUrl}
            alt={member.fullName}
            loading="lazy"
            style={{ filter: "grayscale(100%)" }}
          />
        )}
      </div>
    </a>
  );
};

export default MemberBlob;
