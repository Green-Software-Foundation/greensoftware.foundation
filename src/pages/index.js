import { Link } from "gatsby";
import * as React from "react";

// Components
import Layout from "../components/layout";
import Button from "../components/button";

// Styles
import "../styles/pages/index.scss";

// Main page Sections
const Section1 = () => {
  return (
    <section className="section1">
      <div className="main-text">
        <p>
          We are building a trusted ecosystem of{" "}
          <Link to="/working-groups/community">people</Link>,{" "}
          <Link to="/working-groups/standards">standards</Link>,{" "}
          <Link to="/working-groups/innovation">tooling</Link> and{" "}
          <Link to="/working-groups/standards">best practices</Link> for
        </p>
        <h1>Green software</h1>
      </div>
      <form className="newsletter-form flex-center-center">
        <input type="text" placeholder="Sign up to our newsletter..." />
        <Button type="submit" color="primary" edgeColor="primary-darker">
          Sign up
        </Button>
      </form>
      <div className="illustration-wrapper"></div>
    </section>
  );
};

const IndexPage = () => {
  return (
    <Layout pageName="homepage">
      <Section1 />
      text
    </Layout>
  );
};

export default IndexPage;
