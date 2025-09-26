'use client';

import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import HelpCenterSearchForm from '@/components/forms/HelpCenterSearchForm';
import { HelpCenterData, helpCenterData } from '@/data/HelpCenterData';
import React, { JSX, useCallback, useMemo, useState } from 'react';
import WebDevelopmentView from '@/components/partials/help-article-views/_WebDevelopmentView';
import SEOView from '@/components/partials/help-article-views/_SeoView';
import WebDesignView from '@/components/partials/help-article-views/_WebDesignView';
import HostingView from '@/components/partials/help-article-views/_HostingView';
import MaintenanceView from '@/components/partials/help-article-views/_MaintenanceView';
import DefaultView from '@/components/partials/help-article-views/_DefaultView';

interface HelpArticleDetailsViewProps {
    title: string;
}

interface ArticleViewProps {
    article: HelpCenterData;
    title: string;
}

const HelpArticleDetailsView = ({ title }: HelpArticleDetailsViewProps): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');

    const handleQueryChange = useCallback((newQuery: string) => {
        setQuery(newQuery);
    }, []);

    const handleSubmit = useCallback(async (values: { query: string }) => {
        setIsLoading(true);
        try {
            console.log('Form submitted:', values);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getArticleView = (): React.ComponentType<ArticleViewProps> => {
        if (!title) return DefaultView;

        const normalizedTitle = title.toLowerCase().replace(/-/g, ' ');

        const viewMap: { [key: string]: React.ComponentType<ArticleViewProps> } = {
            'web development': WebDevelopmentView,
            'web dev': WebDevelopmentView,
            'digital marketing': SEOView,
            'seo': SEOView,
            'web design': WebDesignView,
            'ui ux design': WebDesignView,
            'hosting': HostingView,
            'infrastructure': HostingView,
            'support': MaintenanceView,
            'maintenance': MaintenanceView,
            'business email': MaintenanceView,
        };

        const matchedKey = Object.keys(viewMap).find((key) => normalizedTitle.includes(key));
        return matchedKey ? viewMap[matchedKey] : DefaultView;
    };

    const getCurrentArticle = (): HelpCenterData | null => {
        if (!title) return null;

        const decodedTitle = decodeURIComponent(title.replace(/-/g, ' ')).toLowerCase();
        let article = helpCenterData.find((help) => help.title.toLowerCase() === decodedTitle);
        if (!article) {
            article = helpCenterData.find(
                (help) =>
                    help.title.toLowerCase().includes(decodedTitle) ||
                    decodedTitle.includes(help.title.toLowerCase()) ||
                    help.info.some((infoItem) => infoItem.title.toLowerCase().includes(decodedTitle))
            );
        }

        return article || null;
    };

    const ArticleViewComponent = getArticleView();
    const currentArticle = getCurrentArticle();

    const formatUrl = (title: string): string => {
        return `/help-center/${title.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <div className="flex flex-col w-full">
            <section className="flex flex-col md:flex-row w-full justify-between items-start gap-1 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6 md:px-0">
                <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-10 md:gap-32">
                    <div className="w-full md:w-[50%] flex flex-col items-start">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                    <Link href="/">Home</Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li className="hover:text-[#0b9944] dark:hover:text-[#09b850] transition-colors duration-500 ease-in-out">
                                    <Link href="/help-center">Help Center</Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li
                                    className="text-[#0B9944] dark:text-[#09b850] capitalize"
                                    aria-current="page"
                                >
                                    {currentArticle?.title || title.replace(/-/g, ' ')}
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-[30.428px] md:text-[2.7rem] mb-[1.6rem] font-[700] leading-[1.25] capitalize">
                            {currentArticle?.title || title.replace(/-/g, ' ')}
                        </h1>

                        {/* Article description */}
                        {currentArticle?.description && (
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                {currentArticle.description}
                            </p>
                        )}

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
                            {helpCenterData.slice(0, 3).map((help, i) => (
                                <li key={i}>
                                    <Link
                                        href={formatUrl(help.title)}
                                        className="hover:text-[#0B9944] hover:dark:text-green-500 underline transition-colors duration-500 ease-in-out"
                                    >
                                        {help.info[0]?.title || help.title},
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-[50%] flex justify-end" />
                </div>
            </section>

            <section className="max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6 md:px-0">
                {currentArticle ? (
                    <ArticleViewComponent article={currentArticle} title={title} />
                ) : (
                    <div className="text-center text-gray-500">Article not found or loading...</div>
                )}
            </section>
        </div>
    );
};

export default HelpArticleDetailsView;