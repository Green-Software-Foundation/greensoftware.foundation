const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allDatoCmsArticle(sort: { fields: date, order: DESC }, limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
        allDatoCmsProject(
          sort: { fields: meta___createdAt, order: DESC }
          limit: 1000
        ) {
          edges {
            node {
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

  // Create Project-list pages
  const projects = result.data.allDatoCmsProject.edges;
  const projectsPerPage = 10;
  const numPagesProjects = Math.ceil(projects.length / projectsPerPage);
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
};
