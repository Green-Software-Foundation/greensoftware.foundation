import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../../components/layout";
import ChairsSection from "../../components/chairs-section";
import MembersSection from "../../components/members-section";

// Styles
import "../../styles/pages/single-project.scss";

const HeroSection = ({ illustration, title, workingGroup }) => (
  <section className="hero-section">
    <div className="illustration-wrapper">
      <img src={illustration} alt={title} />
    </div>
    <h1>{title}</h1>
    <p>
      By:{" "}
      <Link to={`/working-groups/${workingGroup.slug}`}>
        {workingGroup.title} Working Group
      </Link>
    </p>
  </section>
);

const SingleProjectTemplate = ({
  data: {
    datoCmsProject: project,
    chairsData: { nodes: chairs },
    membersData: { nodes: members },
    participantData: { nodes: participants },
  },
}) => {
  return (
    <Layout pageName="single-project" seo={{ meta: project.seoMetaTags }}>
      <HeroSection
        illustration={project.illustration.url}
        title={project.title}
        workingGroup={project.workingGroup}
      />
      <section className="short-description">
        <p>{project.shortDescription}</p>
      </section>
      {Boolean(chairs.length) && <ChairsSection chairs={chairs} />}
      {Boolean(members.length) && (
        <MembersSection members={[...members, ...participants]} />
      )}
      {project.info.map((infoItem) => (
        <section key={infoItem.title} className="info-item">
          <h6 className="green-uppercase-title">{infoItem.title}</h6>
          <StructuredText data={infoItem.content} />
        </section>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query SingleProjectTemplateQuery($id: String) {
    datoCmsProject(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      slug
      title
      illustration {
        url
      }
      workingGroup {
        title
        slug
      }
      shortDescription

      info {
        title
        content {
          value
        }
      }
    }
    chairsData: allDatoCmsMember(
      filter: { chairProjects: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        fullName
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "150px", fm: "jpg" }
          )
        }
        companyWebsite
        company
        role
        socialMediaLink {
          platform
          link
        }
      }
    }
    membersData: allDatoCmsMember(
      filter: { memberProjects: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        fullName
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "150px", fm: "jpg" }
          )
        }
        companyName: company
        role
        socialMediaLink {
          link
        }
      }
    }
    participantData: allDatoCmsParticipant(
      filter: { projectsInvolvedIn: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        fullName
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "100px", fm: "jpg" }
          )
        }
        companyName
        socialMediaLink
      }
    }
  }
`;
export default SingleProjectTemplate;
