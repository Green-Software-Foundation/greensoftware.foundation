import * as React from "react";
import { Link } from "gatsby";

// Styles
import "../styles/components/button.scss";

const ButtonElements = ({
  edgeColor,
  color,
  textColor,
  children,
  fontWeight,
}) => (
  <>
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
  </>
);

const Button = ({
  children,
  color,
  edgeColor,
  textColor = "white",
  fontWeight = 800,
  to,
  ...props
}) => {
  return to ? (
    <Link to={to} className="button" {...props}>
      <ButtonElements
        edgeColor={edgeColor}
        color={color}
        textColor={textColor}
        fontWeight={fontWeight}
      >
        {children}
      </ButtonElements>
    </Link>
  ) : (
    <button className="button" {...props}>
      <ButtonElements
        edgeColor={edgeColor}
        color={color}
        textColor={textColor}
        fontWeight={fontWeight}
      >
        {children}
      </ButtonElements>
    </button>
  );
};

export default Button;
