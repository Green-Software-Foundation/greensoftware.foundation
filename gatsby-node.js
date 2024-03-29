const path = require("path");

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions
  if (!page.path.includes('.html') && page.path !== '/') {
    createRedirect({ fromPath: `${page.path}`, toPath: replacePath(page.path), isPermanent: true })
  }
}

exports.createPages = async ({ graphql, actions, reporter, ...rest }) => {
  const { createPage } = actions;


  const result = await graphql(
    `
      {
        allDatoCmsArticle(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
              slug
              isATranslatedArticle
              originalArticle {
                id
              }
            }
          }
        }

        allDatoCmsManifesto {
          edges {
            node {
              id
              slug
              language
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
  const originalArticles = result.data.allDatoCmsArticle.edges.filter(
    (article) => !article.isATranslatedArticle
  );
  const articlesPerPage = 10;
  const numPagesArticles = Math.ceil(originalArticles.length / articlesPerPage);

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
        originalArticle: article.originalArticle
          ? article.originalArticle?.id
          : article.id,
      },
    });
  });


  // allDatoCmsProject(sort: { fields: meta___createdAt, order: DESC }) {
  //   edges {
  //     node {
  //       id
  //       slug
  //     }
  //   }
  // }

  // allDatoCmsWorkingGroup(
  //   sort: { fields: meta___createdAt, order: DESC }
  // ) {
  //   edges {
  //     node {
  //       id
  //       slug
  //     }
  //   }
  // }
  // Projects
  /*
const projects = result.data.allDatoCmsProject.edges;
const projectsPerPage = 9;
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

// Create Projects pages
projects.forEach(({ node: project }) => {
  createPage({
    path: `/projects/${project.slug}`,
    component: path.resolve("./src/templates/project.js"),
    context: {
      id: project.id,
    },
  });
});
*/

  // Manifesto Translation pages
  const manifestoPages = result.data.allDatoCmsManifesto.edges;

  manifestoPages.forEach(({ node: manifestoPage }) => {
    createPage({
      path: `/${manifestoPage.slug}`,
      component: path.resolve("./src/templates/manifesto.js"),
      context: {
        id: manifestoPage.id,
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
