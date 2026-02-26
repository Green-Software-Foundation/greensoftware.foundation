require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://greensoftware.foundation/",
    title: "Green Software Foundation",
    description:
      "The Green Software Foundation is a non-profit with the mission to create a trusted ecosystem of people, standards, tooling and best practices for building green software",
    titleSuffix: " | GSF",
    twitterAccount: "@gsfcommunity",
    ogImage: "/og-image.png",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                title: node.frontmatter.title,
                description: node.frontmatter.summary,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}articles/${node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}articles/${node.fields.slug}`,
              })),
            query: `{
              allMarkdownRemark(
                sort: {fields: frontmatter___date, order: DESC}
                filter: {
                  fields: {
                    collection: {eq: "articles"}
                    lang: {eq: "en"}
                  }
                }
              ) {
                nodes {
                  frontmatter {
                    title
                    summary
                    date
                  }
                  fields {
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
    "gatsby-transformer-remark",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/static-images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./content/articles/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "manifesto",
        path: "./content/manifesto/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./content/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "press",
        path: "./content/press/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "homepage",
        path: "./content/homepage/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team",
        path: "./content/team/",
      },
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
