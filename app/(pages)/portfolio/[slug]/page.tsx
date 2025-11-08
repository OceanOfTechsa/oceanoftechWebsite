import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
import { GoDotFill } from 'react-icons/go';
import {  ExternalLink, CheckCircle } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import CaseStudyCarousel from '@/components/CaseStudyCard';
import ImageGallery from '@/components/ImageGallery';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const portfolio = caseStudies.find((c) => c.projectUrl === params.slug);

  if (!portfolio) {
    return {
      title: "portfolio not found",
      description: "The portfolio you are looking for could not be found."
    };
  }

  return {
    title: `${portfolio.title}`,
    description: portfolio.subtitle.slice(0, 160), // Trim to ~160 chars for SEO
    openGraph: {
      title: `${portfolio.title}`,
      description: portfolio.subtitle.slice(0, 200),
      url: `https://yourdomain.com/careers/${portfolio.projectUrl}`,
      type: "website",
      images: [
        {
          url: "/images/careers/og-default.jpg", // optional: category-specific OG image
          width: 1200,
          height: 630,
          alt: `${portfolio.title} Open Position`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${portfolio.title}`,
      description: portfolio.subtitle.slice(0, 200),
      images: ["/images/careers/og-default.jpg"]
    }
  };
}

const SinglePortfolioPage = ({ params }: { params: { slug: string } }) => {
  const portfolio: CaseStudy | undefined = caseStudies.find((c: CaseStudy) => c.projectUrl === params.slug);

  if (!portfolio) {
    return <div className="text-center py-20">portfolio not found.</div>;
  }
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 md:px-0 py-6  xl:py-20 pb-0">
      <section className="">
        <div className="">
          <div className="flex flex-col items-center">
            {/* Breadcrumb */}
            <nav className="mt-6 mb-[0.5rem]" aria-label="breadcrumb">
                <ol className="flex items-center justify-center gap-2">
                <li>
                    <Link
                    href="/"
                    className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500"
                    >
                    Home
                    </Link>
                </li>
                <GoDotFill size={10} className="mt-1 text-gray-500" />
                <li>
                    <Link
                    href="/portfolio"
                    className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500"
                    >
                    Portfolio
                    </Link>
                </li>
                <GoDotFill size={10} className="mt-1 text-gray-500" />
                <li  className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
                    {portfolio.title}
                </li>
                </ol>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
             {portfolio.title}
            </h1>
            <p className="text-center max-w-3xl text-[#606261] dark:text-[#c4c5c7]">
              {portfolio.subtitle}
            </p>
          </div>

          {/* Main Image */}
          <div className="mt-10">
            <div
              className="rounded-md h-[300px] md:h-[400px] xl:h-[600px] bg-contain bg-center"
            style={{ backgroundImage: `url("${portfolio.imageUrl}")` }}
            ></div>
          </div>

          {/* Info Section */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-20 md:px-16 w-full">
            {/* Project Info */}
            <div className="lg:col-span-5 xl:col-span-5 px-5 md:px-0">
              <div className="bg-[#202124] text-white rounded-sm p-6 sm:p-10 -mt-26 md:-mt-32">
                <ul className="space-y-5">
                  <li>
                    <small className="uppercase text-gray-400">Client</small>
                    <p className="text-lg font-semibold text-white">{portfolio.client}</p>
                  </li>
                  <li>
                    <small className="uppercase text-gray-400">Headquarters</small>
                    <p className="text-lg font-semibold text-white">{portfolio.headquarters}</p>
                  </li>
                  <li>
                    <small className="uppercase text-gray-400">Industry</small>
                    <p className="text-lg font-semibold text-white">{portfolio.industry}</p>
                  </li>
                  <li>
                    <small className="uppercase text-gray-400">Founders</small>
                    {
                      portfolio.founders.map((founder: string, i: number) => (
                        <p key={i} className="text-lg font-semibold text-white">
                          {founder}
                          {i < portfolio.founders.length - 1 ? ", " : ""}
                        </p>
                      ))
                    }
                  </li>
                  <li>
                    <small className="uppercase text-gray-400">Services</small>
                    {
                      portfolio.services.map((service: string, i: number) => (
                          <p key={i} className="text-lg font-semibold text-white">
                            {service}
                            {i < portfolio.services.length - 1 ? ", " : ""}
                          </p>
                        ))
                    }
                  </li>
                  <li>
                    <small className="uppercase text-gray-400">Time spent</small>
                    <p className="text-lg font-semibold text-white">{portfolio.timeSpent}</p>
                  </li>
                  <li>
                    <Link
                      href={portfolio.projectUrl}
                      target="_black"
                      className="inline-flex items-center justify-center bg-[#09B850] hover:bg-[#0B9944] text-white font-medium py-3 px-5 rounded-md transition w-full"
                    >
                      View project website <ExternalLink size={16} className="ml-2" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Detail */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h4 className="text-[34.48px] md:text-[2rem] font-semibold mb-3">Overview</h4>
              <p className="text-start  text-[#606261] dark:text-[#c4c5c7] mb-[1rem] text-[1.25rem] font-[400]">
                {portfolio.subtitle} 
              </p>
              <p className="text-start text-[#606261] dark:text-[#c4c5c7] mb-6">
                Once an idea takes root, it requires nurturing and refinement. This stage involves
                research, brainstorming, and gathering feedback. Conducting market analysis, exploring
                existing solutions, and collaborating with others can help refine the idea further.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {
                  portfolio.categories.map((cat: string, i: number) => (
                    <Link key={i} href={`/portfolio/category/${cat.toLowerCase()}`} className="px-[0.4rem] py-[0.4rem] border rounded-sm text-sm hover:bg-[#606261] dark:hover:bg-[#f8f8f8] hover:text-white dark:hover:text-black transition-all ease-in0out duration-500">
                      {cat}
                    </Link>
                  ))
                }
              </div>

              <h4 className="text-[34.48px] md:text-[2rem] font-semibold mb-3">The Challenge</h4>
              <p className="text-[#606261] dark:text-[#c4c5c7] mb-6">
               {
                portfolio.challenge
               }
              </p>

              <ul className="space-y-3">
                {[
                  "Maintained Windows Servers",
                  "Supported Windows workstations",
                  "Setup a rotation schedule and set an anti-virus system",
                  "Designed machines/servers and trained employees",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#606261] dark:text-[#c5c6cc] ">
                    <CheckCircle className="shrink-0 text-[#09B850]" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <ImageGallery images={portfolio.images || []} />
          
          {/* Result + Skillset */}
          <div className="mt-[4rem] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h4 className="text-[34.48px] md:text-[2rem] font-semibold mb-3">Result</h4>
              <p className="text-start  text-[#606261] dark:text-[#c4c5c7] mb-[1rem] text-[1.25rem] font-[300]">
                {portfolio.result}
              </p>
              <Link href={portfolio.projectUrl} target="_blank" className="inline-flex items-center text-primary font-medium hover:text-[#079340] transition-all duration-500 ease-in-out">
                View project website <ExternalLink size={16} className="ml-2" />
              </Link>
            </div>

            <div className="lg:col-span-7 xl:col-span-6">
              <p className="text-start text-[#606261] dark:text-[#c4c5c7] mb-6">
                Transforming ideas into reality often requires collaboration with a diverse range of
                individuals. Partnering with experts, seeking mentorship, and building a network of
                like-minded individuals can provide valuable insights and support.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <h2 className="text-5xl line-height-[1.25] font-[700]">
                    {portfolio.metrics.websiteTimeIncrease}<span className="text-[#079340]">%</span>
                  </h2>
                  <p className="text-[#606261] dark:text-[#c4c5c7]">Increase in time spent on website</p>
                </div>
                <div>
                  <h2 className="text-5xl line-height-[1.25] font-[700]">
                     {portfolio.metrics.socialMediaReach}<span className="text-[#079340]">M</span>
                  </h2>
                  <p className="text-[#606261] dark:text-[#c4c5c7]">Views across social media</p>
                </div>
                <div>
                  <h2 className="text-5xl line-height-[1.25] font-[700]">
                    R{portfolio.metrics.fundingRaised}<span className="text-[#079340]">M</span>
                  </h2>
                  <p className="text-[#606261] dark:text-[#c4c5c7]">Total raised in funding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-10 bg-gray-100 dark:bg-[#292a2d] rounded-md p-[2.5rem] sm:p-8">
            <FaQuoteLeft className="text-[#09b850]/30 mb-3" size={40} />
            <q className="block text-[1.5rem] text-[#202124] dark:text-[#c4c5c7]">
              {portfolio.quote.text}
            </q>

            <div className="flex items-center mt-6">
              <Image
                src="/02.jpg"
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-3">
                <h6 className="font-semibold">{portfolio.quote.author}</h6>
                <small className="text-gray-500">{portfolio.quote.position}</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-[2.5rem] mt-[4.5rem] flex justify-center items-center flex-col">
        <h3 className="text-[47.8432px] md:text-[2.38rem] font-[700] line-height-[1.25] pt-20 mb-10">Related work</h3>
        <CaseStudyCarousel categories={portfolio.categories} caseStudies={caseStudies} excludeId={portfolio.id} />
      </section>
    </div>
  )
}
export default SinglePortfolioPage;
