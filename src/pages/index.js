import * as React from "react";
import { Link, graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import NewsletterForm from "../components/newsletter-form";
import Button from "../components/button";

// Assets
import Section2Illustration from "../assets/illustrations/homepage-section2.inline.svg";
import section3Background from "../assets/illustrations/homepage-section3-background.svg";

// Fonts
import "@fontsource/nunito-sans/600.css";

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
      <NewsletterForm placeholder="Sign up to our newsletter..." />
      <div className="illustration-wrapper"></div>
    </section>
  );
};

const Section2 = () => (
  <section className="section2">
    <div className="illustration-wrapper flex-center-center">
      <Section2Illustration />
    </div>
    <div className="content-wrapper">
      <h2 className="green-uppercase-title">WHAT IS GREEN SOFTWARE?</h2>
      <p>
        Green software is software that is responsible for emitting fewer
        greenhouse gases. Our focus is reduction, not neutralisation.
      </p>
      <Button to="/manifesto" color="primary" edgeColor="primary-darker">
        Check Manifesto
      </Button>
    </div>
  </section>
);

const Section3 = ({ numberOfIndividuals, numberOfOrganisations }) => (
  <section className="section3">
    <div className="content-wrapper">
      <h2 className="green-uppercase-title">NON-PROFIT FOUNDATION</h2>
      <p>
        We are a non-profit formed under the Linux Foundation with organisations
        and individuals participating in various projects to further our
        mission.
      </p>
    </div>
    <div className="values-wrapper flex-start-center">
      <div className="value-item">
        <img src={section3Background} alt="Background" />
        <div className="text">
          <strong>{numberOfOrganisations}</strong>
          <span>MEMBER</span>
          <span>ORGANISATIONS</span>
        </div>
      </div>
      <div className="value-item">
        <img src={section3Background} alt="Background" />
        <div className="text">
          <strong>{numberOfIndividuals}</strong>
          <span>INDIVIDUALS</span>
        </div>
      </div>
    </div>
  </section>
);

const Section4 = ({ logos }) => (
  <section id="steering-members" className="section4">
    <h2 className="green-uppercase-title">OUR STEERING MEMBERS</h2>
    <div className="logos-wrapper ">
      {logos.map(({ logo, companyName, companyWebsite }) => (
        <a
          className={`logo ${
            logo.width / logo.height > 2 ? "horizontal" : "vertical"
          } ${logo.format === "svg" ? "isSVG" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
          href={companyWebsite}
          key={companyName}
        >
          <img src={logo.url} alt={companyName} {...logo.fluid} />
        </a>
      ))}
    </div>
  </section>
);

const Section5 = ({ logos }) => (
  <section id="general-members" className="section5">
    <h2 className="green-uppercase-title">OUR General MEMBERS</h2>
    <div className="logos-wrapper ">
      {logos.map(({ logo, companyName, companyWebsite }) => (
        <a
          className={`logo  ${
            logo.width / logo.height > 2 ? "horizontal" : "vertical"
          } ${logo.format === "svg" ? "isSVG" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
          href={companyWebsite}
          key={companyName}
        >
          <img src={logo.url} alt={companyName} {...logo.fluid} />
        </a>
      ))}
    </div>
  </section>
);
const Section6 = () => (
  <section className="section6">
    <div className="pattern"></div>
    <div className="content-wrapper">
      <h3>
        Wanna work
        <br /> with us?
      </h3>
      <p>
        There are several ways of getting involved in the Green Software
        Foundation, from joining as members to participating in our global
        community.
      </p>
      <Button
        to="/join-us"
        color="gray-lightest-2"
        edgeColor="gray-dark"
        textColor="black"
        fontWeight={600}
      >
        Join us
      </Button>
    </div>
  </section>
);
const IndexPage = ({ data: { datoCmsHomepage: homepageData } }) => {
  return (
    <Layout pageName="homepage" seo={{ title: "Green Software Foundation" }}>
      <Section1 />
      <Section2 />
      <Section3
        numberOfIndividuals={homepageData.numberOfIndividuals}
        numberOfOrganisations={homepageData.numberOfOrganisations}
      />

      <Section4 logos={homepageData.steeringMembers} />
      <Section5 logos={homepageData.generalMembers} />
      <Section6 />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    datoCmsHomepage {
      numberOfIndividuals
      numberOfOrganisations
      steeringMembers {
        logo {
          url
          height
          width
          fluid {
            src
            srcSet
            sizes
          }
          format
        }
        companyName
        companyWebsite
      }
      generalMembers {
        logo {
          url
          height
          width
          fluid {
            src
            srcSet
            sizes
          }
          format
        }
        companyName
        companyWebsite
      }
    }
  }
`;
export default IndexPage;
