import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PersonBlob from "../components/person-blob";

// Assets
import HeroIllustration from "../assets/illustrations/team-hero.inline.svg";

// Styles
import "../styles/pages/team.scss";

const Section1 = ({ steeringCommittee }) => (
  <section className="section1">
    <div className="content-wrapper">
      <HeroIllustration />
      <div className="content">
        <h6 className="green-uppercase-title">STEERING COMMITTEE</h6>
        <p>
          The steering committee is made up of primary and alternative
          representatives from each of our steering member organizations. They
          decide how the money is spent, review the outputs from the working
          groups before publication and collaborate on strategy to help the GSF
          meet its mission.
        </p>
      </div>
    </div>
    <div className="members-wrapper">
      {steeringCommittee.map((person) => (
        <PersonBlob key={person.fullName} person={person} />
      ))}
    </div>
  </section>
);

const Section2 = ({ administrativeTeam }) => (
  <section className="section2">
    <h6 className="green-uppercase-title">ADMINISTRATIVE TEAM</h6>
    <div className="members-wrapper">
      {administrativeTeam.map((person) => (
        <PersonBlob key={person.fullName} person={person} />
      ))}
    </div>
  </section>
);

const TeamPage = ({
  data: {
    datoCmsTeamBoard: { steeringCommittee, administrativeTeam },
  },
}) => {
  return (
    <Layout pageName="team">
      <PageTitle>Board / Team</PageTitle>
      <Section1 steeringCommittee={steeringCommittee} />
      <Section2 administrativeTeam={administrativeTeam} />
    </Layout>
  );
};

export const query = graphql`
  query TeamPageQuery {
    datoCmsTeamBoard {
      steeringCommittee {
        fullName
        companyWebsite
        company
        twitterUsername
        linkedinUsername
        role
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, imgixParams: { sat: -100 })
        }
      }
      administrativeTeam {
        fullName
        companyWebsite
        company
        twitterUsername
        linkedinUsername
        role
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, imgixParams: { sat: -100 })
        }
      }
    }
  }
`;

export default TeamPage;
