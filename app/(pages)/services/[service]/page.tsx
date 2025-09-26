import {JSX} from "react";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { Metadata } from "next";
import {type Service, services} from "@/data/services";
import { unslugify } from "@/lib/Unslugify";
import { LuBadgeCheck } from "react-icons/lu";
import Image from "next/image";
import AnimatedIcon from "@/components/animations/animatedIcon";
import ServiceTestimonialCarousel from '@/components/ServiceTestimonialCarousel';

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
    const { service } = params;
    const serviceData: Service | undefined = services.find((s: Service): boolean => s.slug === service);
    if (!serviceData) {return {title: "Service Not Found",description: "The requested service does not exist.",};}
    return {title: serviceData.seo.title,description: serviceData.seo.description,};
}

const SingleServicePage = async ({ params }: { params: { service: string } }) => {
    const { service } = params;
    const serviceData: Service | undefined = services.find((s: Service): boolean => s.slug === service);

    if (!serviceData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">The service you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/services" className="bg-[#09b850] hover:bg-[#0B9944] text-white px-6 py-3 rounded-sm">
                    View All Services
                </Link>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto mt-10 md:mt-20">
            <section className="w-full max-w-7xl mx-auto px-6 md:px-0 mt-10">
                <div className="flex flex-col md:flex-row items-start md:items-start justify-between w-full gap-6">
                    <div className="w-full">
                        <nav className="mb-3" aria-label="breadcrumb">
                            <ol className="flex items-center gap-2 pt-0">
                                <li>
                                    <Link href="/" className="hover:text-[#0B9944] transition-colors duration-500">
                                        Home
                                    </Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li>
                                    <Link href="/services" className="hover:text-[#0B9944] transition-colors duration-500">
                                        Services
                                    </Link>
                                </li>
                                <GoDotFill size={10} className="mt-1" />
                                <li className="text-[#0B9944]">{unslugify(serviceData.slug)}</li>
                            </ol>
                        </nav>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {serviceData.title}
                        </h1>
                        <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
                            {serviceData.fullDescription}
                        </p>
                        <Link href="/contact" className="bg-[#09b850] hover:bg-[#0B9944] text-white px-[1.2rem] py-[0.8rem] rounded-sm inline-flex gap-2 transition-all duration-500 ease-in-out items-center mt-5 font-semibold">
                            Start your project
                        </Link>
                    </div>

                    <div className="w-full flex justify-end">
                        <Image
                            src={serviceData.image}
                            width={506} height={609}
                            alt={serviceData.title}
                            quality={100}
                            loading="eager"
                            className="object-cover rounded-sm h-80"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#202124] mt-20 py-24 text-center text-white flex flex-col items-center justify-center relative overflow-hidden w-full">
                <div className="flex flex-col md:flex-row justify-center gap-6 w-full items-start max-w-7xl mx-auto px-4 md:px-0">
                    <div className="w-full text-start">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Approach</h1>
                        <p className="text-[#c4c5c7] font-lg">{serviceData.approach.paragraphOne}</p>
                        {serviceData.approach.paragraphTwo && <p className="text-[#c4c5c7] font-lg mt-3">{serviceData.approach.paragraphTwo}</p>}
                    </div>

                    <div className="bg-[#292a2d] p-6 rounded-sm w-full flex flex-col justify-start text-start items-start">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Service benefits</h1>
                        <ul className="flex flex-col gap-2 mt-5">
                            {
                                serviceData.benefits.map((benefit: string, index: number): JSX.Element => (
                                    <li className="inline-flex items-center text-lg" key={index}>
                                            <LuBadgeCheck className="mr-2 text-[#0B9944]" size={18} /> {benefit}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className="min-w-full mt-10 py-10 text-center flex flex-col items-center justify-center relative">
                <span className="inline-block bg-gray-100 dark:bg-[#292a2d] text-sm rounded-md font-semibold px-3 py-2">
                    <AnimatedIcon icon="🤝"/> Your partner in digital growth
                </span>

                <div className="w-full px-6 sm:px-96 lg:px-0 mt-4 text-center max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        How it works?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-20 w-full">
                        {
                            serviceData.howItWorks.map((info: {title: string; description: string;}, index: number) : JSX.Element => (
                                <div className="flex flex-col items-center justify-center w-full" key={index}>
                                    <div className="bg-[#0B9944]/20 p-3 rounded-sm flex justify-center items-center text-[#0B9944] w-[3.5rem] h-[3.5rem] font-bold text-2xl mb-4">
                                        {index + 1}
                                    </div>
                                    <h6 className='text-lg font-bold mb-2'>{info.title}</h6>
                                    <p className='dark:text-[#c4c5c7]'>{info.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 md:px-0 mt-20 py-24 text-center flex flex-col items-center justify-center relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-center gap-x-20 gap-y-10 w-full items-start">
                    <div className="bg-[#292a2d] p-6 rounded-sm w-full flex flex-col justify-start text-start items-start text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pricing plan for {unslugify(serviceData.slug)}</h1>

                        <ul className="flex flex-col gap-2 mt-5">
                            {
                                serviceData.benefits.map((benefit: string, index: number) : JSX.Element => (
                                    <li className="inline-flex items-center text-lg" key={index}>
                                        <LuBadgeCheck className="mr-2 text-[#0B9944]" size={18} /> {benefit}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="w-full text-start">
                        <h1 className="text-3xl md:text-4xl font-bold mb-10">Feedback for Service <br/> Enhancement</h1>
                        <ServiceTestimonialCarousel serviceSlug={serviceData.slug} />
                    </div>
                </div>
            </section>

            {/* Banner CTA */}
            <section className="bg-[#202124] min-w-full mt-10 py-24 text-center text-white flex flex-col items-center justify-center relative border-b border-gray-300/30">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to grow with {serviceData.title}?
                </h2>
                <p className="mb-6 text-gray-300 max-w-2xl">
                    Let`s take your business to the next level with our professional{" "}
                    {serviceData.title.toLowerCase()} services.
                </p>
                <Link href="/contact" className="bg-[#09b850] hover:bg-[#0B9944] text-white px-6 py-3 rounded-md transition-all">
                    Get Started
                </Link>
            </section>
        </div>
    );
};

export default SingleServicePage;
