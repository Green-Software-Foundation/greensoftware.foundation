import * as React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Button from "../components/button";

// Assets
import WarningIcon from "../assets/icons/warning.inline.svg";
import JoinUsIllustration from "../assets/illustrations/join-us.inline.svg";
import SteeringIcon from "../assets/icons/steering-membership.inline.svg";
import GeneralIcon from "../assets/icons/general-membership.inline.svg";
import AllMembershipsIcon from "../assets/icons/all-memberships.inline.svg";
import CheckCircleIcon from "../assets/icons/check-circle.inline.svg";
import ApplyIllustration from "../assets/illustrations/join-us-section5.inline.svg";

// Styles
import "../styles/pages/join-us.scss";

// Data
const section2Data = [
  {
    title: "Steering membership",
    description:
      "offers you a seat in the steering committee, the right to review the outputs of the individuals working groups and decide where and how the GSF budget should be allocated.",
    icon: <SteeringIcon />,
  },
  {
    title: "General and steering membership",
    description:
      "allows members of your organisation to participate in the Foundations working groups and projects and one vote per organization in any motions.",
    icon: <GeneralIcon />,
  },
  {
    title: "All memberships",
    description: "allow you to participate in the working groups and projects.",
    icon: <AllMembershipsIcon />,
  },
];

const benefits = {
  vote_S: "Vote in Steering Committee",
  chair: "Chair working group",
  participate: "Participate in working groups",
  create: "Create new working groups",
  vote_W: "Vote in working groups",
  premium: "Premium sponsorship opportunities",
  speaking: "Guaranteed speaking opportunities at flagship events",
};

const memberships = [
  {
    title: "Steering",
    benefits: [
      "vote_S",
      "chair",
      "participate",
      "create",
      "vote_W",
      "premium",
      "speaking",
    ],
    icon: <SteeringIcon />,
  },
  {
    title: "General",
    benefits: ["chair", "participate", "create", "vote_W"],
    icon: <GeneralIcon />,
  },
  {
    title: "* Contributer",
    benefits: ["participate"],
    icon: <AllMembershipsIcon />,
  },
];

const membershipFees = [
  {
    type: "Steering Members",
    GSF: "$100,000",
    LF: "$20,000",
    total: "$120,000",
  },
  {
    type: "General Members (5,000+)",
    GSF: "$20,000",
    LF: "$20,000",
    total: "$40,000",
  },
  {
    type: "General Members (< 5,000)",
    GSF: "$15,000",
    LF: "$15,000",
    total: "$30,000",
  },
  {
    type: "General Members (< 500)",
    GSF: "$10,000",
    LF: "$10,000",
    total: "$20,000",
  },
  {
    type: "General Members (< 100)",
    GSF: "$5,000",
    LF: "$5,000",
    total: "$10,000",
  },
  {
    type: "Non-Profits",
    GSF: "$0",
    LF: "$0",
    total: "$0",
  },
  {
    type: "Contributors",
    GSF: "$0",
    LF: "$0",
    total: "$0",
  },
];

const Disclaimer = () => (
  <div className="disclaimer-wrapper">
    <span className="icon flex-center-center">
      <WarningIcon />
    </span>
    <p>
      If you are already an employee of one of the existing member
      organisations, please contact your organisational lead, found on the{" "}
      <Link to="/team">Member List</Link> page.
    </p>
  </div>
);

const Section1 = () => (
  <section className="section1">
    <div className="illustration-wrapper">
      <JoinUsIllustration />
    </div>
    <div className="content-wrapper">
      <h1>The Green Software Foundation</h1>
      <p>
        is a diverse global community of organizations representing academia,
        for-profits and nonprofits.
      </p>
      <p>
        To understand our mission and values, please read our{" "}
        <Link to="/manifesto">Manifesto</Link>, look at our{" "}
        <Link to="/manifesto">Working Groups</Link> and our{" "}
        <Link to="/manifesto">list of Projects</Link>.
      </p>
    </div>
  </section>
);

const Section2 = () => (
  <section className="section2">
    <h2>
      There are three levels of membership in the Foundation, Steering, General
      and Contributor.{" "}
    </h2>
    <ul className="content-wrapper">
      {section2Data.map((item, i) => (
        <li key={item.title}>
          <span className="icon-wrapper">{item.icon}</span>
          <h3 data-count={`0${i + 1}`}>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

const Section3Mobile = () => (
  <div className="membership-benefits-mobile">
    {memberships.map((membership) => (
      <div key={membership.title} className="card-wrapper">
        <div className="title-wrapper flex-align-center">
          <span className="icon">{membership.icon}</span>
          <h4>{membership.title}</h4>
        </div>
        <ul>
          {membership.benefits.map((benefit) => (
            <li key={benefit} className="flex-align-center">
              <span className="icon flex-align-center">
                <CheckCircleIcon />
              </span>
              {benefits[benefit]}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
const Section3 = () => (
  <section className="section3">
    <h3 className="section-title">Membership Benefits</h3>
    <Section3Mobile />
  </section>
);

const Section4Mobile = () => (
  <div className="membership-fees-mobile">
    {membershipFees.map((fee) => (
      <div key={fee.type} className="type-wrapper">
        <p>{fee.type}</p>
        <div className="fee-explained ">
          <div className="explain-item ">
            <h5>GSF</h5>
            <strong>{fee.GSF}</strong>
          </div>
          <div className="explain-item">
            <h5>LF*</h5>
            <strong>{fee.LF}</strong>
          </div>
          <div className="explain-item">
            <h5>Total</h5>
            <strong>{fee.total}</strong>
          </div>
        </div>
        <hr />
      </div>
    ))}
    <p className="disclamer">
      * Only needed if you are not already a Linux Foundation Member
    </p>
  </div>
);

const Section4 = () => (
  <section className="section4">
    <h3 className="section-title">Membership Fees</h3>
    <Section4Mobile />
  </section>
);

const Section5 = () => (
  <section className="section5">
    <div className="illustration-wrapper">
      <ApplyIllustration />
    </div>
    <h3 className="section-title">Applying For Membership</h3>
    <p>
      There are no minimum requirements for entry at the General or Contributor
      level. However, at the Steering level, we insist that every member
      organisation have a public commitment to sustainability or examples of
      leadership in green software. More information can be found in our GSF
      Steering Membership Policy.
    </p>
    <p>To start the application process, please fill out this form.</p>
    <Button color="accent2" edgeColor="accent2-dark">
      APPLY TO JOIN GSF
    </Button>
    <br />
    <br />
    <p>
      If you would like to arrange a meeting to discuss more, we still ask that
      you please fill out our{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://share.hsforms.com/1NNvkCLgfS4GIUJ0XPH93iw4tvhy"
      >
        application form
      </a>
      , and we will get back to you to arrange a time.
    </p>
  </section>
);

const JoinUsPage = () => {
  return (
    <Layout pageName="join-us">
      <PageTitle suptitle="applying for">Membership</PageTitle>
      <Disclaimer />
      <Section1 />
      <hr />
      <Section2 />
      <hr />
      <Section3 />
      <hr />
      <Section4 />
      <Section5 />
    </Layout>
  );
};

export default JoinUsPage;
