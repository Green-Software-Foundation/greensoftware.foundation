import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

const SingleFlatPageTemplate = ({ data: { markdownRemark: page } }) => {
  return (
    <Layout
      className="container"
      pageName="flat-page"
      seo={{ title: page.frontmatter.title }}
    >
      <PageTitle>{page.frontmatter.title}</PageTitle>
      <div
        style={{ marginBottom: "5rem" }}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query SingleFlatPageTemplateQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default SingleFlatPageTemplate;
