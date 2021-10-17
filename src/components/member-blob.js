import * as React from "react";
import Tooltip, { useTooltip, TooltipPopup } from "@reach/tooltip";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Styles
import "../styles/components/member-blob.scss";

const MemberBlob = ({ member }) => {
  console.log(member);
  return (
    <Tooltip
      label={`${member.fullName} ${
        member.companyName ? `/ ${member.companyName}` : ""
      }`}
    >
      <a
        href={
          typeof member.socialMediaLink === "string"
            ? member.socialMediaLink
            : member.socialMediaLink[0].link
        }
        target="_blank"
        rel="noopener noreferrer"
        className="member-blob-wrapper flex-center-center"
      >
        <div className="person-photo">
          <GatsbyImage image={getImage(member.photo)} alt={member.fullName} />
        </div>
      </a>
    </Tooltip>
  );
};

export default MemberBlob;
