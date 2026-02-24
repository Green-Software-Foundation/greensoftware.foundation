import * as React from "react";
import { Link, graphql } from "gatsby";
import { useLottie } from "lottie-react";
import { useMediaQuery } from "react-responsive";

// Components
import Layout from "../components/layout";
import NewsletterForm from "../components/newsletter-form";
import Button from "../components/button";
import NetlifyImage from "../components/netlify-image";

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

const LogoSection = ({ id, title, logos }) => (
  <section id={id} className={`${id === "steering-members" ? "section4" : "section5"} container`}>
    <h2 className="green-uppercase-title">{title}</h2>
    <div className="logos-wrapper ">
      {logos.map((member) => {
        const logoUrl = member.logo?.publicURL;
        if (!logoUrl) return null;
        return (
          <a
            className={`logo ${
              member.logoWidth && member.logoHeight && member.logoWidth / member.logoHeight > 2
                ? "horizontal"
                : "vertical"
            } ${member.logoFormat === "svg" ? "isSVG" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
            href={member.companyWebsite}
            key={member.companyName}
          >
            <NetlifyImage
              src={logoUrl}
              width={210}
              alt={member.companyName}
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

const IndexPage = ({
  data: { allStatsJson, allSteeringMembersJson, allGeneralMembersJson },
}) => {
  const stats = allStatsJson.nodes[0] || {};
  const steeringMembers = [...allSteeringMembersJson.nodes].sort((a, b) =>
    a.companyName.localeCompare(b.companyName)
  );
  const generalMembers = [...allGeneralMembersJson.nodes].sort((a, b) =>
    a.companyName.localeCompare(b.companyName)
  );

  return (
    <Layout pageName="homepage" seo={{ title: "Green Software Foundation" }}>
      <Section1 />
      <Section2 />
      <Section3
        numberOfIndividuals={stats.numberOfIndividuals}
        numberOfOrganisations={stats.numberOfOrganisations}
      />
      <LogoSection
        id="steering-members"
        title="OUR STEERING MEMBERS"
        logos={steeringMembers}
      />
      <LogoSection
        id="general-members"
        title="OUR General MEMBERS"
        logos={generalMembers}
      />
      <Section6 />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allStatsJson {
      nodes {
        numberOfIndividuals
        numberOfOrganisations
      }
    }
    allSteeringMembersJson {
      nodes {
        companyName
        companyWebsite
        logo { publicURL }
        logoWidth
        logoHeight
        logoFormat
      }
    }
    allGeneralMembersJson {
      nodes {
        companyName
        companyWebsite
        logo { publicURL }
        logoWidth
        logoHeight
        logoFormat
      }
    }
  }
`;

export default IndexPage;
