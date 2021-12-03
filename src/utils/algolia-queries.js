const StructureToPlain = require("datocms-structured-text-to-plain-text");

const pageQuery = `
  {
    articles: allDatoCmsArticle {
      edges {
        node {
          id
          slug
          title
          teaserText
          summary
          date
          mainImage {
            url
          }
          content {
            value
          }
        }
      }
    }
    projects: allDatoCmsProject {
      edges {
        node {
          id
          slug
          title
          shortDescription
          workingGroup {
            title
          }
          illustration {
            url
          }
          info {
            title
            content {
              value
            }
          }
        }
      }
    }
  }
`;

function articleToAlgoliaRecord({ node: { id, mainImage, content, ...rest } }) {
  return {
    objectID: id,
    image: mainImage.url,
    content: StructureToPlain.render(content),
    ...rest,
  };
}

function projectToAlgoliaRecord({
  node: { id, illustration, info, workingGroup, ...rest },
}) {
  let infoText = ``;
  for (const singleInfo of info) {
    infoText += `${singleInfo.title}
        ${StructureToPlain.render(singleInfo.content)}
      `;
  }
  return {
    objectID: id,
    image: illustration.url,
    workingGroup: `${workingGroup.title} Working Group`,
    content: infoText,
    ...rest,
  };
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.articles.edges.map(articleToAlgoliaRecord),
    indexName: "Articles",
    settings: { attributesToSnippet: [`content:20`] },
  },
  {
    query: pageQuery,
    transformer: ({ data }) => data.projects.edges.map(projectToAlgoliaRecord),
    indexName: "Projects",
    settings: { attributesToSnippet: [`content:20`] },
  },
];

module.exports = queries;
