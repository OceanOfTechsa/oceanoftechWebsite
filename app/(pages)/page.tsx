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
                {/* <TrustedBySection /> */}
                <AboutSection />
            </div>
            <ServicesSection />
            <video
                src="/whiteoffice.webm"
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="metadata"
                style={{
                    height: "40vh",
                    minHeight: "280px",
                    maxHeight: "480px",
                    width: "100vw",        // forces full width
                    left: 0,
                    right: 0,
                }}
            />
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
