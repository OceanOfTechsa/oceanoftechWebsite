import type { Metadata } from "next";
import { type Career, careers } from "@/components/conts";
import JobApplicationForm from "@/components/forms/JobApplicationForm";
import NewsLetterSubForm from "@/components/forms/newsLetter";
import Image from "next/image"

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata>{
  const { slug } = params;
  return {
    title: `Apply for ${slug.replace(/-/g, ' ')}`,
  };
}

interface ApplyPageProps {
  params: {
    slug: string;
  };
}

export default function ApplyPage({ params }: ApplyPageProps) {
  const job: Career | undefined = careers.find((c: Career) => c.slug === params.slug) as Career;

  return (
    <div className="w-full">
      <div className="flex flex-col w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-6">
        <JobApplicationForm job={job}/>
      </div>
      <section className="relative overflow-hidden bg-gray-100 dark:bg-[#292a2d] py-16">
        {/* SVG Decoration */}
        <figure className="absolute top-0 left-0 -ml-8 mt-5">
          <svg
            width="371"
            height="354"
            viewBox="0 0 371 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="172.5"
              cy="176.5"
              rx="131.5"
              ry="125.5"
              fill="url(#paint0_linear_195_2)"
            ></ellipse>
            <ellipse
              cx="185.5"
              cy="177"
              rx="185.5"
              ry="177"
              fill="url(#paint1_linear_195_2)"
            ></ellipse>
            <defs>
              <linearGradient
                id="paint0_linear_195_2"
                x1="172.5"
                y1="51"
                x2="172.5"
                y2="302"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.5" />
                <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_195_2"
                x1="185.5"
                y1="0"
                x2="185.5"
                y2="354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0569271" stopColor="#D9D9D9" stopOpacity="0.2" />
                <stop offset="0.998202" stopColor="#D9D9D9" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </figure>

        {/* Right-side Decoration */}
        <div className="absolute bottom-0 right-0 hidden md:block md:mr-20 -ml-30">
          <Image
            src="/cta-vector.svg"
            width={163} height={200}
            loading="lazy"
            quality={100}
            className="h-[200px]"
            alt="vector-img"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-0 relative">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center gap-8">
            {/* Title and Content */}
            <div className="xl:col-span-2">
              <h2 className="text-[2.7rem] font-bold mb-3">
                Subscribe to our newsletter
              </h2>
              <p className="text-[#606261] dark:text-[#c4c5c7] text-lg">
                Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve <br />
                always worked very hard to give our customers the best experience.
              </p>
            </div>

            {/* Input + Button */}
            <NewsLetterSubForm />
          </div>
        </div>
      </section>
    </div>
  );
}