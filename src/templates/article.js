import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PersonBlob from "../components/person-blob";
import NewsletterForm from "../components/newsletter-form";

// Styles
import "../styles/templates/single-article.scss";

const SingleArticleTemplate = ({ data: { datoCmsArticle: article } }) => {
  return (
    <Layout pageName="single-article" seo={{ meta: article.seoMetaTags }}>
      <PageTitle>{article.title}</PageTitle>
      <div className="content-wrapper">
        <div className="teaser-text">
          <small>
            Posted on {article.date} by {article.author.fullName}
          </small>
          <p>{article.teaserText}</p>
        </div>
        <div className="main-image">
          <Zoom>
            <GatsbyImage
              className="article-image"
              image={getImage(article.mainImage)}
              alt={article.title}
            />
          </Zoom>
        </div>
        <div className="content">
          <StructuredText
            data={article.content}
            renderLinkToRecord={({ record, children, transformedMeta }) => {
              switch (record.__typename) {
                case "DatoCmsArticle":
                  return (
                    <Link {...transformedMeta} to={`/articles/${record.slug}`}>
                      {children}
                    </Link>
                  );
                case "DatoCmsProject":
                  return (
                    <Link {...transformedMeta} to={`/projects/${record.slug}`}>
                      {children}
                    </Link>
                  );
                case "DatoCmsWorkingGroup":
                  return (
                    <Link
                      {...transformedMeta}
                      to={`/working-groups/${record.slug}`}
                    >
                      {children}
                    </Link>
                  );
                default:
                  return null;
              }
            }}
            renderBlock={({ record }) => {
              if (record.__typename === "DatoCmsArticleContentImage") {
                return (
                  <div className="article-image-wrapper">
                    <Zoom>
                      <GatsbyImage
                        className="article-image"
                        image={getImage(record.image)}
                        alt={record.image.alt}
                      />
                    </Zoom>
                    {record.image.title && (
                      <small>
                        <em>{record.image.title}</em>
                      </small>
                    )}
                  </div>
                );
              } else if (record.__typename === "DatoCmsArticleContentTable") {
                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: record.tableNode.childMarkdownRemark.html,
                    }}
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
          <NewsletterForm
            placeholder="Sign up to our newsletter..."
            buttoncolor="gray-lightest-2"
            buttonEdgeColor="gray-dark"
            buttonTextColor="black"
            hasDarkBg
          />
        </div>
        <hr />
        <div className="author-wrapper">
          <PersonBlob person={article.author} />
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
        gatsbyImageData(
          placeholder: TRACED_SVG
          imgixParams: { w: "1920", auto: "compress" }
        )
      }
      content {
        value
        links {
          __typename
          ... on DatoCmsArticle {
            id: originalId
            slug
          }
          ... on DatoCmsProject {
            id: originalId
            slug
          }
          ... on DatoCmsWorkingGroup {
            id: originalId
            slug
          }
        }
        blocks {
          __typename
          ... on DatoCmsArticleContentImage {
            id: originalId
            image {
              title
              alt
              gatsbyImageData(
                placeholder: TRACED_SVG
                imgixParams: { w: "1920", auto: "compress" }
              )
            }
          }
          ... on DatoCmsArticleContentTable {
            id: originalId
            tableNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
      author {
        company: companyName
        companyWebsite
        fullName
        role
        photo {
          gatsbyImageData(
            placeholder: TRACED_SVG
            imgixParams: { sat: -100, w: "130", auto: "compress", fm: "jpg" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
      publishedOriginUrl
      originBlogName
    }
  }
`;

export default SingleArticleTemplate;
