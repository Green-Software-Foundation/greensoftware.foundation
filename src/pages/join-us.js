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
      "offers you a seat on the steering committee directing the Foundations strategic focus and budget allocation as well as a seat in the communications team to coordinate public relations efforts with the Foundation and other steering members.",
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
  vote_S: "A seat on the steering committee",
  comms_T: "A seat on the communications team",
  listed: "Listed on the Foundations homepage",
  chair: "Chair working groups and projects",
  participate: "Participate in working groups and projects",
  create: "Create new working groups",
  vote_W: "Vote in working groups",
  premium: "Employee engagement & onboarding",
};

const memberships = [
  {
    id: "steering",
    title: "Steering",
    benefits: [
      "vote_S",
      "chair",
      "participate",
      "create",
      "vote_W",
      "premium",
      "comms_T",
      "listed",
    ],
    icon: <SteeringIcon />,
  },
  {
    id: "general",
    title: "General",
    benefits: ["chair", "participate", "create", "vote_W", "listed"],
    icon: <GeneralIcon />,
  },
  {
    id: "contributer",
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

// Custom styles

let membershipGridTemplate = `
"blank steering-icon general-icon contributer-icon"
"title title-s title-g title-c"
"hr-0 hr-0 hr-0 hr-0"
`;

Object.keys(benefits).forEach((benefit, i) => {
  membershipGridTemplate += `"${benefit} check-s-${benefit} check-g-${benefit} check-c-${benefit}"\n`;
  membershipGridTemplate += `"hr-${i + 1} hr-${i + 1} hr-${i + 1} hr-${
    i + 1
  }"\n`;
});

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
        <Link to="/working-groups/standards">Standards</Link>,{" "}
        <Link to="/working-groups/innovation">Innovation</Link>,{" "}
        <Link to="/working-groups/trademark">Trademark</Link> and{" "}
        <Link to="/working-groups/community">Community</Link> Working Groups as
        well as our <Link to="/projects">list of Projects</Link>.
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
      <div key={membership.id} className="card-wrapper">
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
    <h3>Membership Benefits</h3>
    <Section3Mobile />
    <div
      style={{ gridTemplateAreas: membershipGridTemplate }}
      className="membership-benefits"
    >
      <h4 style={{ gridArea: `title`, textAlign: "left" }}>Activity</h4>
      {memberships.map((membership) => (
        <React.Fragment key={membership.id}>
          <span style={{ gridArea: `${membership.id}-icon` }} className="icon">
            {membership.icon}
          </span>
          <h4 style={{ gridArea: `title-${membership.id[0]}` }}>
            {membership.title}
          </h4>
          {membership.benefits.map((benefit) => (
            <span
              style={{ gridArea: `check-${membership.id[0]}-${benefit}` }}
              className="check-icon flex-center-center"
            >
              <CheckCircleIcon />
            </span>
          ))}
        </React.Fragment>
      ))}
      {Object.keys(benefits).map((key, i) => (
        <React.Fragment key={key}>
          <hr style={{ gridArea: `hr-${i}` }} />
          <p style={{ gridArea: key }} key={key}>
            {benefits[key]}
          </p>
        </React.Fragment>
      ))}
    </div>
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
    <h3>Membership Fees</h3>
    <p className="main-description">
      Since we are a part of the Linux Foundation, membership of the GSF
      requires that you are at least a silver member of the Linux Foundation. If
      you are already a member of the Linux Foundation, you can ignore the Linux
      Foundation fees in the table below. All our fees are yearly.
    </p>
    <Section4Mobile />
    <div className="membership-fees">
      <h4>Membership type</h4>
      <h4 style={{ textAlign: "center" }}>GSF</h4>
      <h4 style={{ textAlign: "center" }}>LF*</h4>
      <h4 style={{ textAlign: "center" }}>Total</h4>
      <hr style={{ gridArea: "2/1/3/5" }} />
      {membershipFees.map((fee, i) => (
        <React.Fragment key={fee.type}>
          <p>{fee.type}</p>
          <strong>{fee.GSF}</strong>
          <strong>{fee.LF}</strong>
          <strong>{fee.total}</strong>
        </React.Fragment>
      ))}
    </div>
    <hr />
    <small>
      * Only needed if you are not already a Linux Foundation Member
    </small>
  </section>
);

const Section5 = () => (
  <section className="section5">
    <div className="illustration-wrapper">
      <ApplyIllustration />
    </div>
    <div className="content-wrapper">
      <h3>Applying For Membership</h3>
      <p>
        There are no minimum requirements for entry at the General or
        Contributor level. However, at the Steering level, we insist that every
        member organisation have a public commitment to sustainability or
        examples of leadership in green software. More information can be found
        in our{" "}
        <Link to="/policy/steering-membership">
          GSF Steering Membership Policy
        </Link>
        .
      </p>
      <p>To start the application process, please fill out this form.</p>
      <Button
        href="https://enrollment.lfx.linuxfoundation.org/?project=green-software-foundation-fund"
        color="primary"
        edgeColor="primary-dark"
      >
        APPLY TO JOIN GSF
      </Button>
      <br />
      <br />
      <p>
        If you would like to arrange a meeting to discuss more, we still ask
        that you please fill out our application form, and we will get back to
        you to arrange a time.
      </p>
    </div>
  </section>
);

const JoinUsPage = () => {
  return (
    <Layout pageName="join-us" seo={{ title: "Join us" }}>
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
