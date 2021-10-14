import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import ChairsSection from "../../components/chairs-section";
import MembersSection from "../../components/members-section";

// Styles
import "../../styles/pages/working-groups.scss";

const SingleWorkingGroupTemplate = ({
  data: { datoCmsWorkingGroup: workingGroup },
}) => {
  console.log(workingGroup);
  return (
    <Layout pageName="single-working-group">
      <PageTitle suptitle={workingGroup.title}>Working Group</PageTitle>
      <section>
        <h6 className="green-uppercase-title">Scope</h6>
        <div
          dangerouslySetInnerHTML={{
            __html: workingGroup.scopeNode.childMarkdownRemark.html,
          }}
        />
      </section>
      <ChairsSection chairs={workingGroup.chairs} />
      <MembersSection members={workingGroup.members} />
      {Boolean(workingGroup.projects.length) ?? (
        <section className="projects-section">
          <h6 className="green-uppercase-title">PROJECTS</h6>
          <ul>
            {workingGroup.projects.map((project) => (
              <li key={project.id}>
                <Link to={`/projects/${project.slug}`}>
                  <h4>{project.title}</h4>
                  <p>{project.shortDescription}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {workingGroup.info.map((infoItem) => (
        <section key={infoItem.title} className="info-item">
          <h6 className="green-uppercase-title">{infoItem.title}</h6>
          <StructuredText data={infoItem.content} />
        </section>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query SingleWorkingGroupTemplateQuery($id: String) {
    datoCmsWorkingGroup(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      slug
      title
      scopeNode {
        childMarkdownRemark {
          html
        }
      }
      chairs {
        company
        companyWebsite
        fullName
        linkedinUsername
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, imgixParams: { sat: -100 })
        }
        twitterUsername
        role
      }
      members {
        fullName
        socialLink
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, imgixParams: { sat: -100 })
        }
      }
      projects {
        id
        slug
        title
        shortDescription
      }
      info {
        title
        content {
          value
        }
      }
    }
  }
`;
export default SingleWorkingGroupTemplate;
