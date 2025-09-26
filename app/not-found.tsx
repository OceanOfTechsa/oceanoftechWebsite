import {JSX} from "react";
import ErrorPagesContent from "@/components/ErrorPagesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
};

const NoFoundPage = (): JSX.Element => {
    return (
        <div className="w-full flex items-center justify-center relative">
            <h1 className="text-[15rem] sm:text-[20rem] font-semibold tracking-widest text-zinc-200 dark:text-[#1f1f1f]">404</h1>
            <ErrorPagesContent title="Page not found" subtitle="We couldn’t find the page you were looking for. It might have been moved, deleted, or never existed." question="Still need help" />
        </div>
    )
}
export default NoFoundPage;