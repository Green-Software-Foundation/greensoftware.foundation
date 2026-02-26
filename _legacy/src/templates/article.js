import * as React from "react";
import { graphql, Link } from "gatsby";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PersonBlob from "../components/person-blob";
import NewsletterForm from "../components/newsletter-form";
import NetlifyImage from "../components/netlify-image";

// Styles
import "../styles/templates/single-article.scss";

// Utils
import { getNativeNameByCode } from "../utils/language-locale";

const SingleArticleTemplate = ({
  data: { article, translations },
  pageContext: { lang, slug },
}) => {
  const fm = article.frontmatter;
  const isTranslation = lang !== "en";
  const otherTranslations = translations.nodes.filter(
    (t) => t.fields.lang !== lang
  );

  return (
    <Layout
      className="container"
      pageName="single-article"
      seo={{ title: fm.title, description: fm.teaserText }}
    >
      <PageTitle>{fm.title}</PageTitle>
      <div className="content-wrapper">
        {otherTranslations.length > 0 && (
          <div>
            <p>Read this article in </p>
            <ul>
              {otherTranslations.map((t) => {
                const tLang = t.fields.lang;
                const tSlug = t.fields.slug;
                const tPath =
                  tLang === "en"
                    ? `/articles/${tSlug}`
                    : `/${tLang}/articles/${tSlug}`;
                return (
                  <li key={tLang}>
                    <Link to={tPath}>
                      {getNativeNameByCode(tLang)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="teaser-text">
          <small>Posted on {fm.date}</small>
          <p>{fm.teaserText}</p>
        </div>
        {fm.mainImage?.publicURL && (
          <div className="main-image">
            <Zoom>
              <NetlifyImage
                className="article-image"
                src={fm.mainImage.publicURL}
                width={1920}
                alt={fm.title}
                style={{ width: "100%" }}
              />
            </Zoom>
          </div>
        )}
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
          {fm.originBlogName && fm.publishedOriginUrl ? (
            <p>
              Originally published in the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={fm.publishedOriginUrl}
              >
                {fm.originBlogName}
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
            position={fm.title}
            placeholder="Sign up to our newsletter..."
            buttoncolor="gray-lightest-2"
            buttonEdgeColor="gray-dark"
            buttonTextColor="black"
            hasDarkBg
          />
        </div>
        <hr />
        <div className="authors-wrapper">
          {(fm.authors || []).map((author) => (
            <PersonBlob key={author.fullName} person={author} />
          ))}
        </div>
        {fm.translators && fm.translators.length > 0 && (
          <>
            <hr />
            <h2 className="green-uppercase-title">Translators / Editors</h2>
          </>
        )}
        <div className="authors-wrapper">
          {(fm.translators || []).map((translator) => (
            <PersonBlob key={translator.fullName} person={translator} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SingleArticleTemplateQuery($id: String!, $slug: String!) {
    article: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        teaserText
        mainImage { publicURL }
        originBlogName
        publishedOriginUrl
        authors {
          fullName
          role
          company
          companyWebsite
          photo { publicURL }
          socialMedia {
            platform
            link
          }
        }
        translators {
          fullName
          role
          company
          companyWebsite
          photo { publicURL }
          socialMedia {
            platform
            link
          }
        }
      }
    }
    translations: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "articles" }, slug: { eq: $slug } }
      }
    ) {
      nodes {
        fields {
          lang
          slug
        }
      }
    }
  }
`;

export default SingleArticleTemplate;
