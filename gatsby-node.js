const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allDatoCmsArticle(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
              slug
            }
          }
        }

        allDatoCmsProject(sort: { fields: meta___createdAt, order: DESC }) {
          edges {
            node {
              id
              slug
            }
          }
        }

        allDatoCmsWorkingGroup(
          sort: { fields: meta___createdAt, order: DESC }
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }

        allDatoCmsFlatPage {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running allDatoCmsArticle query.`);
    return;
  }

  // Articles
  const articles = result.data.allDatoCmsArticle.edges;
  const articlesPerPage = 10;
  const numPagesArticles = Math.ceil(articles.length / articlesPerPage);

  // Create Article-list pages
  Array.from({ length: numPagesArticles }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/articles-list.js"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numPagesArticles,
        currentPage: i + 1,
      },
    });
  });

  // Create Articles pages
  articles.forEach(({ node: article }) => {
    createPage({
      path: `/articles/${article.slug}`,
      component: path.resolve("./src/templates/article.js"),
      context: {
        id: article.id,
      },
    });
  });

  // Projects
  const projects = result.data.allDatoCmsProject.edges;
  const projectsPerPage = 10;
  const numPagesProjects = Math.ceil(projects.length / projectsPerPage);

  // Create Project-list pages
  Array.from({ length: numPagesProjects }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: path.resolve("./src/templates/projects-list.js"),
      context: {
        limit: projectsPerPage,
        skip: i * projectsPerPage,
        numPages: numPagesProjects,
        currentPage: i + 1,
      },
    });
  });

  // Create Articles pages
  projects.forEach(({ node: project }) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        id: project.id,
      },
    });
  });

  //Working groups
  const workingGroups = result.data.allDatoCmsWorkingGroup.edges;

  // Create Working groups pages
  workingGroups.forEach(({ node: workingGroup }) => {
    createPage({
      path: `/working-groups/${workingGroup.slug}`,
      component: path.resolve("./src/templates/working-group.js"),
      context: {
        id: workingGroup.id,
      },
    });
  });

  // Flat pages
  const flatPages = result.data.allDatoCmsFlatPage.edges;

  // Create Working groups pages
  flatPages.forEach(({ node: flatPage }) => {
    createPage({
      path: `/${flatPage.slug}`,
      component: path.resolve("./src/templates/flat-page.js"),
      context: {
        id: flatPage.id,
      },
    });
  });
};
