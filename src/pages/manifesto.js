import * as React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

// Assets
import MissionIcon from "../assets/icons/mission.inline.svg";
import VisionIcon from "../assets/icons/vision.inline.svg";

// Styles
import "../styles/pages/manifesto.scss";

const MVItem = ({ icon, title, text }) => (
  <div className="mv-item">
    <div className="icon-wrapper">{icon}</div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const ManifestoPage = ({ data: { datoCmsManifesto: data } }) => {
  return (
    <Layout pageName="manifesto" seo={{ title: "Manifesto" }}>
      <PageTitle>manifesto</PageTitle>
      <div className="main-paragraph">
        <p>{data.mainParagraph}</p>
      </div>
      <div className="mission-vision-wrapper">
        <MVItem icon={<MissionIcon />} title="Mission" text={data.mission} />
        <MVItem icon={<VisionIcon />} title="Vision" text={data.vision} />
      </div>
      {data.manifestoTopic.map((topic) => (
        <section key={topic.id} className="topic-wrapper ">
          <div className="illustration-wrapper">
            <img src={topic.illustration.url} alt={topic.title} />
          </div>
          <div className="content-wrapper">
            <h5 className="green-uppercase-title">{topic.title}</h5>
            <p>{topic.description}</p>
            <h6>Operationalise: </h6>
            <div
              dangerouslySetInnerHTML={{
                __html: topic.operationaliseNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </section>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ManifestoPageQuery {
    datoCmsManifesto {
      mainParagraph
      vision
      mission
      manifestoTopic {
        id
        title
        illustration {
          url
        }
        description
        operationaliseNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;

export default ManifestoPage;
