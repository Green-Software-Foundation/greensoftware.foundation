import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import Paginator from "../components/paginator";

// Styles
import "../styles/templates/articles-list.scss";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.slug}`} className="article-card-wrapper">
      <div className="image-wrapper">
        <GatsbyImage
          className="image"
          image={getImage(article.mainImage)}
          alt={article.title}
        />
      </div>
      <div className="content-wrapper">
        <div>
          <small>{article.date}</small>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
        {/* <div className="author-wrapper flex-align-center ">
          <div className="photo-wrapper flex-center-center">
            <GatsbyImage
              className="photo"
              image={getImage(article.authors[0].photo)}
              alt={article.authors[0].fullName}
            />
          </div>
          <span>{article.authors[0].fullName}</span>
        </div> */}
      </div>
    </Link>
  );
};

const ArticlesPage = ({
  data: {
    allDatoCmsArticle: { nodes: articles },
  },
  pageContext: { currentPage, numPages },
}) => {
  return (
    <Layout pageName="articles" seo={{ title: "Articles" }}>
      <PageTitle>articles </PageTitle>
      <div className="articles-wrapper">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
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
    allDatoCmsArticle(
      sort: { fields: date, order: DESC }
      filter: { isATranslatedArticle: { ne: true } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        summary
        slug
        authors {
          fullName
          photo {
            gatsbyImageData(
              placeholder: TRACED_SVG
              width: 45
              imgixParams: { sat: -100, auto: "compress" }
            )
          }
        }
        date
        mainImage {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { w: "750", auto: "compress" }
          )
        }
      }
    }
  }
`;

export default ArticlesPage;
