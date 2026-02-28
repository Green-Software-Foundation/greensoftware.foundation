import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

// Assets
import Illustration from "../assets/illustrations/not-found.inline.svg";

// Style
import "../styles/pages/404.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>Sorry, the page you were looking for doesn't exist. (404)</title>
      </Helmet>
      <div>
        <div className="illustration-wrapper">
          <Illustration />
        </div>
        <h1>Page not found</h1>
        <p>Sorry, the page you were looking for doesn't exist.</p>
        <Link to="/">Go back to homepage</Link>.
      </div>
    </main>
  );
};

export default NotFoundPage;
