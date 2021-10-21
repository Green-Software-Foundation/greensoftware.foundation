import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Paginator from "../components/paginator";

// Styles
import "../styles/templates/projects-list.scss";

const ProjectCard = ({ project }) => (
  <Link to={`/projects/${project.slug}`} className="project-card-wrapper">
    <div className="image-wrapper flex-center-center">
      <div className="pattern"></div>
      <img src={project.illustration.url} alt={project.title} />
    </div>
    <div className="content-wrapper">
      <div>
        <h4>{project.title}</h4>
        <small>By {project.workingGroup.title} Working Group</small>
        <p>{project.shortDescription}</p>
      </div>
    </div>
  </Link>
);

const ProjectsPage = ({
  data: {
    allDatoCmsProject: { nodes: projects },
  },
  pageContext: { currentPage, numPages },
}) => {
  console.log({ currentPage, numPages, projects });
  return (
    <Layout pageName="projects" seo={{ title: "Projects" }}>
      <PageTitle>projects </PageTitle>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        numPages={numPages}
        path="projects"
      />
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPageQuery($skip: Int!, $limit: Int!) {
    allDatoCmsProject(
      sort: { fields: meta___createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        shortDescription
        illustration {
          url
        }
        workingGroup {
          title
        }
      }
    }
  }
`;

export default ProjectsPage;
