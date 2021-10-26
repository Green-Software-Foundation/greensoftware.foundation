import * as React from "react";

// Components
import Button from "./button";

// Styles
import "../styles/components/paginator.scss";

const Paginator = ({ currentPage, numPages, path }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  if (!numPages) {
    return <></>;
  }
  return (
    <div className="paginator-wrapper">
      <ul>
        {!isFirst && (
          <li className="btn prev-btn">
            <Button
              color="accent1"
              edgeColor="accent1-dark"
              textColor="black"
              to={`/${path}/${prevPage}`}
              rel="next"
            >
              ←
            </Button>
          </li>
        )}
        {/* TODO: Add Pagination Breaks */}
        {!isLast && (
          <li className="btn next-btn">
            <Button
              color="accent1"
              edgeColor="accent1-dark"
              textColor="black"
              to={`/${path}/${nextPage}`}
              rel="next"
            >
              →
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Paginator;
