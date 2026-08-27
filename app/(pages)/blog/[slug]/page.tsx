import Link from "next/link";
import { notFound } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { Calendar, Clock, ChevronLeft, FolderOpenDot } from "lucide-react";
import { getArticleData, getSortedArticles } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { mdxComponents } from "@/components/mdxComponents";
import {TableOfContents} from "@/components/TOC";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import BlogsBackBtn from "@/components/BlogsBackBtn";

export async function generateStaticParams() {
    const articles = getSortedArticles();
    return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({params}: { params: Promise<{ slug: string }>;}): Promise<Metadata> {
    const { slug } = await params;
    try {
        const article = getArticleData(slug);
        return {
            title: article.title,
            description: article.description,
            openGraph: {
                title: article.title,
                description: article.description,
                images: article.image ? [article.image] : [],
            },
        };
    } catch {
        return { title: "Article not found" };
    }
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

const Article = async ({params}: { params: Promise<{ slug: string }>; }) => {
    const { slug } = await params;
    if (!slug) return notFound();

    let articleData;
    try {
        articleData = getArticleData(slug);
    } catch {
        return notFound();
    }

    return (
      <div className="flex flex-col w-full">
        {/* ── Header ── */}
        <section className="flex flex-col w-full justify-start items-start max-w-7xl mx-auto px-4 sm:px-0 mt-16">
          <nav className="mb-6" aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <BlogsBackBtn />
              <div className={"border h-5 mr-"} />
              <li className="hover:text-[#0b9944] transition-colors">
                <Link href="/">Home</Link>
              </li>
              <GoDotFill size={10} className="mt-1" />
              <li className="text-emerald-600 transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight max-w-4xl">
            {articleData.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 ">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span className={"text-[#606261] dark:text-[#c4c5c7]"}>
                {formatDate(articleData.date)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className={"text-[#606261] dark:text-[#c4c5c7]"}>
                {articleData.readingTime}
              </span>
            </div>
            {articleData.category && (
              <div className="flex items-center gap-2">
                <FolderOpenDot size={16} />
                <Badge
                  variant={"outline"}
                  className={
                    "border-indigo-500 bg-indigo-500/10 text-indigo-500 rounded-sm pb-0"
                  }
                >
                  {articleData.category}
                </Badge>
              </div>
            )}

            {articleData.author && (
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 rounded-full">
                  <Image
                    src={articleData.authorImage}
                    quality={100}
                    fill
                    className="object-cover rounded-full"
                    alt="blog image"
                  />
                </div>
                <p className="mb-0 text-sm">{articleData.author}</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Two-column layout: Article + TOC ── */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-0 mt-10 mb-24 flex gap-20 items-start">
          {/* Article body */}
          <section id="article-body" className="min-w-0 flex-1">
            <div
              className="
              prose prose-zinc dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:scroll-mt-24
              prose-a:text-emerald-600 dark:prose-a:text-emerald-400
              prose-a:no-underline hover:prose-a:underline
              prose-code:before:content-none prose-code:after:content-none
              prose-img:my-0 prose-img:rounded-none prose-img:shadow-none
              prose-p:my-0 prose-p:leading-relaxed
              prose-li:text-zinc-600 dark:prose-li:text-zinc-300
            "
            >
              <MDXRemote
                source={articleData.mdxSource}
                components={mdxComponents}
              />
            </div>
          </section>

          {/* Fixed TOC sidebar — only visible on xl screens */}
          <TableOfContents tags={articleData.tags} />
        </div>
      </div>
    );
};

export default Article;