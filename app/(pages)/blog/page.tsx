import Link from "next/link";
import { Metadata } from "next";
import React, { JSX } from "react";
import Image from "next/image";
import Blogs from "@/components/Blogs";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col">
      <section className="flex flex-col w-full justify-between items-start gap-3 max-w-7xl mx-auto sm:mt-0 xl:pt-20 pb-0 mt-10 px-2 sm:px-0">
        <Link
          href="#"
          className="rounded-sm hover:bg-gray-100 dark:hover:bg-[#202124] p-2 transition-colors duration-500 ease-in-out mt-10 flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-start w-full"
        >
          <Image
            src="/thumb.webp"
            quality={100}
            width={547}
            height={564}
            priority
            className="object-cover rounded-sm border"
            alt="blog image"
          />
          <div className="flex flex-col max-w-lg">
            <p className="text-xs mb-2">13 February 2024 • 22 minutes read</p>
            <h4 className="mb-2">Supabase incident on February 12, 2026</h4>
            <p className="">
              A detailed account of the February 12 outage in us-east-2, what
              caused it, and the steps we are taking to prevent it from
              happening again A detailed account of the February 12 outage in
              us-east-2, what caused it, and the steps we are taking to prevent
              it from happening again
            </p>
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 rounded-full">
                <Image
                  src="/team/Mondli.jpg"
                  quality={100}
                  fill
                  className="object-cover rounded-full"
                  alt="blog image"
                />
              </div>
              <p className="mb-0">Sithuliso Zulu</p>
            </div>
          </div>
        </Link>
      </section>

      <section className="border-t mt-10">
        <div className="max-w-7xl mx-auto flex flex-col my-5">
          <Blogs />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
