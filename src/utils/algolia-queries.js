const StructureToPlain = require("datocms-structured-text-to-plain-text");

const pageQuery = `{
  pages: allDatoCmsArticle {
    edges {
      node {
          id
          slug
          title
          teaserText
          summary
          mainImage {
            url
          }
          content{
              value
          }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, mainImage, content, ...rest } }) {
  return {
    objectID: id,
    image: mainImage.url,
    content: StructureToPlain.render(content),
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: "Articles",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
