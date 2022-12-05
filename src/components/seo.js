import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

function Seo({ description, meta, title }) {
  const {
    datoCmsSite: { globalSeo },
  } = useStaticQuery(
    graphql`
      query {
        datoCmsSite {
          globalSeo {
            twitterAccount
            titleSuffix
            siteName
            fallbackSeo {
              description
              title
              twitterCard
              image {
                url
              }
            }
          }
        }
      }
    `
  );
  if (meta) {
    return <HelmetDatoCms seo={meta} />;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title || globalSeo.siteName}
      titleTemplate={
        globalSeo.titleSuffix ? `%s ${globalSeo.titleSuffix}` : null
      }
      meta={[
        {
          name: `description`,
          content: description || globalSeo.fallbackSeo.description,
        },
        {
          property: `og:title`,
          content: title || globalSeo.fallbackSeo.title,
        },
        {
          property: `og:description`,
          content: description || globalSeo.fallbackSeo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: globalSeo.fallbackSeo.twitterCard,
        },
        {
          name: `twitter:site`,
          content: globalSeo.twitterAccount || ``,
        },
        {
          name: `twitter:title`,
          content: title || globalSeo.fallbackSeo.title,
        },
        {
          name: `twitter:description`,
          content: description || globalSeo.fallbackSeo.description,
        },
        {
          name: `og:image`,
          content: globalSeo.fallbackSeo.image.url,
        },
        {
          name: `twitter:image`,
          content: globalSeo.fallbackSeo.image.url,
        },
      ]}
    />
  );
}

export default Seo;
