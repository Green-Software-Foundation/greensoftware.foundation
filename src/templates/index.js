import * as React from "react";
import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

const ArticleCard = ({ article }) => (
  <div className="article-card-wrapper"></div>
);

const ArticlesPage = () => {
  return (
    <Layout pageName="articles">
      <PageTitle>articles </PageTitle>
    </Layout>
  );
};

export const query = graphql`
  query ArticlesPageQuery($skip: Int!, $limit: Int!) {
    allDatoCmsArticle(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        summary
        author {
          fullName
          photo {
            gatsbyImageData
          }
        }
        date
        mainImage {
          gatsbyImageData
        }
      }
    }
  }
`;

export default ArticlesPage;
