"use client";

import React, {JSX, useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Search, Table2, X, GripHorizontal} from "lucide-react";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle} from "@/components/ui/empty"; // ShadCN empty state
import {FaBookReader} from "react-icons/fa";

interface BlogsPageProps {
    Blogs: any[],
    basePath?: string
}

type viewType = "grid" | "table";

const Blogs = ({Blogs, basePath}: BlogsPageProps): JSX.Element => {
    // Validate localStorage
    const storedView = localStorage.getItem("BlogsView");
    const initialView: viewType = storedView === "grid" || storedView === "table" ? (storedView as viewType) : "table";

    const [view, setView] = useState<viewType>(initialView);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCat, setSelectedCat] = useState<string>("All");

    const Categories = [
        "All",
        ...Array.from(new Set(Blogs.map((blog) => blog.category))),
    ];

    // Persist view changes
    const toggleView = (newView: viewType) => {
        setView(newView);
        localStorage.setItem("BlogsView", newView);
    };

    // Filter blogs
    const filteredBlogs = Blogs.filter((blog) => {
        const matchesCategory =
            selectedCat === "All" || blog.category.toLowerCase() === selectedCat.toLowerCase();
        const matchesSearch =
            blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full px-4 sm:px-0">
                {/* LEFT SECTION — Buttons (collapse on search) */}
                <div
                    className={cn(
                        "flex items-center gap-2 transition-all duration-300 ease-in-out overflow-hidden",
                        searchExpanded ? "w-0 opacity-0" : "w-full opacity-100",
                    )}
                >
                    {/* MOBILE */}
                    <div className="flex sm:hidden w-full">
                        <Select
                            value={selectedCat}
                            onValueChange={(value) => setSelectedCat(value)}
                        >
                            <SelectTrigger size="sm" className="rounded-sm">
                                <SelectValue placeholder="All Posts"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {Categories.map((category: string, index: number) => (
                                        <SelectItem
                                            value={category}
                                            key={index}
                                            className="capitalize"
                                        >
                                            {category === "All" ? "All Posts" : category}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden sm:flex gap-2">
                        {Categories.map((cat: string, index: number) => (
                            <Button
                                variant={selectedCat === cat ? "default" : "outline"}
                                className={cn(
                                    "rounded-sm h-[30px] capitalize",
                                    selectedCat === cat
                                        ? "bg-[#0B9944] hover:bg-[#09b850] text-white"
                                        : "bg-transparent",
                                )}
                                key={index}
                                onClick={() => setSelectedCat(cat)}
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex-1 flex items-center justify-end gap-2 w-full">
                    {/* MOBILE */}
                    <div className="sm:hidden flex items-center gap-2 w-full justify-end">
                        {searchExpanded ? (
                            <div className="transition-all duration-300 ease-in-out flex items-center gap-2 w-full">
                                <div className="relative w-full">
                                    <div
                                        className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                        <Search className="size-4"/>
                                        <span className="sr-only">Search</span>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Search Blog"
                                        className="pl-8 rounded-sm h-[30px] w-full"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <X
                                        className="size-4 absolute right-2 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-muted-foreground hover:bg-gray-100 dark:hover:bg-[#202124] dark:text-white"
                                        onClick={() => setSearchExpanded(false)}
                                    />
                                </div>

                                <Button
                                    aria-label="Toggle view"
                                    size="icon-sm"
                                    variant="outline"
                                    className="rounded-sm p-0"
                                    onClick={() =>
                                        toggleView(view === "table" ? "grid" : "table")
                                    }
                                >
                                    {view === "table" ? (
                                        <Table2 className="transition-all duration-300 ease-in-out"/>
                                    ) : (
                                        <GripHorizontal className="transition-all duration-300 ease-in-out"/>
                                    )}
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Button
                                    variant="outline"
                                    size="icon-sm"
                                    className="rounded-sm"
                                    onClick={() => setSearchExpanded(true)}
                                >
                                    <Search className="w-4 h-4"/>
                                </Button>
                                <Button
                                    aria-label="Toggle view"
                                    size="icon-sm"
                                    variant="outline"
                                    className="rounded-sm p-0"
                                    onClick={() =>
                                        toggleView(view === "table" ? "grid" : "table")
                                    }
                                >
                                    {view === "table" ? (
                                        <Table2 className="transition-all duration-300 ease-in-out"/>
                                    ) : (
                                        <GripHorizontal className="transition-all duration-300 ease-in-out"/>
                                    )}
                                </Button>
                            </>
                        )}
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden sm:flex items-center gap-2 w-full justify-start">
                        <div
                            className="transition-all duration-300 ease-in-out w-full relative flex-1 min-w-[300px] max-w-[500px]">
                            <div
                                className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <Search className="size-4"/>
                                <span className="sr-only">Search</span>
                            </div>
                            <Input
                                type="text"
                                placeholder="Search Blog"
                                className="pl-8 rounded-sm h-[30px] w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <X
                                    className="size-4 absolute right-2 top-1/2 -translate-y-1/2 z-50 cursor-pointer text-muted-foreground hover:bg-gray-100 dark:hover:bg-[#202124] dark:text-white"
                                    onClick={() => setSearchQuery("")}
                                    role="button"
                                />
                            )}
                        </div>

                        <Button
                            aria-label="Toggle view"
                            size="icon-sm"
                            variant="outline"
                            className="rounded-sm"
                            onClick={() => toggleView(view === "table" ? "grid" : "table")}
                        >
                            {view === "table" ? (
                                <Table2 className="transition-all duration-300 ease-in-out"/>
                            ) : (
                                <GripHorizontal className="transition-all duration-300 ease-in-out"/>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* VIEWS */}
            <div className="-mt-3 w-full px-2 sm:px-0">
                {filteredBlogs.length === 0 ? (
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <FaBookReader/>
                            </EmptyMedia>
                            <EmptyTitle>No blogs found</EmptyTitle>
                            <EmptyDescription>
                                No blog post match any of your filters. Try adjusting your
                                search or category filter.
                            </EmptyDescription>
                        </EmptyHeader>
                    </Empty>
                ) : view === "table" ? (
                    <div className="mt-10">
                        <Table>
                            <TableBody>
                                {filteredBlogs.map((blog) => (
                                    <TableRow
                                        key={blog.title}
                                        className="hover:bg-transparent group cursor-pointer last:border-none"
                                        onClick={() => (window.location.href=`/blog/${blog.slug}`)}
                                    >
                                        <TableCell className="w-[920px] py-4 group-hover:underline">
                      <span className="text-lg font-semibold">
                        {blog.title}
                      </span>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <div className="relative h-6 w-6 rounded-full overflow-hidden">
                                                <Image
                                                    src="/team/Mondli.jpg"
                                                    quality={100}
                                                    fill
                                                    className="object-cover rounded-full"
                                                    alt="avatar"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell className="w-[100px] py-4">
                                            <Badge
                                                variant="outline"
                                                className="text-xs rounded-full text-[#606261] dark:text-[#c4c5c7] capitalize"
                                            >
                                                {blog.category}
                                            </Badge>
                                        </TableCell>
                                        <TableCell
                                            className="text-right py-4 text-[#606261] dark:text-[#c4c5c7] group-hover:text-black">
                                            {blog.date}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-5">
                        {filteredBlogs.map((blog, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="rounded-sm hover:bg-gray-100 dark:hover:bg-[#202124] p-3 transition-colors duration-500 ease-in-out mt-10 flex flex-col gap-5 items-center justify-start w-full"
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
                                    <p className="text-xs mb-2">
                                        13 February 2024 • 22 minutes read
                                    </p>
                                    <h4 className="mb-2">{blog.title}</h4>
                                    <p className="mb-0">
                                        A detailed account of the February 12 outage in us-east-2,
                                        what caused it, and the steps we are taking to prevent it
                                        from happening again
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;