import * as React from "react";
import { graphql } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

const SingleFlatPageTemplate = ({ data: { datoCmsFlatPage: data } }) => {
  return (
    <Layout
      className="container"
      pageName="flat-page"
      seo={{ title: data.title }}
    >
      <PageTitle>{data.title}</PageTitle>
      <div style={{ marginBottom: "5rem" }}>
        <StructuredText data={data.content} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SingleFlatPageTemplateQuery($id: String) {
    datoCmsFlatPage(id: { eq: $id }) {
      id
      slug
      title
      content {
        value
      }
    }
  }
`;
export default SingleFlatPageTemplate;
