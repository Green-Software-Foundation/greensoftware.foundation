import * as React from "react";

import WarningIcon from "../assets/icons/warning.inline.svg";
import "../styles/components/disclaimer.scss";

const Disclaimer = ({children}) => (
  <div className="disclaimer-wrapper">
    <span className="icon flex-center-center">
      <WarningIcon />
    </span>
    <p>
      {children}
    </p>
  </div>
);

export default Disclaimer;
