import Link from "next/link";
import { notFound } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { Calendar, User } from "lucide-react";
import { getArticleData } from "@/lib/articles";
import Image from "next/image";
import { Clock } from "lucide-react";

const Article = async ({params,}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    if (!slug) return notFound();
    const articleData = await getArticleData(slug);
    if (!articleData) return notFound();

    return (
        <div className="flex flex-col w-full">

            <section className="flex flex-col w-full justify-center items-center max-w-4xl mx-auto px-6 mt-16">

                <nav className="mb-6" aria-label="breadcrumb">

                    <ol className="flex items-center gap-2 text-sm">
                        <li className="hover:text-[#0b9944] transition-colors">
                            <Link href="/">Home</Link>
                        </li>
                        <GoDotFill size={10} className="mt-1" />
                        <li className="hover:text-[#0b9944] transition-colors">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <GoDotFill size={10} className="mt-1" />
                        <li
                            className="text-[#0B9944]"
                            aria-current="page"
                        >
                            {articleData.title}
                        </li>
                    </ol>
                </nav>
                {articleData.category && (
                    <span className="inline-block bg-gray-200 dark:bg-[#292a2d] text-[#606261] dark:text-[#c4c5c7] text-sm rounded-sm font-semibold px-3 py-1 mb-4">
            {articleData.category}
          </span>
                )}

                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center max-w-3xl">
                    {articleData.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mt-6">

                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{articleData.date}</span>
                    </div>

                    {articleData.author && (
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{articleData.author}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{articleData.readingTime}</span>
                    </div>

                </div>

            </section>

            <section className="max-w-3xl mx-auto px-6 mt-16 mb-24">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: articleData.contentHtml,
                    }}
                />
            </section>
        </div>
    );
};

export default Article;