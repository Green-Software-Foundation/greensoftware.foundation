const pageQuery = `
  {
    articles: allMarkdownRemark(
      filter: {
        fields: {
          collection: {eq: "articles"}
          lang: {eq: "en"}
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            teaserText
            summary
            date
            mainImage { publicURL }
            authors {
              fullName
            }
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`;

function articleToAlgoliaRecord({
  node: { id, frontmatter, fields, excerpt },
}) {
  return {
    objectID: id,
    slug: fields.slug,
    image: frontmatter.mainImage?.publicURL,
    content: excerpt,
    authors: (frontmatter.authors || []).map((a) => a.fullName),
    title: frontmatter.title,
    teaserText: frontmatter.teaserText,
    summary: frontmatter.summary,
    date: frontmatter.date,
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
