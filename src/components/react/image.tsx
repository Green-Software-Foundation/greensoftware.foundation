/**
 * Optimised image component for React islands.
 *
 * Mirrors the logic of src/components/image.astro — SVGs pass through as plain
 * <img> elements; raster images get a <picture> with AVIF + WebP sources backed
 * by the Netlify Image CDN. Falls back to a plain <img> in local dev.
 */
import { isRaster, makeSrcset, netlifyUrl } from "@/lib/netlify-image";

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
    <picture>
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
        src={netlifyUrl(src, width ?? 1200, "jpeg")}
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
