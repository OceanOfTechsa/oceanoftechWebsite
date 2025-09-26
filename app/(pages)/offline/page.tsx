import { Metadata } from "next";
import { JSX } from "react";
import ErrorPagesContent from "@/components/ErrorPagesContent";

export const metadata: Metadata = {
    title: `Offline`,
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const OfflinePage = () : JSX.Element => {
    return (
        <div className="w-full flex items-center justify-center relative">
            <h1 className="text-[15rem] sm:text-[20rem] font-semibold tracking-widest text-zinc-200 dark:text-[#1f1f1f]">Offline</h1>
            <ErrorPagesContent title="You are offline" subtitle="Your device appears to be offline. Check your connection and try again." question="Still need help?" />
        </div>
    )
}
export default OfflinePage;