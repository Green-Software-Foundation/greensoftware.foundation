import * as React from "react";

// Components
import MemberBlob from "./member-blob";

// Styles
import "../styles/components/members-section.scss";

const MembersSection = ({ members }) => (
  <section className="members-section">
    <h6 className="green-uppercase-title">members</h6>
    <div className="members-blobs">
      {members.map((member) => (
        <MemberBlob key={member.fullName} member={member} />
      ))}
    </div>
  </section>
);

export default MembersSection;
