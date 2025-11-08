"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ContentNotFound from "@/components/contentNotFound";

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

interface FaqListProps {
    faqs: FaqItem[];
    filteredFaqs: FaqItem[];
    query: string;
}

const FaqList: React.FC<FaqListProps> = ({ filteredFaqs}: FaqListProps) => {
    return (
        <div className="mt-32 max-w-5xl mx-auto xl:py-20 pb-0 sm:mt-0 px-6 md:px-0 w-full">
            {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible defaultValue="item-1">
                    {filteredFaqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border-none">
                            <AccordionTrigger className="border h-16 flex items-center py-[4rem] px-[1.25rem] p-3 rounded-sm cursor-pointer font-[600] focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black text-lg">
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
    );
};

export default FaqList;