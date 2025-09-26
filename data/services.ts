// data/services.ts

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    image: string;
    seo: {
        title: string;
        description: string;
    };
    approach: {
        paragraphOne: string;
        paragraphTwo?: string;
    },
    benefits : string[],
    howItWorks : {
        title: string;
        description: string;
    }[]
}

export const services: Service[] = [
    {
        slug: "web-development",
        title: "Web Development",
        shortDescription: "We build modern, fast, and scalable websites.",
        fullDescription:
            "Our web development services focus on building scalable, responsive, and secure websites tailored to your business goals. Whether it’s an e-commerce platform, business website, or web application, we use modern frameworks to ensure performance and growth.",
        features: [
            "Responsive and mobile-friendly",
            "SEO-optimized coding",
            "Fast and scalable solutions",
            "Custom integrations",
        ],
        image: "/hero.webp",
        seo: {
            title: "Web Development Services | Build Fast & Scalable Websites",
            description:
                "Professional web development services to build responsive, SEO-friendly, and scalable websites for your business growth.",
        },
        approach: {
            paragraphOne: "Our web development services focus on building scalable, responsive, and secure websites tailored to your business goals. Whether it’s an e-commerce platform, business website, or web application, we use modern frameworks to ensure performance and growth.",
            paragraphTwo: "p2",
        },
        benefits: ["Reach a global audience and expand your brand's presence", 'Real-time tracking and data-driven decision-making', "Improved Customer Engagement", "Drive conversions and boost revenue", "Create a loyal customer community", "Protect customer data and privacy"],
        howItWorks: [
            {
                title: "Understanding Client Goals",
                description: "The process begins with a thorough consultation with the client to understand their business goals."
            },
            {
                title: "Understanding Client Goals 2",
                description: "The process begins with a thorough consultation with the client to understand their business goals. 1"
            },
            {
                title: "Understanding Client Goals 3",
                description: "The process begins with a thorough consultation with the client to understand their business goals. 1"
            },
            {
                title: "Understanding Client Goals 4",
                description: "The process begins with a thorough consultation with the client to understand their business goals. 1"
            }
        ]
    },
    {
        slug: "seo-optimization",
        title: "Search Engine Optimisation",
        shortDescription: "Boost visibility and rank higher in search engines.",
        fullDescription:
            "We optimize websites with proven SEO strategies to drive traffic, improve rankings, and enhance your online visibility. Our services cover keyword research, on-page SEO, technical SEO, and backlink building.",
        features: [
            "Comprehensive keyword research",
            "On-page and off-page SEO",
            "Technical site audits",
            "Content strategy",
        ],
        image: "/assets/images/services/seo.jpg",
        seo: {
            title: "SEO Optimization Services | Improve Rankings & Traffic",
            description:
                "Boost your website's visibility with professional SEO optimization services. Get higher rankings, more traffic, and better conversions.",
        },
        approach :{
            paragraphOne: "p1"
        },
        benefits: ["1"],
        howItWorks: [
            {
                title: "Understanding Client Goals",
                description: "The process begins with a thorough consultation with the client to understand their business goals."
            },
            {
                title: "Understanding Client Goals 1",
                description: "The process begins with a thorough consultation with the client to understand their business goals. 1"
            }
        ]
    },
    // Add the rest of your services here...
];
