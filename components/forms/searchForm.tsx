"use client";

import { Button } from "@/components/ui/button";
import { FaLightbulb } from "react-icons/fa6";
import { useSearch } from "@/contexts/SearchContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HiBriefcase } from "react-icons/hi2";
import { type Career, careers } from "@/components/conts";
import { AnimatePresence, motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";

const noResultsMessages = [
    (term: string) => `No matches found for '${term}'.`,
    (term: string) => `We couldn’t find anything for '${term}'.`,
    (term: string) => `Oops, nothing came up for '${term}'.`,
    (term: string) => `No careers matched '${term}'.`,
    (term: string) => `Hmm… no results for '${term}'. Try another term?`,
    (term: string) => `Couldn’t locate any careers for '${term}'.`,
    (term: string) => `No luck with '${term}'. Try something else?`,
    (term: string) => `'${term}' didn’t return any results.`,
];

const SearchForm = () => {
    const { searchFormOpen, closeSearchForm } = useSearch();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Career[]>([]);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const randomNoResultMessage = query
        ? noResultsMessages[Math.floor(Math.random() * noResultsMessages.length)](query)
        : "No results found.";

    useEffect(() => {
        const stored = sessionStorage.getItem("recentSearches");
        if (stored) setRecentSearches(JSON.parse(stored));
    }, [recentSearches]);

    useEffect(() => {
        document.body.style.overflow = searchFormOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [searchFormOpen]);

    useEffect(() => {
        const trimmed = query.trim().toLowerCase();
        setLoading(true);

        const delay = setTimeout(() => {
            if (!trimmed) {
                setResults([]);
                setLoading(false);
                return;
            }

            if (trimmed === "all") {
                setResults(careers);
            } else {
                const matched = careers.filter((career) =>
                    career.title.toLowerCase().includes(trimmed) ||
                    career.category.toLowerCase().includes(trimmed) ||
                    career.location.city.toLowerCase().includes(trimmed) ||
                    career.location.country.toLowerCase().includes(trimmed) ||
                    career.skills.some((skill) => skill.toLowerCase().includes(trimmed))
                );
                setResults(matched);
            }

            if (trimmed !== "all") {
                const updated = [
                    trimmed,
                    ...recentSearches.filter((q) => q !== trimmed),
                ].slice(0, 3);
                setRecentSearches(updated);
                sessionStorage.setItem("recentSearches", JSON.stringify(updated));
            }

            setLoading(false);
        }, 300);

        return () => clearTimeout(delay);
    }, [query, recentSearches]);

    const removeSearch = (term: string) => {
        const updated = recentSearches.filter((t) => t !== term);
        setRecentSearches(updated);
        sessionStorage.setItem("recentSearches", JSON.stringify(updated));
    };

    const clearAllSearches = () => {
        setRecentSearches([]);
        sessionStorage.removeItem("recentSearches");
    };

    return (
        <AnimatePresence>
            {searchFormOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-full backdrop-blur-xs bg-black/30 w-full fixed top-0 left-0 z-[80] flex items-start justify-center p-36 px-5 mx-auto xl:px-32 overflow-y-scroll"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        className="flex flex-col w-full max-w-3xl relative max-h-full"
                    >
                        <div className="bg-white dark:bg-[#171717] shadow-md rounded-md w-full">
                            {/* Search Input */}
                            <div className="border-b p-4">
                                <label htmlFor="query" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="M21 21l-4.3-4.3" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="query"
                                        name="query"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="w-full py-2 px-4 pl-11 text-sm border-none bg-transparent rounded-lg focus:outline-none dark:text-gray-300"
                                        placeholder="Search careers by title, category, skills, or location..."
                                    />
                                </div>
                            </div>

                            {/* Results */}
                            <div className="px-5 pt-4">
                                <h4 className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                                    {query !== "" ? (<span>Career Results</span>) : (<span className="italic mb-2">Search results will appear here</span>)}{" "}
                                    {loading && (
                                        <span>
                                            <svg width="12" height="12" fill="currentColor" className="mr-2 animate-spin"
                                                 viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                                            </svg>
                                        </span>
                                    )}
                                </h4>
                                {!loading && results.length > 0 ? (
                                    <ul className="space-y-3 pb-4">
                                        {results.map((career) => (
                                            <li key={career.slug} className="group">
                                                <Link
                                                    href={`/careers/${career.slug}`}
                                                    onClick={closeSearchForm}
                                                    className="flex flex-col sm:flex-row sm:items-center gap-x-2 font-light text-gray-500 transition-all duration-100 ease-in-out mb-2 text-sm hover:text-sky-500"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <HiBriefcase />
                                                        <span className="font-semibold group-hover:text-sky-500">
                                                            {career.title}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs text-gray-400 flex items-center">
                                                        {career.location.city}, {career.location.country}, {career.type}  
                                                        <span className="px-[0.55rem] py-[0.10rem]  flex items-center justify-center text-[0.75em] gap-2">
                                                            <FiUsers /> {career.candidates}
                                                        </span> 
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    query !== "" &&
                                    !loading && (
                                        <p className="flex items-center gap-x-2 text-sm font-semibold text-rose-500 italic mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-ban font-bold"
                                                 viewBox="0 0 16 16">
                                                <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                                            </svg>
                                            {randomNoResultMessage}
                                        </p>
                                    )
                                )}
                            </div>

                            {/* Recent Searches */}
                            {recentSearches.length > 0 && (
                                <div className="border-t px-5 pt-4 pb-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-xs text-gray-500 dark:text-gray-400">
                                            Recent Searches
                                        </h4>
                                        <button
                                            onClick={clearAllSearches}
                                            className="text-xs text-red-500 hover:underline cursor-pointer"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
                                        {recentSearches.map((term, idx) => (
                                            <li key={idx} className="flex justify-between items-center">
                                                <button
                                                    onClick={() => setQuery(term)}
                                                    className="hover:underline cursor-pointer"
                                                >
                                                    • {term}
                                                </button>
                                                <button
                                                    onClick={() => removeSearch(term)}
                                                    className="text-xs text-gray-500 hover:text-red-500 cursor-pointer"
                                                >
                                                    Remove
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Footer Tip */}
                            <div className="px-5 py-3 text-xs text-gray-500 dark:text-gray-400 border-t flex items-center gap-2">
                                <FaLightbulb className="text-yellow-500" />
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        Type{" "}
                                        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                                            All
                                        </code>{" "}
                                        to get a full list of all careers.
                                    </div>
                                    <div>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={closeSearchForm}
                                            className="cursor-pointer text-xs p-2"
                                        >
                                            X
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchForm;