import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { articleUrl } from "@/lib/utils";

export async function GET(context) {
  const articles = await getCollection("articles", (a) => a.data.published !== false);

  const englishArticles = articles
    .filter((a) => a.data.lang === "en")
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: "Green Software Foundation",
    description: "News, insights, and technical articles on green software engineering from the Green Software Foundation.",
    site: context.site,
    items: englishArticles.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.date,
      link: articleUrl(article.id),
    })),
    customData: `<language>en-us</language>`,
  });
}
