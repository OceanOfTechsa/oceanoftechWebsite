import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {JSX} from "react";
import {GoDotFill} from "react-icons/go";

export const metadata: Metadata = {
    title: "Blog",
};

const BlogPage = (): JSX.Element => {

    return (
        <div className="flex flex-col w-full">

            <section className="flex flex-col w-full justify-between items-start gap-3 max-w-7xl mx-auto px-6 py-16">
                <ul className="flex items-center space-x-2">
                    <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                        <Link href="/">Home</Link></li> <li className="text-black">•</li>
                    <li className="text-[#0B9944] dark:text-[#09b850]"
                        aria-current="page">Our Blog
                    </li>
                </ul>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center">
                    Our Blog
                </h1>

                <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                    Insights, tips, and expert knowledge about web development, design,
                    and digital innovation from OceanOfTech.
                </p>
            </section>

            <section className="w-full bg-gray-50 dark:bg-[#0f172a] py-16">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">


                    <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                        <Image
                            src = "/blog/blog.jpg"
                            alt="Blog Image"
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                How to Build a Modern Website
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Learn the fundamentals of building a fast, responsive and SEO-friendly website using modern technologies.
                            </p>
                            <Link
                                href="/blog/how-to-build-modern-website"
                                className="text-[#0B9944] dark:text-[#09b850] font-medium hover:underline"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                        <Image
                            src="/blog/blog.jpg"
                            alt="Blog Image"
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                Why SEO Matters in 2026
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Discover why search engine optimization is still one of the most powerful digital marketing tools.
                            </p>
                            <Link
                                href="/blog/why-seo-matters"
                                className="text-[#0B9944] dark:text-[#09b850] font-medium hover:underline"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BlogPage;
