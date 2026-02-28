import * as React from "react";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";
import PersonBlob from "../components/person-blob";

// Assets
import MissionIcon from "../assets/icons/mission.inline.svg";
import VisionIcon from "../assets/icons/vision.inline.svg";

// Styles
import "../styles/pages/manifesto.scss";

// Utils
import { getNativeNameByCode } from "../utils/language-locale";

const MVItem = ({ icon, title, text }) => (
  <div className="mv-item">
    <div className="icon-wrapper">{icon}</div>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

const ManifestoPage = ({
  data: { manifesto, allManifestos },
  pageContext: { lang },
}) => {
  const fm = manifesto.frontmatter;
  const otherManifestos = allManifestos.nodes.filter(
    (m) => m.fields.lang !== lang
  );

  return (
    <Layout
      className="container"
      pageName="manifesto"
      seo={{ title: fm.title }}
    >
      <PageTitle>{fm.title}</PageTitle>
      {otherManifestos.length > 0 && (
        <div>
          <p>You can also read the Manifesto in: </p>
          <ul>
            {otherManifestos.map((m) => {
              const mLang = m.fields.lang;
              const mPath = mLang === "en" ? "/manifesto" : `/${mLang}/manifesto`;
              return (
                <li key={mLang}>
                  <Link to={mPath}>{getNativeNameByCode(mLang)}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <hr />
      <div className="main-paragraph">
        <p>{fm.mainParagraph}</p>
      </div>
      <div className="mission-vision-wrapper">
        <MVItem icon={<MissionIcon />} title="Mission" text={fm.mission} />
        <MVItem icon={<VisionIcon />} title="Vision" text={fm.vision} />
      </div>
      {(fm.topics || []).map((topic, i) => (
        <section key={i} className="topic-wrapper ">
          <div className="illustration-wrapper">
            {topic.illustration && (
              <img src={topic.illustration} alt={topic.title} />
            )}
          </div>
          <div className="content-wrapper">
            <h3 className="green-uppercase-title">{topic.title}</h3>
            <p>{topic.description}</p>
            <h4>Operationalise: </h4>
            <div
              dangerouslySetInnerHTML={{
                __html: topic.operationalise || "",
              }}
            />
          </div>
        </section>
      ))}
      {fm.editors && fm.editors.length > 0 && (
        <>
          <hr />
          <section className="editors-section">
            <p>Translated and checked by: </p>
            <div className="editors-wrapper">
              {fm.editors.map((editor) => (
                <PersonBlob key={editor.fullName} person={editor} />
              ))}
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ManifestoPageQuery($id: String!) {
    manifesto: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        mainParagraph
        mission
        vision
        topics {
          title
          description
          operationalise
          illustration
        }
        editors {
          fullName
          role
          company
          companyWebsite
          photo { publicURL }
          socialMedia {
            platform
            link
          }
        }
      }
    }
    allManifestos: allMarkdownRemark(
      filter: { fields: { collection: { eq: "manifesto" } } }
    ) {
      nodes {
        fields {
          lang
        }
      }
    }
  }
`;

export default ManifestoPage;
