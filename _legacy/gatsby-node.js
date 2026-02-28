const path = require("path");

const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``));

exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions;
  if (!page.path.includes(".html") && page.path !== "/") {
    createRedirect({
      fromPath: `${page.path}`,
      toPath: replacePath(page.path),
      isPermanent: true,
    });
  }
};

// Derive collection, lang, and slug fields from the filesystem path
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const collection = fileNode.sourceInstanceName; // "articles", "manifesto", "pages"

    createNodeField({ node, name: "collection", value: collection });

    // Extract lang from directory path: e.g. "en/slug.md" -> "en"
    const relativePath = fileNode.relativePath; // e.g. "en/what-is-green-software.md"
    const parts = relativePath.split("/");
    let lang = "en";
    let slug = fileNode.name; // filename without extension

    if (parts.length > 1) {
      // Skip "images" directories
      if (parts[0] !== "images") {
        lang = parts[0];
      }
    }

    createNodeField({ node, name: "lang", value: lang });
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          fields {
            collection
            lang
            slug
          }
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running markdown query.`);
    return;
  }

  const allNodes = result.data.allMarkdownRemark.nodes;

  // -----------------------------------------------------------------------
  // Articles
  // -----------------------------------------------------------------------
  const articles = allNodes.filter((n) => n.fields.collection === "articles");
  const enArticles = articles
    .filter((n) => n.fields.lang === "en")
    .sort((a, b) => {
      const dateA = a.frontmatter.date || "";
      const dateB = b.frontmatter.date || "";
      return dateB.localeCompare(dateA);
    });

  // Paginated article list (English only)
  const articlesPerPage = 10;
  const numPagesArticles = Math.ceil(enArticles.length / articlesPerPage);

  Array.from({ length: numPagesArticles }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/articles` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/articles-list.js"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages: numPagesArticles,
        currentPage: i + 1,
      },
    });
  });

  // Individual article pages
  articles.forEach((article) => {
    const { lang, slug } = article.fields;
    const urlPath =
      lang === "en" ? `/articles/${slug}` : `/${lang}/articles/${slug}`;

    createPage({
      path: urlPath,
      component: path.resolve("./src/templates/article.js"),
      context: {
        id: article.id,
        slug: slug, // for finding translations (same slug, different lang)
        lang: lang,
      },
    });
  });

  // -----------------------------------------------------------------------
  // Manifesto
  // -----------------------------------------------------------------------
  const manifestos = allNodes.filter(
    (n) => n.fields.collection === "manifesto"
  );

  manifestos.forEach((m) => {
    const { lang } = m.fields;
    const urlPath = lang === "en" ? "/manifesto" : `/${lang}/manifesto`;

    createPage({
      path: urlPath,
      component: path.resolve("./src/templates/manifesto.js"),
      context: {
        id: m.id,
        lang: lang,
      },
    });
  });

  // -----------------------------------------------------------------------
  // Flat pages
  // -----------------------------------------------------------------------
  const flatPages = allNodes.filter((n) => n.fields.collection === "pages");

  flatPages.forEach((page) => {
    // Use frontmatter slug if available (supports nested slugs like "policy/steering-membership")
    const slug = page.frontmatter.slug || page.fields.slug;

    createPage({
      path: `/${slug}`,
      component: path.resolve("./src/templates/flat-page.js"),
      context: {
        id: page.id,
      },
    });
  });
};
