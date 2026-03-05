import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { getSortedArticles } from "@/lib/articles"
import Blogs from "@/components/Blogs";
import {Calendar, User} from "lucide-react";
import { Clock } from "lucide-react";
import readingTime from "reading-time";

export const metadata: Metadata = {
  title: "Blog",
};
const BlogPage = () => {
  const articles = getSortedArticles();
  const blogs = articles.slice(1);
  const latestBlog =  articles[0]
  return (
      <div className="w-full flex flex-col">
        {latestBlog && (
            <section className="flex flex-col w-full justify-between items-start gap-3 max-w-7xl mx-auto sm:mt-0 xl:pt-20 pb-0 mt-10 px-2 sm:px-0">
              <Link
                  href={`/blog/${latestBlog.slug}`}
                  className="rounded-sm hover:bg-gray-100 dark:hover:bg-[#202124] p-2 transition-colors duration-500 ease-in-out mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-start w-full"
              >
                <Image
                    src={latestBlog.image}
                    width={320}
                    height={350}
                    priority
                    className="object-cover rounded-sm border"
                    alt={latestBlog.title}
                />

                <div className="flex flex-col max-w-lg">
                  <p className="text-xs mb-2">{latestBlog.date}
                  </p>

                  <h4 className="mb-2">{latestBlog.title}</h4>

                  <p>{latestBlog.description}</p>


                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <p className="mb-0">{latestBlog.author}</p>
                  </div>
                </div>
              </Link>
            </section>
        )}

        {blogs && (
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