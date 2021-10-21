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

const NoTextSection = ({ team, title }) => (
  <section className="section2">
    <h6 className="green-uppercase-title">{title}</h6>
    <div className="members-wrapper">
      {team.map((person) => (
        <PersonBlob key={person.fullName} person={person} />
      ))}
    </div>
  </section>
);

const TeamPage = ({
  data: {
    steeringCommittee: { nodes: steeringCommittee },
    administrativeTeam: { nodes: administrativeTeam },
    generalTeam: { nodes: generalTeam },
  },
}) => {
  return (
    <Layout pageName="team" seo={{ title: "Board / Team" }}>
      <PageTitle>Board / Team</PageTitle>
      <Section1 steeringCommittee={steeringCommittee} />
      <NoTextSection team={administrativeTeam} title="ADMINISTRATIVE TEAM" />
      <NoTextSection team={generalTeam} title="General TEAM" />
    </Layout>
  );
};

export const query = graphql`
  query TeamPageQuery {
    steeringCommittee: allDatoCmsMember(
      filter: { isSteeringCommitteeMember: { eq: true } }
    ) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "150px", fm: "jpg" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
    }

    administrativeTeam: allDatoCmsMember(
      filter: { isAdministrativeTeamMember: { eq: true } }
    ) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "150px", fm: "jpg" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
    }

    generalTeam: allDatoCmsMember(filter: { isGeneralMember: { eq: true } }) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "150px", fm: "jpg" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
    }
  }
`;

export default TeamPage;
