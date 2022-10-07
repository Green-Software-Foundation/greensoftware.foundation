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
        <h2 className="green-uppercase-title">STEERING COMMITTEE</h2>
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

const MembersSection = ({ team, title, description }) => (
  <section className="members-section">
    <h2 className="green-uppercase-title">{title}</h2>
    {description && <p>{description}</p>}
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
    <Layout
      className="container"
      pageName="team"
      seo={{ title: "Board / Team" }}
    >
      <PageTitle>Board / Team</PageTitle>
      <Section1 steeringCommittee={steeringCommittee} />
      <MembersSection team={administrativeTeam} title="Operations team" />
      <MembersSection
        team={generalTeam}
        title="Organisational Leads"
        description="If you are a member of one of our member organizations and would like to understand how to get involved in the Foundation, please get in touch with your representative below."
      />
    </Layout>
  );
};

export const query = graphql`
  query TeamPageQuery {
    steeringCommittee: allDatoCmsMember(
      filter: { isSteeringCommitteeMember: { eq: true } }
      sort: { order: ASC, fields: fullName }
    ) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            
            imgixParams: { sat: -100, w: "130", fm: "jpg", auto: "compress" }
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
      sort: { order: ASC, fields: fullName }
    ) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            
            imgixParams: { sat: -100, w: "130", fm: "jpg", auto: "compress" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
    }

    generalTeam: allDatoCmsMember(
      filter: { isGeneralMember: { eq: true } }
      sort: { order: ASC, fields: fullName }
    ) {
      nodes {
        fullName
        role
        company
        companyWebsite
        photo {
          gatsbyImageData(
            
            imgixParams: { sat: -100, w: "130", fm: "jpg", auto: "compress" }
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
