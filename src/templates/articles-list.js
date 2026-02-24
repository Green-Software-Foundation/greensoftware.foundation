import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Paginator from "../components/paginator";
import NetlifyImage from "../components/netlify-image";

// Styles
import "../styles/templates/articles-list.scss";

const ArticleCard = ({ article }) => {
  const fm = article.frontmatter;
  return (
    <Link to={`/articles/${article.fields.slug}`} className="article-card-wrapper">
      <div className="image-wrapper">
        {fm.mainImage?.publicURL && (
          <NetlifyImage
            className="image"
            src={fm.mainImage.publicURL}
            width={750}
            alt={fm.title}
          />
        )}
      </div>
      <div className="content-wrapper">
        <div>
          <small>{fm.date}</small>
          <h2>{fm.title}</h2>
          <p>{fm.summary}</p>
        </div>
      </div>
    </Link>
  );
};

const ArticlesPage = ({
  data: {
    allMarkdownRemark: { nodes: articles },
  },
  pageContext: { currentPage, numPages },
}) => {
  return (
    <Layout
      className="container"
      pageName="articles"
      seo={{ title: "Articles" }}
    >
      <PageTitle>articles </PageTitle>
      <div className="articles-wrapper">
        {articles.map((article) => (
          <ArticleCard key={article.frontmatter.title} article={article} />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        numPages={numPages}
        path="articles"
      />
    </Layout>
  );
};

export const query = graphql`
  query ArticlesPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fields: { collection: { eq: "articles" }, lang: { eq: "en" } }
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        frontmatter {
          title
          summary
          date(formatString: "MMMM Do, YYYY")
          mainImage { publicURL }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default ArticlesPage;
