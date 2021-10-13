import * as React from "react";

// Components
import PersonBlob from "./person-blob";

// Styles
import "../styles/components/chairs-section.scss";

const ChairsSection = ({ chairs }) => (
  <section className="chairs-section">
    <h6 className="green-uppercase-title">chairs</h6>
    <div className="chairs-blobs">
      {chairs.map((chair) => (
        <PersonBlob key={chair.fullName} person={chair} />
      ))}
    </div>
  </section>
);

export default ChairsSection;
