/**
 * Optimized image component for React islands.
 *
 * Mirrors the logic of src/components/image.astro — SVGs pass through as plain
 * <img> elements; raster images get a <picture> with AVIF + WebP sources backed
 * by the Netlify Image CDN. Falls back to a plain <img> in local dev.
 */
import {
  isRaster,
  hasAlpha,
  makeSrcset,
  netlifyUrl,
} from "@/lib/netlify-image";

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  sizes?: string;
  widths?: number[];
}

export function Img({
  src,
  alt,
  className,
  width,
  height,
  loading = "lazy",
  sizes = "100vw",
  widths,
}: ImgProps) {
  const useNetlify = isRaster(src) && !import.meta.env.DEV;
  const fallbackFormat = hasAlpha(src) ? ("png" as const) : ("jpeg" as const);

  // Derive a sensible fallback width from props
  const fallbackWidth = (() => {
    if (width) return width;
    const pxMatch = sizes.match(/^(\d+)px$/);
    if (pxMatch) return Math.min(parseInt(pxMatch[1], 10) * 2, 800);
    const ws = widths || [200, 400, 800, 1200];
    return ws[Math.min(1, ws.length - 1)];
  })();

  if (!useNetlify) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    );
  }

  return (
    <picture style={{ display: "contents" }}>
      <source
        type="image/avif"
        srcSet={makeSrcset(src, "avif", widths)}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={makeSrcset(src, "webp", widths)}
        sizes={sizes}
      />
      <img
        src={netlifyUrl(src, fallbackWidth, fallbackFormat)}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
