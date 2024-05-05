require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://greensoftware.foundation/",
    title: "Green Software Foundation",
    description: "The Green Software Foundation is a non-profit with the mission to create a trusted ecosystem of people, standards, tooling and best practices for building green software",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "92c1b380aae9e3cd567d6f16f11e47",
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({query: {site, allDatoCmsArticle}}) =>
              allDatoCmsArticle.edges.map(edge => ({
                  title: `${edge.node.title}`,
                  description: `${edge.node.summary}`,
                  date: `${edge.node.date}`,
                  url: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug }`,
                  guid: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug }`,
              })),
            query: `{
              allDatoCmsArticle(
                sort: {fields: date, order: DESC}
                filter: { isATranslatedArticle: { ne: true } }
              ) {
                edges {
                  node {
                    title
                    summary
                    date
                    slug
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Green Software Foundation RSS Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/static-images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/static-images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://foundation.us5.list-manage.com/subscribe/post?u=ddc99c7db248c3df0ef4f7d24&amp;id=c5376a805c&amp;f_id=003e64e9f0",
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["GTM-WTDZZJF"],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
  ],
};
