'use client';

import Link from "next/link";
import {GoDotFill} from "react-icons/go";
import HelpCenterSearchForm from "@/components/forms/HelpCenterSearchForm";
import {useCallback, useEffect, useState, JSX} from "react";
import {HelpCenterData, helpCenterData} from "@/data/HelpCenterData";
import HelpCenterList from "@/components/partials/_helpCenterList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ContentNotFound from "@/components/contentNotFound";
import FaqPageHeroSvg from "@/components/svgs/FaqPageHeroSvg";

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
const HelpCenterView = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");
    // Change the state type to ReadonlyArray<HelpCenterData> to match helpCenterData
    const [filteredHelps, setFilteredHelps] = useState<ReadonlyArray<HelpCenterData>>(helpCenterData);

    useEffect(() => {
        if (query.trim() === "") {
            setFilteredHelps(helpCenterData);
        } else {
            const searchTerm = query.toLowerCase();
            const filtered = helpCenterData.filter(
                (help) =>
                    help.title.toLowerCase().includes(searchTerm) ||
                    help.info.some(infoItem =>
                        infoItem.title.toLowerCase().includes(searchTerm)
                    )
            );
            setFilteredHelps(filtered);
        }
    }, [query]);

    const handleQueryChange = useCallback((newQuery: string) => {
        setQuery(newQuery);
    }, []);

    async function handleSubmit(values: { query: string }) {
        setIsLoading(true);
        try {
            console.log("Form submitted:", values);
            // Your submission logic here
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row w-full justify-between items-start gap-1 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6 md:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-start w-[100%] gap-10 md:gap-32">
                    <div className="w-full md:w-[50%] flex flex-col items-start">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                    <Link href="/">Home</Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li className="text-[#0B9944] dark:text-[#09b850]" aria-current="page">
                                    Help Center
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-[30.428px] md:text-[2.7rem] mb-[1.6rem] font-[700] leading-[1.25]">
                            How can we help you?
                        </h1>
                        {/* Search form */}
                        <div className="w-full">
                            <HelpCenterSearchForm
                                onQueryChange={handleQueryChange}
                                onSubmit={handleSubmit}
                                isLoading={isLoading}
                            />
                        </div>
                        {/* Suggestions */}
                        <ul className="flex flex-wrap justify-start gap-3 mt-5 text-sm">
                            <li className="text-[#606261] dark:text-[#c4c5c7]">Popular search:</li>
                            {helpCenterData.slice(0, 3).map((help: HelpCenterData, i: number) => (
                                <li key={i}>
                                    <Link
                                        href={help.info[0]?.url || "#"}
                                        className="hover:text-[#0B9944] hover:dark:text-green-500 underline transition-colors duration-500 ease-in-out"
                                    >
                                        {help.info[0]?.title || help.title},
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-[50%] flex justify-end">
                        <FaqPageHeroSvg />
                    </div>
                </div>
            </section>

            {/* Update the prop type in HelpCenterList to also accept ReadonlyArray */}
            <HelpCenterList helps={filteredHelps} query={query} />

            <div className="max-w-4xl w-full mx-auto xl:py-20 pb-0 sm:mt-0 px-6 md:px-0">
                {faqData.length > 0 ? (
                    <Accordion type="single" collapsible defaultValue="item-1">
                        {faqData.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border-none">
                                <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg"
                                >
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="my-[0.5rem] py-[0.2rem] px-[1rem] text-[#606261] dark:text-[#c4c5c7] font-normal text-lg mb-3">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <ContentNotFound details="No results found for your search." />
                )}
            </div>
        </div>
    );
};

export default HelpCenterView;