'use client';

import TypedText from "@/components/animations/TypedText";
import Image from "next/image";

const Loading = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center gap-2 z-50">
            <Image
                src="/Logo.svg"
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
                    "Bootstrapping…",
                    "Mounting Components…",
                    "Hydrating State…",
                    "Compiling Assets…",
                    "This is taking longer… 🤔"
                ]}
                typeSpeed={30}
                backSpeed={40}  className="text-center"
            />
        </main>
    )
}
export default Loading;
