"use client";

import { useEffect, useState } from "react";
import { Linkedin, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {Badge} from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

type Heading = {
  id: string;
  text: string;
  level: number;
};

function useHeadings() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const article = document.querySelector("#article-body");
    if (!article) return;

    const nodes = article.querySelectorAll("h2, h3");
    const items: Heading[] = [];

    nodes.forEach((node) => {
      const el = node as HTMLElement;
      if (!el.id) {
        el.id =
          el.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") ??
          Math.random().toString(36).slice(2);
      }
      items.push({
        id: el.id,
        text: el.textContent?.replace(/^\p{Emoji}\s*/u, "") ?? "",
        level: parseInt(el.tagName[1]),
      });
    });

    setHeadings(items);
    setLoaded(true);
  }, []);

  return { headings, loaded };
}

function useActiveHeading(headings: Heading[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type HeadingGroup = {
  parent: Heading;
  children: Heading[];
};

function groupHeadings(headings: Heading[]): HeadingGroup[] {
  const groups: HeadingGroup[] = [];
  let current: HeadingGroup | null = null;

  for (const h of headings) {
    if (h.level === 2) {
      current = { parent: h, children: [] };
      groups.push(current);
    } else if (h.level === 3 && current) {
      current.children.push(h);
    }
  }

  return groups;
}

function TOCSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-3 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <div className="ml-3 pl-3 border-l dark:border-zinc-700 space-y-2 mt-1">
        <Skeleton className="h-2.5 w-2/3" />
        <Skeleton className="h-2.5 w-1/2" />
      </div>
      <Skeleton className="h-3 w-4/5" />
      <div className="ml-3 pl-3 border-l dark:border-zinc-700 space-y-2 mt-1">
        <Skeleton className="h-2.5 w-3/5" />
      </div>
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-3 w-3/4" />
      <div className="ml-3 pl-3 border-l dark:border-zinc-700 space-y-2 mt-1">
        <Skeleton className="h-2.5 w-1/2" />
        <Skeleton className="h-2.5 w-2/3" />
      </div>
    </div>
  );
}

type TableOfContentsProps = {
  tags?: string[];
};

export function TableOfContents({ tags }: TableOfContentsProps) {
  const { headings, loaded } = useHeadings();
  const activeId = useActiveHeading(headings);
  const groups = groupHeadings(headings);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (groups.length === 0) return;
    const initial: Record<string, boolean> = {};
    groups.forEach((g) => { initial[g.parent.id] = true; });
    setOpenSections(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headings.length]);

  const toggle = (id: string) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleShare = (platform: "twitter" | "linkedin") => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank");
    } else {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="hidden xl:block w-80 shrink-0">
      <div className="sticky top-24 flex flex-col gap-8">

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 6).map((tag) => (
              <Badge key={tag} variant={'outline'} className={'text-xs rounded-full text-[#606261] dark:text-[#c4c5c7]'}>
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Table of contents */}
        <nav aria-label="Table of contents">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">
            On this page
          </p>

          {!loaded ? (
            <TOCSkeleton />
          ) : groups.length > 0 ? (
            <ul className="space-y-1">
              {groups.map((group) => {
                const isParentActive =
                  activeId === group.parent.id ||
                  group.children.some((c) => c.id === activeId);
                const isOpen = openSections[group.parent.id] ?? true;

                return (
                  <li key={group.parent.id}>
                    {group.children.length > 0 ? (
                      <Collapsible
                        open={isOpen}
                        onOpenChange={() => toggle(group.parent.id)}
                      >
                        <div className="flex items-center justify-between gap-1 group/item">
                          <button
                            onClick={() => scrollTo(group.parent.id)}
                            className={`flex-1 cursor-pointer text-left text-sm py-1 leading-snug transition-colors duration-150 ${isParentActive
                              ? "text-[#0B9944] font-medium"
                              : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                            }`}
                          >
                            {group.parent.text}
                          </button>

                          <CollapsibleTrigger asChild>
                            <button aria-label="Toggle section" className="p-0.5 cursor-pointer rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors shrink-0">
                              <ChevronDown size={13} className={`transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`} />
                            </button>
                          </CollapsibleTrigger>
                        </div>

                        <CollapsibleContent>
                          <ul className="mt-1 ml-3 border-l dark:border-zinc-700 space-y-0.5 pl-3">
                            {group.children.map((child) => (
                              <li key={child.id}>
                                <button
                                  onClick={() => scrollTo(child.id)}
                                  className={`w-full cursor-pointer text-left text-xs py-1 leading-snug transition-colors duration-150 ${
                                    activeId === child.id
                                      ? "text-[#0B9944] font-medium"
                                      : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                                  }`}
                                >
                                  {child.text}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <button
                        onClick={() => scrollTo(group.parent.id)}
                        className={`w-full cursor-pointer text-left text-sm py-1 leading-snug transition-colors duration-150 ${
                          activeId === group.parent.id
                            ? "text-[#0B9944] font-medium"
                            : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                        }`}
                      >
                        {group.parent.text}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </nav>

        {/* Divider */}
        <div className="border-t dark:border-zinc-800" />

        {/* Share */}
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
            Share this article
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare("twitter")}
              aria-label="Share on X"
              className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              aria-label="Share on LinkedIn"
              className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={13} />
            </button>

            <button
              onClick={handleCopy}
              aria-label="Copy link"
              className="flex cursor-pointer items-center justify-center w-9 h-9 rounded-md border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors relative"
            >
              {copied ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
}