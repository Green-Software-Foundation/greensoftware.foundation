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
          authors {
            fullName
          }
        }
      }
    }

    members: allDatoCmsMember {
      edges {
        node {
          fullName
          chairProjects {
            id
          }
          chairWorkingGroups {
            id
          }
          memberProjects {
            id
          }
          memberWorkingGroups {
            id
          }
        }
      }
    }
  }
`;

function articleToAlgoliaRecord({
  node: { id, mainImage, content, authors, ...rest },
}) {
  return {
    objectID: id,
    image: mainImage.url,
    content: StructureToPlain.render(content),
    authors: authors.flatMap((author) => [author.fullName]),
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.articles.edges.map(articleToAlgoliaRecord),
    indexName: "Articles",
    settings: { attributesToSnippet: [`content:20`] },
    mergeSettings: true,
  },
];

module.exports = queries;
