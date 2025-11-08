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
    };
    benefits: string[];
    howItWorks: {
        title: string;
        description: string;
    }[];
}

export const services: Service[] = [
    {
        slug: "web-development",
        title: "Web Development",
        shortDescription: "We build modern, fast, and scalable websites, web apps, and systems.",
        fullDescription:
            "Our web development services deliver high-performance websites, web apps, and digital systems tailored to your business goals. We specialize in responsive design, secure coding, and scalable solutions for e-commerce, SaaS platforms, and enterprise systems. Using modern frameworks and best practices, we ensure your digital products are fast, reliable, and future-proof.",
        features: [
            "Responsive and mobile-friendly",
            "SEO-optimized coding",
            "Fast and scalable solutions",
            "Custom integrations and APIs",
        ],
        image: "/assets/images/services/web-development.jpg",
        seo: {
            title: "Web Development Services | Websites, Web Apps & Systems",
            description:
                "Professional web development for websites, web apps, and digital systems. Fast, secure, and scalable solutions tailored to your business.",
        },
        approach: {
            paragraphOne:
                "We start by understanding your business goals and target audience. Then we design and develop websites, web apps, and systems that are responsive, secure, and scalable, ensuring an optimal user experience across all devices.",
            paragraphTwo:
                "Throughout the development process, we maintain transparent communication, rigorous testing, and continuous optimization to deliver a product that drives engagement and growth.",
        },
        benefits: [
            "Reach a global audience with responsive digital solutions",
            "Drive conversions and boost revenue",
            "Enhance user engagement and satisfaction",
            "Protect customer data with secure systems",
            "Streamline workflows with custom integrations",
        ],
        howItWorks: [
            {
                title: "Requirement Gathering",
                description: "We conduct in-depth consultations to understand your goals, audience, and project scope."
            },
            {
                title: "Design & Prototyping",
                description: "Our team creates wireframes, prototypes, and designs that reflect your brand and user needs."
            },
            {
                title: "Development",
                description: "We develop websites, web apps, and systems using modern, scalable frameworks and technologies."
            },
            {
                title: "Testing & Launch",
                description: "We rigorously test functionality, performance, and security before launching your digital product."
            }
        ]
    },
    {
        slug: "seo-optimization",
        title: "Search Engine Optimization",
        shortDescription: "Boost visibility and rank higher in search engines.",
        fullDescription:
            "Our SEO services improve your website, web apps, and digital systems’ visibility on search engines. Through keyword research, technical optimization, on-page and off-page strategies, we help you attract qualified traffic, improve rankings, and increase conversions. We focus on long-term growth and measurable results.",
        features: [
            "Comprehensive keyword research",
            "On-page and off-page optimization",
            "Technical SEO audits",
            "Content and link-building strategy",
        ],
        image: "/assets/images/services/seo.jpg",
        seo: {
            title: "SEO Optimization Services | Improve Rankings & Drive Traffic",
            description:
                "Professional SEO services to boost your website, web app, or system visibility. Increase traffic, rankings, and conversions.",
        },
        approach: {
            paragraphOne:
                "We analyze your website and competitors to identify opportunities, optimize structure and content, and implement strategies that improve search engine visibility.",
            paragraphTwo:
                "Our ongoing SEO efforts focus on driving qualified traffic, improving user engagement, and achieving sustainable growth."
        },
        benefits: [
            "Higher search engine rankings",
            "Increased organic traffic",
            "Better lead generation and conversions",
            "Improved brand credibility and visibility",
        ],
        howItWorks: [
            {
                title: "SEO Audit",
                description: "We analyze your website, web apps, or system for performance and SEO opportunities."
            },
            {
                title: "Strategy & Planning",
                description: "We create a tailored SEO plan targeting keywords and improving site structure."
            },
            {
                title: "Implementation",
                description: "We optimize content, metadata, and technical elements to maximize SEO impact."
            },
            {
                title: "Monitoring & Reporting",
                description: "We track results, provide reports, and refine strategies for continuous growth."
            }
        ]
    },
    {
        slug: "web-design",
        title: "Web Design",
        shortDescription: "Creative, modern designs for websites, web apps, and systems.",
        fullDescription:
            "Our web design services focus on creating visually appealing, user-friendly, and responsive designs for websites, web apps, and digital systems. We blend aesthetics with functionality to deliver intuitive user experiences that strengthen your brand and drive engagement.",
        features: [
            "Custom UI/UX design",
            "Responsive and adaptive layouts",
            "Brand-aligned visuals",
            "Interactive and engaging interfaces",
        ],
        image: "/assets/images/services/web-design.jpg",
        seo: {
            title: "Web Design Services | UI/UX for Websites, Web Apps & Systems",
            description:
                "Professional web design services to create visually stunning and user-friendly websites, web apps, and systems.",
        },
        approach: {
            paragraphOne:
                "We focus on the user journey, designing interfaces that are both visually appealing and intuitive. Our designs reflect your brand identity while optimizing usability across devices.",
            paragraphTwo:
                "We iterate on designs with client feedback, ensuring the final product delights users and supports business objectives."
        },
        benefits: [
            "Engaging and memorable user experiences",
            "Increased customer satisfaction",
            "Stronger brand recognition",
            "Optimized for conversions and retention",
        ],
        howItWorks: [
            {
                title: "Research & Inspiration",
                description: "We analyze your brand and competitors to gather design inspiration."
            },
            {
                title: "Wireframing",
                description: "We create low-fidelity wireframes to plan structure and user flow."
            },
            {
                title: "Design Implementation",
                description: "We develop high-fidelity designs and interactive prototypes for review."
            },
            {
                title: "Delivery & Support",
                description: "We hand over assets and provide ongoing design support if needed."
            }
        ]
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortDescription: "User-centered design that enhances usability and experience.",
        fullDescription:
            "Our UI/UX design services focus on creating intuitive, seamless, and enjoyable experiences for users. From web apps to complex systems, we ensure that every interaction is clear, efficient, and aligned with your business goals.",
        features: [
            "User research and personas",
            "Wireframes and prototypes",
            "Usability testing",
            "Visual and interaction design",
        ],
        image: "/assets/images/services/ui-ux-design.jpg",
        seo: {
            title: "UI/UX Design Services | Enhance Usability & Engagement",
            description:
                "Professional UI/UX design for websites, web apps, and systems that improve user satisfaction and engagement.",
        },
        approach: {
            paragraphOne:
                "We put users at the center of our design process, researching behaviors and preferences to create interfaces that are easy to use and visually engaging.",
            paragraphTwo:
                "Through iterative testing and refinement, we ensure our designs enhance usability, accessibility, and overall user satisfaction."
        },
        benefits: [
            "Better user engagement",
            "Improved usability and accessibility",
            "Reduced errors and support requests",
            "Higher conversion and retention rates",
        ],
        howItWorks: [
            {
                title: "User Research",
                description: "We analyze user behaviors and needs to guide design decisions."
            },
            {
                title: "Wireframing & Prototyping",
                description: "We create interactive wireframes and prototypes for testing and feedback."
            },
            {
                title: "Visual Design",
                description: "We craft visually appealing interfaces aligned with your brand identity."
            },
            {
                title: "Testing & Iteration",
                description: "We test designs with real users and refine based on feedback."
            }
        ]
    },
    {
        slug: "business-emails",
        title: "Business Emails",
        shortDescription: "Professional and secure email solutions for your business.",
        fullDescription:
            "We provide secure, reliable, and professional business email solutions that enhance communication and reinforce your brand identity. Our services include domain-based emails, inbox management, spam protection, and seamless integration with your workflow.",
        features: [
            "Custom domain emails",
            "Secure and encrypted messaging",
            "Spam and threat protection",
            "Easy integration with tools and apps",
        ],
        image: "/assets/images/services/business-emails.jpg",
        seo: {
            title: "Business Email Solutions | Secure & Professional Email Services",
            description:
                "Professional and secure business email services to improve communication, credibility, and productivity.",
        },
        approach: {
            paragraphOne:
                "We set up domain-based email accounts for your team, ensuring security, reliability, and seamless integration with your workflow.",
            paragraphTwo:
                "Our email solutions are scalable, professional, and designed to enhance both internal and external communication."
        },
        benefits: [
            "Enhanced professional image",
            "Secure communications",
            "Better team collaboration",
            "Easy integration with business tools",
        ],
        howItWorks: [
            {
                title: "Setup & Configuration",
                description: "We create and configure your domain-based email accounts."
            },
            {
                title: "Security & Optimization",
                description: "We implement encryption, spam protection, and workflow integration."
            },
            {
                title: "Ongoing Support",
                description: "We provide continuous support to maintain email performance and security."
            }
        ]
    },
    {
        slug: "hosting",
        title: "Hosting",
        shortDescription: "Reliable hosting for websites, web apps, and systems.",
        fullDescription:
            "We provide secure and high-performance hosting solutions for websites, web apps, and systems. Our hosting ensures minimal downtime, fast loading speeds, and robust security measures to protect your digital assets.",
        features: [
            "High uptime and reliability",
            "Fast loading speeds",
            "Secure server environments",
            "Scalable hosting options",
        ],
        image: "/assets/images/services/hosting.jpg",
        seo: {
            title: "Web Hosting Services | Secure & Reliable Hosting",
            description:
                "Professional hosting services for websites, web apps, and systems with high uptime, speed, and security.",
        },
        approach: {
            paragraphOne:
                "We provide hosting that ensures your websites, web apps, and systems are always accessible, fast, and secure.",
            paragraphTwo:
                "Our scalable hosting plans can grow with your business, offering flexibility and peace of mind."
        },
        benefits: [
            "Reliable uptime and performance",
            "Enhanced security and protection",
            "Fast content delivery",
            "Scalable solutions for growth",
        ],
        howItWorks: [
            {
                title: "Server Setup",
                description: "We configure hosting environments optimized for your digital products."
            },
            {
                title: "Deployment",
                description: "We deploy your websites, web apps, and systems securely and efficiently."
            },
            {
                title: "Monitoring & Support",
                description: "We continuously monitor performance and provide ongoing support."
            }
        ]
    },
    {
        slug: "maintenance-support",
        title: "Maintenance and Support",
        shortDescription: "Keep your websites, web apps, and systems running smoothly.",
        fullDescription:
            "Our maintenance and support services ensure that your websites, web apps, and systems remain secure, updated, and fully functional. We handle updates, backups, bug fixes, performance optimization, and technical support, giving you peace of mind.",
        features: [
            "Regular updates and backups",
            "Bug fixes and troubleshooting",
            "Performance monitoring",
            "24/7 support options",
        ],
        image: "/assets/images/services/maintenance-support.jpg",
        seo: {
            title: "Maintenance & Support Services | Websites, Web Apps & Systems",
            description:
                "Professional maintenance and support for websites, web apps, and systems to keep them secure, updated, and performing at their best.",
        },
        approach: {
            paragraphOne:
                "We proactively maintain and monitor your digital platforms, resolving issues quickly and keeping systems up-to-date and secure.",
            paragraphTwo:
                "Our support team is available to handle emergencies, troubleshoot problems, and ensure smooth operation at all times."
        },
        benefits: [
            "Minimized downtime and disruptions",
            "Enhanced security and performance",
            "Peace of mind with expert support",
            "Improved user experience",
        ],
        howItWorks: [
            {
                title: "Regular Monitoring",
                description: "We monitor your websites, web apps, and systems for issues and performance."
            },
            {
                title: "Maintenance Tasks",
                description: "We perform updates, backups, and optimizations to ensure smooth operation."
            },
            {
                title: "Support & Troubleshooting",
                description: "Our team handles technical issues and provides timely support."
            }
        ]
    },
    {
        slug: "automation",
        title: "Automation",
        shortDescription: "Automate workflows and processes for efficiency.",
        fullDescription:
            "Our automation services streamline business processes across websites, web apps, and systems. We help reduce manual work, improve accuracy, and increase operational efficiency through custom workflows and integrations.",
        features: [
            "Custom workflow automation",
            "Integration with apps and platforms",
            "Reduce manual work",
            "Improve efficiency and accuracy",
        ],
        image: "/assets/images/services/automation.jpg",
        seo: {
            title: "Automation Services | Streamline Workflows & Increase Efficiency",
            description:
                "Professional automation services for websites, web apps, and systems to reduce manual work and improve operational efficiency.",
        },
        approach: {
            paragraphOne:
                "We analyze your processes and identify opportunities for automation, designing solutions that save time and reduce errors.",
            paragraphTwo:
                "Our custom integrations ensure that workflows across systems and platforms operate seamlessly and efficiently."
        },
        benefits: [
            "Save time and resources",
            "Reduce human errors",
            "Increase productivity",
            "Streamline complex workflows",
        ],
        howItWorks: [
            {
                title: "Process Analysis",
                description: "We study your business processes to identify automation opportunities."
            },
            {
                title: "Workflow Design",
                description: "We create efficient workflows that integrate seamlessly with your systems."
            },
            {
                title: "Implementation & Support",
                description: "We deploy automation solutions and provide ongoing support and optimization."
            }
        ]
    },
    {
        slug: "mentorship",
        title: "Mentorship",
        shortDescription: "Guidance and mentorship programs to grow in tech.",
        fullDescription:
            "Our mentorship programs provide guidance, training, and support for individuals and businesses in the tech industry. From web development to systems management and digital strategies, we help you acquire skills and grow your capabilities.",
        features: [
            "One-on-one mentoring",
            "Skill-building programs",
            "Guidance for projects and career growth",
            "Access to industry insights",
        ],
        image: "/assets/images/services/mentorship.jpg",
        seo: {
            title: "Mentorship Programs | Grow Your Skills in Tech",
            description:
                "Professional mentorship and guidance programs to help individuals and businesses grow in web development, systems, and digital technology.",
        },
        approach: {
            paragraphOne:
                "We pair mentees with experienced professionals to provide hands-on guidance, knowledge transfer, and career support.",
            paragraphTwo:
                "Our programs are tailored to individual goals, ensuring practical learning and measurable growth in technical skills."
        },
        benefits: [
            "Accelerate learning and skill acquisition",
            "Receive personalized guidance from experts",
            "Practical experience and mentorship",
            "Build confidence and career opportunities",
        ],
        howItWorks: [
            {
                title: "Initial Consultation",
                description: "We assess your goals, skills, and learning needs."
            },
            {
                title: "Mentorship Plan",
                description: "We design a tailored mentorship plan with clear objectives."
            },
            {
                title: "Hands-On Guidance",
                description: "Our mentors provide continuous support and feedback throughout the program."
            }
        ]
    }
];
