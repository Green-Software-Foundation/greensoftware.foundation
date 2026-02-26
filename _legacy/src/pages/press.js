import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import NetlifyImage from "../components/netlify-image";

// Styles
import "../styles/pages/press.scss";

const PressCard = ({ press }) => (
  <a
    href={press.articleLink}
    target="_blank"
    rel="noopener noreferrer"
    className="card-wrapper"
  >
    <div className="logo-wrapper">
      {press.logo?.publicURL && <NetlifyImage src={press.logo.publicURL} width={300} alt={press.headline} />}
    </div>
    <p>{press.headline}</p>
  </a>
);

const PressPage = ({
  data: {
    allPressJson: { nodes: data },
  },
}) => {
  return (
    <Layout className="container" pageName="press" seo={{ title: "Press" }}>
      <PageTitle>Press</PageTitle>
      <section className="cards-wrapper">
        {data.map((press) => (
          <PressCard key={press.headline} press={press} />
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PressPageQuery {
    allPressJson {
      nodes {
        articleLink
        headline
        logo { publicURL }
      }
    }
  }
`;

export default PressPage;
