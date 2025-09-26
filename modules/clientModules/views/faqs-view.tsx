"use client";

import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { JSX, useState, useEffect, useCallback } from "react";
import FaqPageHeroSvg from "@/components/svgs/FaqPageHeroSvg";
import FaqSearchForm from "@/components/forms/faqSearchForm";
import FaqList from "@/components/partials/_faqList";
import Image from "next/image";

// Sample FAQ data
const faqData = [
    {
        id: "item-1",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        id: "item-2",
        question: "How do I use the search feature?",
        answer: "Enter a keyword in the input field and click the search button to filter the FAQs.",
    },
    {
        id: "item-3",
        question: "Does it support dark mode?",
        answer: "Yes, the component adjusts styles for dark mode automatically. Need help with something? Here are our most frequently asked questions. Need help with something? Here are our most frequently asked questions.",
    },
];

const FAQView = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    const [filteredFaqs, setFilteredFaqs] = useState(faqData);

    // Filter FAQs based on query - useCallback to prevent unnecessary re-renders
    useEffect(() => {
        if (query.trim() === "") {
            setFilteredFaqs(faqData);
        } else {
            const filtered = faqData.filter(
                (faq) =>
                    faq.question.toLowerCase().includes(query.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredFaqs(filtered);
        }
    }, [query]);

    // Use useCallback to memoize the function and prevent infinite re-renders
    const handleQueryChange = useCallback((newQuery: string) => {
        setQuery(newQuery);
    }, []);

    async function handleSubmit(values: { query: string }) {
        setIsLoading(true);
        try {
            console.log("Form submitted:", values);
            // You can add additional submission logic here if needed
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6 md:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-start w-[100%] gap-10 md:gap-32">
                    <div className="w-full md:w-[50%] flex flex-col items-start">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                    <Link href="/">Home</Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">
                                    FAQ
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-[41.407px] md:text-[3.6rem] mb-[1.6rem] font-[700] leading-[1.25]">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-[#606261] dark:text-[#c4c5c7] font-normal text-lg">
                            Need help with something? Here are our most frequently asked questions.
                        </p>

                        {/* Search form */}
                        <div className="mt-2 w-full">
                            <FaqSearchForm
                                onQueryChange={handleQueryChange}
                                onSubmit={handleSubmit}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex justify-end">
                        <FaqPageHeroSvg />
                    </div>
                </div>
            </section>

            {/* FAQ List component */}
            <FaqList
                faqs={faqData}
                filteredFaqs={filteredFaqs}
                query={query}
            />

            <section className="pt-0 mb-20">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="bg-[#32a852]/10 rounded-[0.313rem] p-4 sm:p-[2.5rem]">
                        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                            {/* Avatar group */}
                            <ul className="flex items-start justify-center -space-x-7 mb-4 w-full">
                                <li className="relative w-[3.1875rem] h-[3.1875rem]">
                                    <Image
                                        className="rounded-full object-cover"
                                        src="/06.jpg"
                                        alt="avatar"
                                        width={36}
                                        height={36}
                                        quality="75"
                                    />
                                </li>
                                <li className="relative w-[4rem] h-[4rem]">
                                    <Image
                                        className="rounded-full object-cover"
                                        src="/05.jpg"
                                        alt="avatar"
                                        width={44}
                                        height={44}
                                        quality="75"
                                    />
                                </li>
                                <li className="relative w-[5rem] h-[5rem] z-20">
                                    <Image
                                        className="rounded-full object-cover"
                                        src="/02.jpg"
                                        alt="avatar"
                                        width={60}
                                        height={60}
                                        quality="75"
                                    />
                                </li>
                                <li className="relative w-[4rem] h-[4rem] z-10">
                                    <Image
                                        className="rounded-full object-cover"
                                        src="/03.jpg"
                                        alt="avatar"
                                        width={44}
                                        height={44}
                                        quality="75"
                                    />
                                </li>
                                <li className="relative w-[3.1875rem] h-[3.1875rem]">
                                    <Image
                                        className="rounded-full object-cover"
                                        src="/06.jpg"
                                        alt="avatar"
                                        width={36}
                                        height={36}
                                        quality="75"
                                    />
                                </li>
                            </ul>

                            {/* Title */}
                            <h4 className="text-[2rem] font-[700] leading-[1.25] text-[#202124] dark:text-white mb-2">Still have a question?</h4>
                            <p className="dark:text-[#c4c5c7] mb-[1rem] sm:mb-[1.6rem] font-semibold max-w-2xl">
                                We'd be happy to help you with any questions you have! Please let us know what you're looking for, and we'll do our best to assist you.
                            </p>

                            {/* Button */}
                            <Link
                                href="/contact"
                                className="bg-[#202124] hover:bg-[#3c3e41] text-white px-6 py-3 rounded-sm font-medium transition-colors"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQView;