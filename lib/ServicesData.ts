import { CodeXml, Server, Component, Mail, Search, Settings, Workflow, GraduationCap } from "lucide-react";

export const servicesData = [
    {
        id: 1,
        title: "Web Development",
        slug: "web-development",
        description:
            "We build fast, secure, and scalable websites tailored to your business needs.",
        icon: CodeXml,
        href: "/services/web-development",
    },
    {
        id: 2,
        title: "Hosting",
        slug: "hosting",
        description:
            "Reliable and secure hosting solutions to keep your website running smoothly.",
        icon: Server,
        href: "/services/hosting",
    },
    {
        id: 3,
        title: "Web Design",
        slug: "web-design",
        description:
            "Modern and creative web designs that make your brand stand out online.",
        icon: Component,
        href: "/services/web-design",
    },
    {
        id: 4,
        title: "UI/UX Design",
        slug: "ui-ux-design",
        description:
            "User-centered design that enhances usability and creates delightful experiences.",
        icon: Component,
        href: "/services/ui-ux-design",
    },
    {
        id: 5,
        title: "Business Emails",
        slug: "business-emails",
        description:
            "Professional business email solutions that strengthen your brand identity.",
        icon: Mail,
        href: "/services/business-emails",
    },
    {
        id: 6,
        title: "Search Engine Optimization",
        slug: "seo-optimization",
        description:
            "Boost your visibility on search engines with proven SEO strategies.",
        icon: Search,
        href: "/services/seo-optimization",
    },    
    {
        id: 7,
        title: "Maintenance and Support",
        slug: "maintenance-support",
        description:
            "Keep your website updated, secure, and performing at its best with ongoing support.",
        icon: Settings,
        href: "/services/maintenance-support",
    },
    {
        id: 8,
        title: "Automation",
        slug: "automation",
        description:
            "Automate workflows and processes to save time and improve efficiency.",
        icon: Workflow,
        href: "/services/automation",
    },
    {
        id: 9,
        title: "Mentorship",
        slug: "mentorship",
        description:
            "Guidance and mentorship programs to help individuals and businesses grow in tech.",
        icon: GraduationCap,
        href: "/services/mentorship",
    },
];
