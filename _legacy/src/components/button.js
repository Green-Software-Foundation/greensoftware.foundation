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
  href,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        {...props}
      >
        <ButtonElements
          edgeColor={edgeColor}
          color={color}
          textColor={textColor}
          fontWeight={fontWeight}
        >
          {children}
        </ButtonElements>
      </a>
    );
  } else if (to) {
    return (
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
    );
  }
  return (
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
