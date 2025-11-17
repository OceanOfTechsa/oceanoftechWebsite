'use client';

import TypedText from "@/components/animations/TypedText";
import Image from "next/image";

const Loading = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center gap-2 z-50">
            <Image
                src="/logo.png"
                width={35}
                height={35}
                quality={100}
                priority
                loading="eager"
                alt="Company logo"
                className="object-cover animate-spin [animation-duration:4s]"
            />

            <TypedText
                 strings={[
                "Loading your experience…",
                "Preparing amazing content…",
                "Almost there…",
                "Getting everything ready…",
                "Thanks for your patience!"
                ]}
                typeSpeed={30}
                backSpeed={40}  className="text-center"
            />
        </main>
    )
}
export default Loading;
