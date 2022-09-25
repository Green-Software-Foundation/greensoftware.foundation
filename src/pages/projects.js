import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Paginator from "../components/paginator";

// Assets
import Logo from "../assets/logo-sign-default.svg";

// Styles
import "../styles/templates/projects-list.scss";

const ProjectCard = ({ project }) => (
  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card-wrapper">
    <div className="image-wrapper flex-center-center">
      <div className="pattern"></div>
      <img src={project.logo ? project.logo.url : Logo} alt={project.name} />
    </div>
    <div className="content-wrapper">
      <div>
        <h2>{project.name}</h2>
        {/* <small>By {project.workingGroup.title} Working Group</small> */}
        <p>{project.shortDescription}</p>
      </div>
    </div>
  </a>
);

const ProjectsPage = ({
  data: {
    allDatoCmsProjectV2: { nodes: projects },
  },
}) => {
  console.log(projects);
  return (
    <Layout
      className="container"
      pageName="projects"
      seo={{ title: "Projects" }}
    >
      <PageTitle>Projects </PageTitle>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

    </Layout>
  );
};

export const query = graphql`
  query  {
    allDatoCmsProjectV2(sort: {fields: name, order: DESC}) {
      nodes {
        id
        name
        url
        logo {
          url
        }
        shortDescription
      }
  }
  }
`;

export default ProjectsPage;
