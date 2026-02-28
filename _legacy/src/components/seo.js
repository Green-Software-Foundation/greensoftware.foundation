import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            titleSuffix
            twitterAccount
            ogImage
            siteUrl
          }
        }
      }
    `
  );

  const meta = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title || meta.title}
      titleTemplate={meta.titleSuffix ? `%s${meta.titleSuffix}` : null}
      meta={[
        {
          name: `description`,
          content: description || meta.description,
        },
        {
          property: `og:title`,
          content: title || meta.title,
        },
        {
          property: `og:description`,
          content: description || meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: meta.twitterAccount || ``,
        },
        {
          name: `twitter:title`,
          content: title || meta.title,
        },
        {
          name: `twitter:description`,
          content: description || meta.description,
        },
        {
          name: `og:image`,
          content: meta.ogImage,
        },
        {
          name: `twitter:image`,
          content: meta.ogImage,
        },
      ]}
    />
  );
}

export default Seo;
