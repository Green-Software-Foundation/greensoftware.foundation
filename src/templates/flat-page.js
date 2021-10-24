import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

const SingleFlatPageTemplate = ({ data: { datoCmsFlatPage: data } }) => {
  return (
    <Layout pageName="single-working-group" seo={{ title: data.title }}>
      <PageTitle>{data.title}</PageTitle>
      <StructuredText data={data.content} />
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
