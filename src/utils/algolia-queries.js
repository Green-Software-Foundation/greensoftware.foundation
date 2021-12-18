const StructureToPlain = require("datocms-structured-text-to-plain-text");

const pageQuery = `
  {
    articles: allDatoCmsArticle {
      edges {
        node {
          id
          slug
          title
          teaserText
          summary
          date
          mainImage {
            url
          }
          content {
            value
          }
          author {
            fullName
          }
        }
      }
    }
    projects: allDatoCmsProject {
      edges {
        node {
          id
          slug
          title
          shortDescription
          workingGroup {
            title
          }
          illustration {
            url
          }
          info {
            title
            content {
              value
            }
          }
        }
      }
    }
    members: allDatoCmsMember {
      edges {
        node {
          fullName
          chairProjects {
            id
          }
          chairWorkingGroups {
            id
          }
          memberProjects {
            id
          }
          memberWorkingGroups {
            id
          }
        }
      }
    }
  }
`;

// const projectMembers = {};
// const workingGroupsMembers = {};

// pageQuery.members.edges.map(({ node: member }) => {
//   for (let project of member.chairProjects) {
//     if (project.id in projectMembers) {
//       if (projectMembers[project.id].indexOf(member.fullName) === -1) {
//         projectMembers[project.id].push(member.fullName);
//       }
//     } else projectMembers[project.id] = [member.fullName];
//   }
//   for (let project of member.memberProjects) {
//     if (project.id in projectMembers) {
//       if (projectMembers[project.id].indexOf(member.fullName) === -1) {
//         projectMembers[project.id].push(member.fullName);
//       }
//     } else projectMembers[project.id] = [member.fullName];
//   }
//   for (let workingGroup of member.chairWorkingGroups) {
//     if (workingGroup.id in workingGroupsMembers) {
//       if (
//         workingGroupsMembers[workingGroup.id].indexOf(member.fullName) === -1
//       ) {
//         workingGroupsMembers[workingGroup.id].push(member.fullName);
//       }
//     } else workingGroupsMembers[workingGroup.id] = [member.fullName];
//   }
//   for (let workingGroup of member.memberWorkingGroups) {
//     if (workingGroup.id in workingGroupsMembers) {
//       if (
//         workingGroupsMembers[workingGroup.id].indexOf(member.fullName) === -1
//       ) {
//         workingGroupsMembers[workingGroup.id].push(member.fullName);
//       }
//     } else workingGroupsMembers[workingGroup.id] = [member.fullName];
//   }
// });

function articleToAlgoliaRecord({
  node: { id, mainImage, content, author, ...rest },
}) {
  return {
    objectID: id,
    image: mainImage.url,
    content: StructureToPlain.render(content),
    author: author.fullName,
    ...rest,
  };
}

// function projectToAlgoliaRecord({
//   node: { id, illustration, info, workingGroup, ...rest },
// }) {
//   let infoText = ``;
//   for (const singleInfo of info) {
//     infoText += `${singleInfo.title}
//         ${StructureToPlain.render(singleInfo.content)}
//       `;
//   }
//   return {
//     objectID: id,
//     image: illustration.url,
//     workingGroup: `${workingGroup.title} Working Group`,
//     content: infoText,
//     members: projectMembers[id],
//     ...rest,
//   };
// }
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.articles.edges.map(articleToAlgoliaRecord),
    indexName: "Articles",
    settings: { attributesToSnippet: [`content:20`] },
  },
  {
    query: pageQuery,
    transformer: ({ data }) => {
      const projectMembers = {};
      data.members.edges.map(({ node: member }) => {
        for (let project of member.chairProjects) {
          if (project.id in projectMembers) {
            if (projectMembers[project.id].indexOf(member.fullName) === -1) {
              projectMembers[project.id].push(member.fullName);
            }
          } else projectMembers[project.id] = [member.fullName];
        }
        for (let project of member.memberProjects) {
          if (project.id in projectMembers) {
            if (projectMembers[project.id].indexOf(member.fullName) === -1) {
              projectMembers[project.id].push(member.fullName);
            }
          } else projectMembers[project.id] = [member.fullName];
        }
      });
      const projects = [];

      for (project of data.projects.edges) {
        const { id, illustration, info, workingGroup, ...rest } = project.node;
        let infoText = ``;
        for (let singleInfo of info) {
          infoText += `${singleInfo.title}
          ${StructureToPlain.render(singleInfo.content)}
        `;
        }
        projects.push({
          objectID: id,
          image: illustration.url,
          workingGroup: `${workingGroup.title} Working Group`,
          content: infoText,
          members: projectMembers[id],
          ...rest,
        });
      }
      return projects;
    },
    indexName: "Projects",
    settings: { attributesToSnippet: [`content:20`] },
  },
];

module.exports = queries;
