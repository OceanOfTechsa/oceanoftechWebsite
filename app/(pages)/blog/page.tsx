import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { getSortedArticles } from "@/lib/articles";
import Blogs from "@/components/Blogs";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = async () => {
  const articles = getSortedArticles();
  const latestBlog = articles[0];
  const blogs = articles.slice(1);
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="w-full flex flex-col mb-10">
      {latestBlog && (
        <section className="flex flex-col w-full justify-between items-start gap-3 max-w-7xl mx-auto sm:mt-0 xl:pt-14 pb-0 mt-5 px-2 sm:px-0">
          <Link
            href={`/blog/${latestBlog.slug}`}
            className="rounded-sm hover:bg-gray-100 dark:hover:bg-[#202124] p-2 transition-colors duration-500 ease-in-out mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-start w-full"
          >
            {latestBlog.image && (
              <Image
                src={latestBlog.image}
                width={450}
                height={350}
                priority
                className="object-cover rounded-sm border"
                alt={latestBlog.title}
              />
            )}

            <div className="flex flex-col max-w-lg">
              <p className="text-xs mb-2">
                {formatDate(latestBlog.date)} • {latestBlog.readingTime}
              </p>
              <h4 className="mb-2">{latestBlog.title}</h4>
              <p>{latestBlog.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="relative h-6 w-6 rounded-full">
                  <Image
                    src={latestBlog.authorImage}
                    quality={100}
                    fill
                    className="object-cover rounded-full"
                    alt="author image"
                  />
                </div>
                <p className="mb-0 text-sm">{latestBlog.author}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {blogs.length > 0 && (
        <section className="border-t mt-10">
          <div className="max-w-7xl mx-auto flex flex-col my-5">
            <Blogs Blogs={blogs} />
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPage;