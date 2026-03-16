const { Client } = require("@notionhq/client");

/**
 * Netlify automatically triggers this function on every form submission.
 * It writes the assembly application data to the Notion Assembly Applications database.
 */
exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  const data = payload.data;

  // Validate required env vars
  const notionKey = process.env.NOTION_API_KEY;
  const dbId = process.env.NOTION_ASSEMBLY_APPLICATIONS_DB;

  if (!notionKey || !dbId) {
    console.error("Missing NOTION_API_KEY or NOTION_ASSEMBLY_APPLICATIONS_DB environment variable");
    return { statusCode: 500, body: "Server configuration error" };
  }

  const notion = new Client({ auth: notionKey });

  // Map form fields to Notion properties
  const properties = {
    "Your Name": { title: [{ text: { content: data["your-name"] || "" } }] },
    "Work Email": { email: data["work-email"] || null },
    "Organisation": { rich_text: [{ text: { content: data["organisation"] || "" } }] },
    "Job Title": { rich_text: [{ text: { content: data["job-title"] || "" } }] },
    "LinkedIn URL": { url: data["linkedin-url"] || null },
    "GitHub Username": { rich_text: [{ text: { content: data["github-username"] || "" } }] },
    "Sector / Industry": data["sector-industry"] ? { select: { name: data["sector-industry"] } } : undefined,
    "Timezone": { rich_text: [{ text: { content: data["timezone"] || "" } }] },
    "Years of Experience": data["years-of-experience"] ? { select: { name: data["years-of-experience"] } } : undefined,
    "Expertise": { rich_text: [{ text: { content: data["expertise"] || "" } }] },
    "Motivation": { rich_text: [{ text: { content: data["motivation"] || "" } }] },
    "Previous GSF Involvement": { rich_text: [{ text: { content: data["previous-gsf-involvement"] || "" } }] },
    "How Did You Hear About This?": { rich_text: [{ text: { content: data["how-did-you-hear"] || "" } }] },
    "Stay Informed": { checkbox: data["stay-informed"] === "true" },
    "Confirmation": { checkbox: data["confirmation"] === "true" },
  };

  // Remove undefined values (e.g. empty select fields)
  for (const key of Object.keys(properties)) {
    if (properties[key] === undefined) delete properties[key];
  }

  // Link to the assembly via relation if we have a valid Notion page ID
  if (data["assembly-id"]) {
    properties["Assembly"] = {
      relation: [{ id: data["assembly-id"] }],
    };
  }

  try {
    await notion.pages.create({
      parent: { database_id: dbId },
      properties,
    });

    console.log(`Application submitted for assembly: ${data["assembly-name"] || "unknown"}`);
    return { statusCode: 200, body: "OK" };
  } catch (err) {
    // If the relation field caused the error, retry without it
    if (err.message && err.message.includes("relation") && properties["Assembly"]) {
      console.warn("Assembly relation failed, retrying without relation:", err.message);
      delete properties["Assembly"];
      try {
        await notion.pages.create({
          parent: { database_id: dbId },
          properties,
        });
        console.log(`Application submitted (without relation) for assembly: ${data["assembly-name"] || "unknown"}`);
        return { statusCode: 200, body: "OK" };
      } catch (retryErr) {
        console.error("Retry also failed:", retryErr.message);
        return { statusCode: 500, body: "Failed to save application" };
      }
    }
    console.error("Failed to create Notion page:", err.message);
    return { statusCode: 500, body: "Failed to save application" };
  }
};
