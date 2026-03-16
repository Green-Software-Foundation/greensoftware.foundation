/**
 * Netlify Image CDN helpers.
 *
 * Netlify's image transformation service is available at /.netlify/images and
 * works for any image served from the same Netlify site. In local dev the CDN
 * isn't available, so we fall back to the original URL.
 */

const DEFAULT_WIDTHS = [400, 800, 1200, 1600];

/** Returns true for raster image paths that the Netlify CDN can transform. */
export function isRaster(src: string): boolean {
  return /\.(jpe?g|png|gif|webp|avif)(\?.*)?$/i.test(src);
}

/** Build a single Netlify Image CDN URL for the given width and format. */
export function netlifyUrl(
  src: string,
  width: number,
  format: "avif" | "webp" | "jpeg",
): string {
  if (import.meta.env.DEV) return src;
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=${format}&q=80`;
}

/** Build a srcset string for the given format across all widths. */
export function makeSrcset(
  src: string,
  format: "avif" | "webp" | "jpeg",
  widths: number[] = DEFAULT_WIDTHS,
): string {
  if (import.meta.env.DEV) return "";
  return widths.map((w) => `${netlifyUrl(src, w, format)} ${w}w`).join(", ");
}
