/**
 * Shared logo lookup map.
 *
 * Builds a Map from lowercase company name → logo URL path.
 * Prefers SVG when available on disk (SVGs are resolution-independent
 * and always have proper transparency), falling back to the raster
 * version from members.json.
 */
import fs from "node:fs";
import path from "node:path";
import membersData from "@/data/members.json";

const LOGOS_DIR = path.resolve("public/assets/logos");

function svgExists(rasterLogo: string): string | null {
  const base = path.basename(rasterLogo, path.extname(rasterLogo));
  const svgPath = path.join(LOGOS_DIR, `${base}.svg`);
  return fs.existsSync(svgPath) ? `logos/${base}.svg` : null;
}

/** Logo map: lowercase company name → /assets/logos/... path */
export const logoMap = new Map<string, string>(
  (membersData as any[])
    .filter((m: any) => m.logo && !m.hideLogo)
    .map((m: any) => [
      m.companyName.toLowerCase(),
      `/assets/${svgExists(m.logo) || m.logo}`,
    ]),
);

/** Resolve an array of org names to objects with logo paths (for TabbedSection orgs prop) */
export function resolveOrgs(names: string[]): { name: string; logo: string }[] {
  return names.map((name) => ({
    name,
    logo: logoMap.get(name.toLowerCase()) || "",
  }));
}

/** Resolve an array of org names to objects with logoSrc paths (for ProjectCards orgs prop) */
export function resolveOrgsSrc(
  names: string[],
): { name: string; logoSrc: string }[] {
  return names.map((name) => ({
    name,
    logoSrc: logoMap.get(name.toLowerCase()) || "",
  }));
}
