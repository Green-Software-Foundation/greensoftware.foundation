import * as React from "react";
import { Link } from "gatsby";

// Styles
import "../styles/components/button.scss";

const Button = ({
  children,
  color,
  edgeColor,
  textColor = "white",
  fontWeight = 800,
  ...props
}) => {
  return (
    <button className="button" {...props}>
      <span
        style={{ background: `var(--${edgeColor})` }}
        className="button-edge"
      ></span>
      <span
        style={{
          background: `var(--${color})`,
          color: `var(--${textColor})`,
          fontWeight,
        }}
        className="button-front"
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
