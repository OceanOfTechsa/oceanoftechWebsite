import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ArticleItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  author: string;
  authorImage: string;
  image: string;
  content: string;
  readingTime: string;
  tags?: string[];
};

const articlesDirectory = path.join(process.cwd(), "articles");

export const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((fileName) => {
      // ✅ Strip both .mdx and .md extensions
      const id = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const stats = readingTime(matterResult.content);

      // ✅ Always coerce date to string — gray-matter parses unquoted YAML dates as JS Date objects
      const rawDate = matterResult.data.date;
      const dateString =
        rawDate instanceof Date
          ? rawDate.toISOString().split("T")[0] // "2026-03-10"
          : String(rawDate ?? "");

      return {
        id,
        slug: matterResult.data.slug ?? id,
        title: matterResult.data.title ?? "",
        date: dateString,
        category: matterResult.data.category ?? "General",
        description: matterResult.data.description ?? "",
        author: matterResult.data.author ?? "",
        authorImage: matterResult.data.authorImage ?? "",
        image: matterResult.data.ogImage ?? matterResult.data.image ?? "",
        content: "",
        readingTime: matterResult.data.readingTime ?? stats.text,
        tags: matterResult.data.tags ?? [],
      } as ArticleItem;
    });

  // Sort newest first
  return allArticlesData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorised: Record<string, ArticleItem[]> = {};
  sortedArticles.forEach((article) => {
    const cat = article.category || "Uncategorized";
    if (!categorised[cat]) categorised[cat] = [];
    categorised[cat].push(article);
  });
  return categorised;
};

export const getLatestPost = (articles: ArticleItem[]): ArticleItem | null => {
  if (!articles || articles.length === 0) return null;
  return articles[0]; // Already sorted newest-first
};

// ✅ Returns raw MDX source string for next-mdx-remote/rsc (App Router)
export const getArticleData = (slug: string) => {
  // Try slug.mdx first, fallback to slug.md
  let fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(articlesDirectory, `${slug}.md`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const stats = readingTime(matterResult.content);

  const rawDate = matterResult.data.date;
  const dateString =
    rawDate instanceof Date
      ? rawDate.toISOString().split("T")[0]
      : String(rawDate ?? "");

  return {
    slug,
    mdxSource: matterResult.content, // next-mdx-remote/rsc takes raw string
    title: matterResult.data.title ?? "",
    description: matterResult.data.description ?? "",
    category: matterResult.data.category ?? "General",
    author: matterResult.data.author ?? "",
    authorImage: matterResult.data.authorImage ?? "",
    image: matterResult.data.ogImage ?? matterResult.data.image ?? "",
    date: dateString,
    readingTime: matterResult.data.readingTime ?? stats.text,
    tags: matterResult.data.tags ?? [],
  };
};
