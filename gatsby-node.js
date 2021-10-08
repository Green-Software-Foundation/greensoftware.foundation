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
              slug
            }
          }
        }
      }
    `
  );

  console.log(result);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create Article-list pages
  const article = result.data.allDatoCmsArticle.edges;
  const articlesPerPage = 10;
  const numPages = Math.ceil(article.length / articlesPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/articles-list-template.js"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
