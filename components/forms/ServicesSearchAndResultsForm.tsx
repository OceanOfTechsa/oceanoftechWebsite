"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MoveRight,
  CodeXml,
  Scale3d,
  Server,
  PenTool,
  Mail,
  Headset,
  Workflow,
  HandHelping
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type Service, servicesData } from "@/lib/ServicesData";

export default function ServicesSearchSection() {
  const [query, setQuery] = useState("");

  // Live filter: match title or description
  const filteredServices = useMemo(() => {
    if (!query.trim()) return servicesData;

    const q = query.toLowerCase();
    return servicesData.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );
  }, [query]);

  const staticSuggestions = [
    servicesData[0],
    servicesData[1],
    servicesData[6],
  ];

  const iconMap: Record<Service["iconName"], React.ComponentType<any>> = {
    "code-xml": CodeXml,
    "scale-3d": Scale3d,
    server: Server,
    "pen-tool": PenTool,
    mail: Mail,
    search: Search,
    headset: Headset,
    workflow: Workflow,
    "HandHelping": HandHelping,
  };

  return (
    <section className="xl:pt-20 pb-0 mt-10 sm:mt-0 w-full max-w-7xl mx-auto mb-20">
      <div className="container mx-auto px-4">
        {/* Search Bar – Centered & Not Full Width */}
        <div className="max-w-2xl mb-12">
          <form onSubmit={(e) => e.preventDefault()} className="bg-transparent border rounded-sm flex items-center p-2 w-full gap-2">
            <Input
              type="text"
              placeholder="Search our services..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus-visible:ring-0 focus-visible:outline-none shadow-none outline-none ring-0 bg-transparent dark:bg-[#161618]"
            />
          
           
            {
            query ? 
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-white rounded-[0.2rem] px-4 py-2 transition cursor-pointer bg-[#202124] hover:bg-[#414245]"
              >
                Clear
              </button>
            
            :
            <Button type="button" className="text-white rounded-[0.2rem] px-4 py-2 transition cursor-pointer bg-[#202124] hover:bg-[#414245]">
                <Search />
            </Button>
            }
          </form>

          {/* Static Suggestion Chips – Always Visible */}
          <div className="flex flex-wrap gap-3 justify-start items-center mt-3">
            Suggestions: 
            {staticSuggestions.map((s) => {
              const Icon = iconMap[s.iconName];
              return (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group flex items-center gap-3 px-5 py-1 bg-gray-50 dark:bg-[#1a1a1c] border border-gray-200 dark:border-[#333335] rounded-full hover:bg-[#09b850]/10 hover:border-[#09b850]/50 transition-all duration-300"
                >
                  <Icon className="h-4 w-4 text-[#09b850] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {s.title.split(" ")[0] === "Websites" ? "Websites" : s.title.split(" & ")[0]}
                  </span>
                  <MoveRight className="h-4 w-4 text-[#09b850] opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>

          {query && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Showing {filteredServices.length} of {servicesData.length} services
              {query && filteredServices.length < servicesData.length && (
                <button
                  onClick={() => setQuery("")}
                  className="ml-3 text-[#09b850] hover:underline font-medium cursor-pointer p-0 hover:p-2 hover:bg-transparent"
                >
                  Clear filter
                </button>
              )}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
          {filteredServices.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No services found for "<span className="font-semibold text-[#09b850]">{query}</span>"
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-4 text-[#09b850] hover:underline font-medium cursor-pointer"
              >
                ← Show all services
              </button>
            </div>
          ) : (
            filteredServices.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="flex flex-row h-full p-6 pb-2 border rounded-lg shadow-sm hover:shadow-md relative group hover:border-[#09b850]/50 hover:bg-[#09b850]/5 transition-all duration-500 group"
                >
                  <div className="bg-gray-100 dark:bg-[#202124] absolute top-0 -mt-5 rounded-full p-3 left-0 ml-6 text-[#09b850] group-hover:bg-[#09b850] dark:group-hover:bg-[#09b850] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex flex-col mt-8 w-full">
                    <h3 className="mb-3 text-2xl lg:text-3xl font-bold group-hover:text-[#09b850] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-gray-600 dark:text-[#c4c5c7] line-clamp-3">
                      {service.description}
                    </p>
                    <p className="text-[#09b850] flex items-center gap-2 font-semibold mt-auto">
                      Read more
                      <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition duration-300" />
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}