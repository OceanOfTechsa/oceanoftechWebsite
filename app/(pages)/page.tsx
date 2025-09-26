import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ShowCaseSection from "@/components/ShowCaseSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Approach from "@/components/Approach";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import _CTAHome from "@/components/partials/_HomeCTA";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home"
}

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="max-w-7xl mx-auto">
                <HeroSection />
                <ShowCaseSection />
                <TrustedBySection />
                <AboutSection />
            </div>
            <ServicesSection />
            <div className="max-w-7xl mx-auto">
                <Approach />
                <PricingSection />
                <Testimonials/>
                <_CTAHome />
            </div>
        </div>
    );
};

export default HomePage;
