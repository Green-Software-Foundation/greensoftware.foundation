import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

// Styles
// import "../../styles/pages/working-groups.scss";

const SingleLegalPageTemplate = ({ data: { datoCmsLegalPage: data } }) => {
  return (
    <Layout pageName="single-working-group" seo={{ title: data.title }}>
      <PageTitle>{data.title}</PageTitle>
      <StructuredText data={data.content} />
    </Layout>
  );
};

export const query = graphql`
  query SingleLegalPageTemplateQuery($id: String) {
    datoCmsLegalPage(id: { eq: $id }) {
      id
      slug
      title
      content {
        value
      }
    }
  }
`;
export default SingleLegalPageTemplate;
