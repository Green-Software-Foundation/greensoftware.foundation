import { Client } from "@notionhq/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logosDir = path.join(process.cwd(), "public", "assets", "logos");
const dataDir = path.join(process.cwd(), "src", "data");

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

async function downloadLogo(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const ext = path.extname(new URL(url).pathname) || '.png';
    const fullFilename = `${filename}${ext}`;
    const filepath = path.join(logosDir, fullFilename);
    
    fs.writeFileSync(filepath, buffer);
    return `/assets/logos/${fullFilename}`;
  } catch (error) {
    console.error(`[Logo] Failed to download ${filename}:`, error);
    return url;
  }
}

async function fetchLogos() {
  const databaseId = process.env.NOTION_MEMBERS_DATABASE_ID;
  const apiKey = process.env.NOTION_TOKEN;
  let logos = [];

  if (!databaseId || !apiKey) {
    console.warn(
      "[Notion] Missing NOTION_MEMBERS_DATABASE_ID or NOTION_TOKEN env var"
    );
    
    fs.writeFileSync(
      path.join(dataDir, "logos.json"),
      JSON.stringify(logos, null, 2)
    );
    return;
  }

  const notion = new Client({
    auth: apiKey,
  });

  try {
    const dataSteering = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Active",
            },
          },
          {
            property: "Membership Level ",
            select: {
              equals: "Steering",
            },
          },
        ],
      },
      sorts: [
        {
          property: "Member Name ",
          direction: "ascending",
        },
      ],
    });
    
    const steeringLogos = await Promise.all(
      dataSteering.results.map(async (result) => {
        const name = result.properties["Member Name "]?.title[0]?.plain_text || "";
        const logoUrl = result.properties.Logo.files[0]?.file?.url || "";
        const filename = name.toLowerCase().replace(/\s+/g, '-');
        
        const localLogoPath = logoUrl ? await downloadLogo(logoUrl, filename) : "";
        
        return {
          name,
          logo: localLogoPath,
          website: result.properties.Website?.url || "",
        };
      })
    );
    
    logos = [...steeringLogos];

    const dataGeneral = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Active",
            },
          },
          {
            property: "Membership Level ",
            select: {
              equals: "General",
            },
          },
        ],
      },
      sorts: [
        {
          property: "Member Name ",
          direction: "ascending",
        },
      ],
    });
    
    const generalLogos = await Promise.all(
      dataGeneral.results.map(async (result) => {
        const name = result.properties["Member Name "]?.title[0]?.plain_text || "";
        const logoUrl = result.properties.Logo.files[0]?.file?.url || "";
        const filename = name.toLowerCase().replace(/\s+/g, '-');
        
        const localLogoPath = logoUrl ? await downloadLogo(logoUrl, filename) : "";
        
        return {
          name,
          logo: localLogoPath,
          website: result.properties.Website?.url || "",
        };
      })
    );
    
    logos = [...logos, ...generalLogos];
    
    console.log(`[Notion] Successfully fetched ${logos.length} logos`);
  } catch (error) {
    console.error("[Notion] Query failed", error);
  }

  fs.writeFileSync(
    path.join(dataDir, "logos.json"),
    JSON.stringify(logos, null, 2)
  );
}

fetchLogos();
