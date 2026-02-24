import * as React from "react";

// Use Netlify Image CDN only when built on Netlify (set in netlify.toml)
const useImageCDN = process.env.GATSBY_NETLIFY === "true";

const NetlifyImage = ({ src, width, height, alt, className, style, ...props }) => {
  if (!src) return null;

  const isExternal = src.startsWith("http://") || src.startsWith("https://");

  let imgSrc;
  if (isExternal || !useImageCDN) {
    // Local builds or external URLs — use the source as-is
    imgSrc = src;
  } else {
    // On Netlify, use the Image CDN for on-the-fly transforms
    const params = new URLSearchParams();
    params.set("url", src);
    if (width) params.set("w", String(width));
    params.set("q", "75");
    imgSrc = `/.netlify/images?${params.toString()}`;
  }

  return (
    <img
      src={imgSrc}
      alt={alt || ""}
      className={className}
      style={style}
      width={width}
      height={height}
      loading="lazy"
      {...props}
    />
  );
};

export default NetlifyImage;
