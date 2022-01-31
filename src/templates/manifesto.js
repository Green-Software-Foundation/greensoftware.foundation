import * as React from "react";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

// Assets
import MissionIcon from "../assets/icons/mission.inline.svg";
import VisionIcon from "../assets/icons/vision.inline.svg";

// Styles
import "../styles/pages/manifesto.scss";

// Utils
import { getLocaleNativeName } from "../utils/language-locale";

const MVItem = ({ icon, title, text }) => (
  <div className="mv-item">
    <div className="icon-wrapper">{icon}</div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const ManifestoPage = ({
  data: {
    datoCmsManifesto: data,
    allDatoCmsManifesto: { nodes: allManifesto },
  },
}) => {
  const allOtherManifesto = allManifesto.filter(({ id }) => id !== data.id);
  return (
    <Layout pageName="manifesto" seo={{ title: data.title }}>
      <PageTitle>{data.title}</PageTitle>
      {Boolean(allOtherManifesto.length) && (
        <div>
          <p>You can also read the Manifesto in: </p>
          <ul>
            {allOtherManifesto.map(({ language, slug }) => (
              <li key={language}>
                <Link to={`/${slug}`}>{getLocaleNativeName(language)}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <hr />
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
            <h3 className="green-uppercase-title">{topic.title}</h3>
            <p>{topic.description}</p>
            <h4>Operationalise: </h4>
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
  query ManifestoPageQuery($id: String) {
    datoCmsManifesto(id: { eq: $id }) {
      id
      title
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
    allDatoCmsManifesto {
      nodes {
        id
        slug
        language
      }
    }
  }
`;

export default ManifestoPage;
