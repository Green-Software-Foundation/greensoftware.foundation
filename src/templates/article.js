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

// Utils
import { getLocaleNativeName } from "../utils/language-locale";

const SingleArticleTemplate = ({ data: { article, translatedArticles } }) => {
  article.seoMetaTags.tags[3].attributes.content = article.teaserText;
  article.seoMetaTags.tags[4].attributes.content = article.teaserText;
  article.seoMetaTags.tags[5].attributes.content = article.teaserText;

  if (article.mainImage?.url) {
    const imageUrl = article.mainImage.url;
    article.seoMetaTags.tags.push(
      {
        tagName: "meta",
        attributes: {
          name: "og:image",
          content: imageUrl,
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "twitter:image",
          content: imageUrl,
        },
      }
    );
  }

  return (
    <Layout
      className="container"
      pageName="single-article"
      seo={{ meta: article.seoMetaTags }}
    >
      <PageTitle>{article.title}</PageTitle>
      <div className="content-wrapper">
        {translatedArticles.nodes.length ? (
          <div>
            <p>Read this article in </p>
            <ul>
              {article.isATranslatedArticle && (
                <li>
                  <Link to={`/articles/${article.originalArticle.slug}`}>
                    English
                  </Link>
                </li>
              )}
              {translatedArticles.nodes.map((translatedArticle, i) =>
                translatedArticle.id === article.id ? (
                  <React.Fragment key={translatedArticle.id}></React.Fragment>
                ) : (
                  <li key={translatedArticle.id}>
                    <Link to={`/articles/${translatedArticle.slug}`}>
                      {getLocaleNativeName(translatedArticle.language)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <></>
        )}
        <div className="teaser-text">
          <small>Posted on {article.date}</small>
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
              } else if (record.__typename === "DatoCmsArticleYoutubeVideo") {
                const youtubeUrl = record.videoUrl.url;
                const videoId = youtubeUrl.split("v=")[1];
                const ampersandPosition = videoId.indexOf("&");
                if (ampersandPosition !== -1) {
                  videoId = videoId.substring(0, ampersandPosition);
                }

                return (
                  <div className="article-image-wrapper">
                    <iframe
                      width="100%"
                      height="480"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={record.videoUrl.title}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
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
          {article.originBlogName && article.publishedOriginUrl ? (
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
          ) : (
            <p>
              This article is licenced under{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons (CC BY 4.0)
              </a>
            </p>
          )}
        </div>
        <div className="newsletter-wrapper">
          <div className="pattern"></div>
          <h2>Stay updated with our articles updates</h2>
          <NewsletterForm
            position={article.title}
            placeholder="Sign up to our newsletter..."
            buttoncolor="gray-lightest-2"
            buttonEdgeColor="gray-dark"
            buttonTextColor="black"
            hasDarkBg
          />
        </div>
        <hr />
        <div className="authors-wrapper">
          {article.authors.map((author) => (
            <PersonBlob key={author.id} person={author} />
          ))}
        </div>
        {!!article.translators.length && (
          <>
            <hr />
            <h2 className="green-uppercase-title">Translators / Editors</h2>
          </>
        )}

        <div className="authors-wrapper">
          {article.translators.map((translator) => (
            <PersonBlob key={translator.id} person={translator} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SingleArticleTemplateQuery($id: String, $originalArticle: String) {
    article: datoCmsArticle(id: { eq: $id }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      id
      slug
      title
      teaserText
      date(formatString: "MMMM Do, YYYY")
      mainImage {
        gatsbyImageData(imgixParams: { w: "1920", auto: "compress" })
        url
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
              gatsbyImageData(imgixParams: { w: "1920", auto: "compress" })
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
          ... on DatoCmsArticleYoutubeVideo {
            id: originalId
            videoUrl {
              url
              title
              thumbnailUrl
            }
          }
        }
      }
      authors {
        id
        company: companyName
        companyWebsite
        fullName
        role
        photo {
          gatsbyImageData(
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
      isATranslatedArticle
      originalArticle {
        id
        slug
      }
      translators {
        id
        company: companyName
        companyWebsite
        fullName
        role
        photo {
          gatsbyImageData(
            imgixParams: { sat: -100, w: "130", auto: "compress", fm: "jpg" }
          )
        }
        socialMediaLink {
          link
          platform
        }
      }
    }
    translatedArticles: allDatoCmsArticle(
      filter: { originalArticle: { id: { eq: $originalArticle } } }
    ) {
      nodes {
        id
        language
        slug
      }
    }
  }
`;

export default SingleArticleTemplate;
