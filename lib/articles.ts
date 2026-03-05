import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import type { ArticleItem } from "@/types";
import { remark } from "remark";
import html from "remark-html";
import {title} from "framer-motion/m";
import readingTime from "reading-time";
import { Clock } from "lucide-react";

const articlesDirectory = path.join(process.cwd(), "articles");

export const getSortedArticles = (): ArticleItem[] => {
    const fileNames = fs.readdirSync(articlesDirectory);

    const allArticlesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const stats = readingTime(matterResult.content);

        return {
            id,
            slug: id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            category: matterResult.data.category,
            description: matterResult.data.description ?? "",
            author: matterResult.data.author ?? "",
            image: matterResult.data.image ?? "",
            content: "",
            readingTime: stats.text,
        } as ArticleItem;
    });

    return allArticlesData.sort((a, b) => {
        const format = "DD-MM-YYYY";
        const dateOne = moment(a.date, format);
        const dateTwo = moment(b.date, format);
        if (dateOne.isBefore(dateTwo)) return 1;
        if (dateOne.isAfter(dateTwo)) return -1;
        return 0;
    });
};

// Get full article by slug (with content HTML)

// Categorize articles by category
export const getCategorisedArticles = (): Record<string, ArticleItem[]> => {
    const sortedArticles = getSortedArticles();
    const categorisedArticles: Record<string, ArticleItem[]> = {};

    sortedArticles.forEach((article) => {
        const cat = article.category || "Uncategorized";
        if (!categorisedArticles[cat]) {
            categorisedArticles[cat] = [];
        }
        categorisedArticles[cat].push(article);
    });

    return categorisedArticles;
};

export function getArticleBySlug(slug: string) {
    const articles = getSortedArticles();

    return articles.find(
        (post) => post.slug === slug
    );
}

// Get latest article
export const getLatestPost = (articles: ArticleItem[]): ArticleItem | null => {
    if (!articles || articles.length === 0) return null;

    return articles.reduce((latest, current) =>
        new Date(current.date) > new Date(latest.date) ? current : latest
    );
};


export const getArticleData = async (id: string) => {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const stats = readingTime(matterResult.content);

    return {
        id,
        contentHtml,
        title: matterResult.data.title,
        description: matterResult.data.description,
        category: matterResult.data.category,
        author: matterResult.data.author,
        image: matterResult.data.image ?? "",
        content: contentHtml,
        date: moment(matterResult.data.date, "DD-MM-YYYY").format("DD-MM-YYYY"),
        readingTime: stats.text,
    };
};