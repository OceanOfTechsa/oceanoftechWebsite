import { JSX } from "react";
import { HelpCenterData } from "@/data/HelpCenterData";
import ContentNotFound from "@/components/contentNotFound";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { HelpCenterIcon } from "@/components/icons/helpCenterIcons";

interface HelpListProps {
    helps: ReadonlyArray<HelpCenterData>;
    query: string;
}

const HelpCenterList = ({ helps, query }: HelpListProps): JSX.Element => {
    return (
        <div className="max-w-7xl mx-auto xl:py-20 pb-0 sm:mt-0 px-4 md:px-0 w-full">
            {helps.length > 0 ? (
                <div>
                    {query && (
                        <p className="mb-4 text-lg">
                            Found {helps.length} result(s) for &quot;{query}`&quot;
                        </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {helps.map((help, index) => (
                            <div key={index} className="p-6 border rounded-sm dark:border-gray-700 dark:bg-[#191b1d]  transition-shadow duration-300">
                                <div className="w-12 h-12 flex items-center justify-center bg-[#09b850] text-white rounded-sm mb-4">
                                    <HelpCenterIcon title={help.title} className="text-lg" size={20} />
                                </div>
                                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                                    {help.title}
                                </h3>
                                <div className="space-y-2">
                                    {help.info.map((infoItem, infoIndex) => (
                                        <Link
                                            key={infoIndex}
                                            href={infoItem.url}
                                            className="flex items-center gap-2 py-2 text-[15.008px] font-[600] text-gray-700 dark:text-gray-300 hover:text-[#09b850] dark:hover:text-[#09b850] transition-colors duration-200"
                                        >
                                            <ChevronRight size={16} />
                                            <span>{infoItem.title}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <ContentNotFound details="No results found for your search." />
            )}
        </div>
    );
};

export default HelpCenterList;