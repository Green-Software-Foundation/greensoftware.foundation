import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

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
      <img src={press.logo.url} alt={press.headline} />
    </div>
    <p>{press.headline}</p>
  </a>
);

const PressPage = ({
  data: {
    allDatoCmsPress: { nodes: data },
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
    allDatoCmsPress {
      nodes {
        articleLink
        headline
        logo {
          url
        }
      }
    }
  }
`;

export default PressPage;
