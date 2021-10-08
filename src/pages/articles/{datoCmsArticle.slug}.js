import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import Layout from "../../components/layout";
import PageTitle from "../../components/page-title";
import PersonBlob from "../../components/person-blob";
import Button from "../../components/button";

// Assets
import ArrowLeft from "../../assets/icons/arrow-left.inline.svg";
import ArrowRight from "../../assets/icons/arrow-right.inline.svg";

// Styles
import "../../styles/pages/single-article.scss";

const SingleArticleTemplate = ({ data: { datoCmsArticle: article } }) => {
  return (
    <Layout pageName="single-article">
      <PageTitle>{article.title}</PageTitle>
      <div className="content-wrapper">
        <div className="teaser-text">
          <small>
            Posted on {article.date} by {article.author.fullName}
          </small>
          <p>{article.teaserText}</p>
        </div>
        <div className="main-image">
          <GatsbyImage
            className="article-image"
            image={getImage(article.mainImage)}
            alt={article.title}
          />
        </div>
        <div className="content">
          <StructuredText
            data={article.content}
            renderBlock={({ record }) => {
              if (record.__typename === "DatoCmsArticleContentImage") {
                return (
                  <GatsbyImage
                    className="article-image"
                    image={getImage(record.image)}
                    alt="Article Image"
                  />
                );
              }

              return (
                <>
                  <p>Don't know how to render a block!</p>
                  <pre>{JSON.stringify(record, null, 2)}</pre>
                </>
              );
            }}
          />
          {article.originBlogName && article.publishedOriginUrl && (
            <p>
              Originally published in the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={article.publishedOriginUrl}
              >
                {article.originBlogName}
              </a>
            </p>
          )}
        </div>
        <div className="newsletter-wrapper">
          <div className="pattern"></div>
          <h2>Stay updated with our articles updates</h2>
          <form className="newsletter-form">
            <input type="text" placeholder="Sign up to our newsletter..." />
            <Button
              type="submit"
              color="gray-lightest-2"
              edgeColor="gray-dark"
              textColor="black"
              fontWeight={600}
            >
              Sign up
            </Button>
          </form>
        </div>
        <hr />
        <div className="author-wrapper">
          <PersonBlob person={article.author} />
        </div>
        <hr />
        <div className="more-articles">
          {article.previousArticle && (
            <Link
              to={`/articles/${article.previousArticle.slug}`}
              className="more-article previous"
            >
              <span>Previous</span>
              <p>{article.previousArticle.title}</p>
              <span className="icon">
                <ArrowLeft />
              </span>
            </Link>
          )}
          {article.nextArticle && (
            <Link
              to={`/articles/${article.nextArticle.slug}`}
              className="more-article next"
            >
              <span>NEXT</span>
              <p>{article.nextArticle.title}</p>
              <span className="icon">
                <ArrowRight />
              </span>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SingleArticleTemplateQuery($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      slug
      title
      teaserText
      date(formatString: "MMMM Do, YYYY")
      mainImage {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsArticleContentImage {
            id: originalId
            image {
              gatsbyImageData(
                placeholder: TRACED_SVG
                imgixParams: { fm: "jpg" }
              )
            }
          }
        }
      }
      author {
        company: companyName
        companyWebsite
        fullName
        linkedinUsername
        role
        photo {
          gatsbyImageData(placeholder: TRACED_SVG, imgixParams: { sat: -100 })
        }
        twitterUsername
      }
      publishedOriginUrl
      originBlogName
      nextArticle {
        slug
        title
      }
      previousArticle {
        slug
        title
      }
    }
  }
`;

export default SingleArticleTemplate;
