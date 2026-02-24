import * as React from "react";

const isDev =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const NetlifyImage = ({ src, width, height, alt, className, style, ...props }) => {
  if (!src) return null;

  const isExternal = src.startsWith("http://") || src.startsWith("https://");

  let imgSrc;
  if (isExternal || isDev) {
    // In development or for external URLs, use the source as-is
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
