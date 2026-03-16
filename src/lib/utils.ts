import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate a URL path for an article, stripping the default language prefix (en/).
 * Non-English articles keep their language prefix (e.g. /articles/ja/slug/).
 */
export function articleUrl(id: string): string {
  const slug = id.startsWith("en/") ? id.slice(3) : id;
  return `/articles/${slug}/`;
}
