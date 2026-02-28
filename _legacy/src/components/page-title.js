import * as React from "react";

// Assets
import Pattern from "../assets/page-title-pattern.inline.svg";

// Styles
import "../styles/components/page-title.scss";

const PageTitle = ({ children, suptitle }) => {
  return (
    <div className="page-title flex-center-center">
      <div className="pattern">
        <Pattern />
      </div>
      <h1>
        <span className="suptitle">{suptitle}</span>
        {children}
      </h1>
    </div>
  );
};

export default PageTitle;
