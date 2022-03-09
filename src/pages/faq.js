import * as React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";

// Components
import Layout from "../components/layout";
import PageTitle from "../components/page-title";

// Styles
import "../styles/pages/faq.scss";

const PressPage = ({
  data: {
    datoCmsFaqPage: { sections },
  },
}) => {
  console.log(sections);
  return (
    <Layout className="container" pageName="faq" seo={{ title: "FAQ" }}>
      <PageTitle>FAQ</PageTitle>

      {sections.map((section) => (
        <section key={section.id}>
          <h2>{section.sectionTitle}</h2>
          {section.qAs.map((QA) => (
            <div key={QA.id}>
              <h3>{QA.question}</h3>
              <div>
                <StructuredText
                  data={QA.answer}
                  renderLinkToRecord={({
                    record,
                    children,
                    transformedMeta,
                  }) => {
                    switch (record.__typename) {
                      case "DatoCmsArticle":
                        return (
                          <Link
                            {...transformedMeta}
                            to={`/articles/${record.slug}`}
                          >
                            {children}
                          </Link>
                        );
                      case "DatoCmsProject":
                        return (
                          <Link
                            {...transformedMeta}
                            to={`/projects/${record.slug}`}
                          >
                            {children}
                          </Link>
                        );
                      case "DatoCmsWorkingGroup":
                        return (
                          <Link
                            {...transformedMeta}
                            to={`/working-groups/${record.slug}`}
                          >
                            {children}
                          </Link>
                        );
                      default:
                        return null;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query FAQPageQuery {
    datoCmsFaqPage {
      sections {
        id
        sectionTitle
        qAs {
          id
          question
          answer {
            value
            links {
              __typename
              ... on DatoCmsArticle {
                id: originalId
                slug
              }
              ... on DatoCmsProject {
                id: originalId
                slug
              }
              ... on DatoCmsWorkingGroup {
                id: originalId
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default PressPage;
