import * as React from "react";
import { Link, graphql } from "gatsby";
import { useLottie } from "lottie-react";
import { useMediaQuery } from "react-responsive";

// Components
import Layout from "../components/layout";
import NewsletterForm from "../components/newsletter-form";
import Button from "../components/button";

// Assets
import Section2Illustration from "../assets/illustrations/homepage-section2.inline.svg";
import section3Background from "../assets/illustrations/homepage-section3-background.svg";
import illustrationLottieMobile from "../assets/lottie/homepage-mobile.json";
import illustrationLottieTablet from "../assets/lottie/homepage-tablet.json";
import illustrationLottieDesktop from "../assets/lottie/homepage-desktop.json";
import illustrationLottieLargeScreen from "../assets/lottie/homepage-large-screen.json";

// Fonts
import "@fontsource/nunito-sans/600.css";

// Styles
import "../styles/pages/index.scss";

// Main page Sections
const Section1 = () => {
  let illustrationJSON;
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1280px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px) and (max-width: 1440px)",
  });
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1440px) ",
  });
  if (isTablet) {
    illustrationJSON = illustrationLottieTablet;
  } else if (isDesktop) {
    illustrationJSON = illustrationLottieDesktop;
  } else if (isLargeScreen) {
    illustrationJSON = illustrationLottieLargeScreen;
  } else {
    illustrationJSON = illustrationLottieMobile;
  }
  const options = {
    animationData: illustrationJSON,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return (
    <section className="section1">
      <div className="main-text">
        <p>We are building a trusted ecosystem of people, standards, tooling and best practices for</p>
        <h1>Green software</h1>
      </div>
      <NewsletterForm placeholder="Sign up to our newsletter..." />
      <div className="illustration-wrapper">{View}</div>
    </section>
  );
};

const Section2 = () => (
  <section className="section2 container">
    <div className="illustration-wrapper flex-center-center">
      <Section2Illustration />
    </div>
    <div className="content-wrapper">
      <h2 className="green-uppercase-title">WHAT IS GREEN SOFTWARE?</h2>
      <p>
        Green software is software that is responsible for emitting fewer
        greenhouse gases. Our focus is reduction, not neutralisation.
      </p>
      <Button
        to="/articles/what-is-green-software"
        color="primary"
        edgeColor="primary-darker"
      >
        Read our definition
      </Button>
    </div>
  </section>
);

const Section3 = ({ numberOfIndividuals, numberOfOrganisations }) => (
  <section className="section3 container">
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
  <section id="steering-members" className="section4 container">
    <h2 className="green-uppercase-title">OUR STEERING MEMBERS</h2>
    <div className="logos-wrapper ">
      {logos.map(({ companyLogo, companyName, companyWebsite }) => {
        if (!companyLogo) return null;
        return (
          <a
            className={`logo ${
              companyLogo.width / companyLogo.height > 2
                ? "horizontal"
                : "vertical"
            } ${companyLogo.format === "svg" ? "isSVG" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            href={companyWebsite}
            key={companyName}
          >
            <img
              src={companyLogo.url}
              alt={companyName}
              {...companyLogo.fluid}
            />
          </a>
        );
      })}
    </div>
  </section>
);

const Section5 = ({ logos }) => (
  <section id="general-members" className="section5 container">
    <h2 className="green-uppercase-title">OUR General MEMBERS</h2>
    <div className="logos-wrapper ">
      {logos.map(({ companyLogo, companyName, companyWebsite }) => {
        if (!companyLogo) return null;
        return (
          <a
            className={`logo  ${
              companyLogo.width / companyLogo.height > 2
                ? "horizontal"
                : "vertical"
            } ${companyLogo.format === "svg" ? "isSVG" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            href={companyWebsite}
            key={companyName}
          >
            <img
              src={companyLogo.url}
              alt={companyName}
              {...companyLogo.fluid}
            />
          </a>
        );
      })}
    </div>
  </section>
);
const Section6 = () => (
  <section className="section6 container">
    <div className="pattern"></div>
    <div className="content-wrapper">
      <h2>
        Wanna work
        <br /> with us?
      </h2>
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
  // Sort by company name
  const steeringMembers = homepageData.steeringMembers.sort((a, b) =>
    a.companyName.localeCompare(b.companyName)
  );
  const generalMembers = homepageData.generalMembers.sort((a, b) =>
    a.companyName.localeCompare(b.companyName)
  );
  return (
    <Layout pageName="homepage" seo={{ title: "Green Software Foundation" }}>
      <Section1 />
      <Section2 />
      <Section3
        numberOfIndividuals={homepageData.numberOfIndividuals}
        numberOfOrganisations={homepageData.numberOfOrganisations}
      />

      <Section4 logos={steeringMembers} />
      <Section5 logos={generalMembers} />
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
        companyLogo {
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
        companyLogo {
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
