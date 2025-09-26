export interface HelpCenterData {
    title: string;
    description?: string; // Add this
    info: {
        title: string;
        url: string;
    }[];
}
export const helpCenterData: ReadonlyArray<HelpCenterData> = [
    {
        title: "Web Development",
        description: "Complete web development services including frontend, backend, and full-stack solutions.",
        info: [
            { title: "Custom Website Development Process", url: "/help-center/web-development/process" },
            { title: "E-commerce Solutions & Online Stores", url: "/help-center/web-development/ecommerce" },
            { title: "WordPress Development Services", url: "/help-center/web-development/wordpress" },
            { title: "Custom Web Applications", url: "/help-center/web-development/applications" },
            { title: "Website Maintenance & Updates", url: "/help-center/web-development/maintenance" },
            { title: "API Development & Integration", url: "/help-center/web-development/api" },
            { title: "Responsive Design Implementation", url: "/help-center/web-development/responsive" },
        ]
    },
    {
        title: "Digital Marketing & SEO",
        description: "Complete web development services including frontend, backend, and full-stack solutions.",
        info: [
            { title: "SEO Strategy Development", url: "/help-center/seo/strategy" },
            { title: "Local SEO for Businesses", url: "/help-center/seo/local" },
            { title: "Content Marketing Services", url: "/help-center/seo/content" },
            { title: "Google Analytics Setup & Training", url: "/help-center/seo/analytics" },
            { title: "Social Media Marketing", url: "/help-center/seo/social-media" },
            { title: "PPC Advertising Management", url: "/help-center/seo/ppc" },
            { title: "Conversion Rate Optimization", url: "/help-center/seo/cro" },
        ]
    },
    {
        title: "Web Design",
        description: "Complete web development services including frontend, backend, and full-stack solutions.",
        info: [
            { title: "UI/UX Design Process", url: "/help-center/web-design/process" },
            { title: "Website Redesign Services", url: "/help-center/web-design/redesign" },
            { title: "Mobile-First Design Approach", url: "/help-center/web-design/mobile-first" },
            { title: "Branding & Visual Identity", url: "/help-center/web-design/branding" },
            { title: "Wireframing & Prototyping", url: "/help-center/web-design/wireframing" },
            { title: "Design System Creation", url: "/help-center/web-design/design-system" },
        ]
    },
    {
        title: "Business Email & Communication",
        info: [
            { title: "Professional Email Setup", url: "/help-center/business-email/setup" },
            { title: "Google Workspace Configuration", url: "/help-center/business-email/google-workspace" },
            { title: "Microsoft 365 Setup", url: "/help-center/business-email/microsoft-365" },
            { title: "Email Migration Services", url: "/help-center/business-email/migration" },
            { title: "Email Security Best Practices", url: "/help-center/business-email/security" },
            { title: "Team Collaboration Tools", url: "/help-center/business-email/collaboration" },
        ]
    },
    {
        title: "Hosting & Infrastructure",
        info: [
            { title: "Web Hosting Plans & Options", url: "/help-center/hosting/plans" },
            { title: "Domain Registration & Management", url: "/help-center/hosting/domains" },
            { title: "SSL Certificate Installation", url: "/help-center/hosting/ssl" },
            { title: "Website Migration Services", url: "/help-center/hosting/migration" },
            { title: "Server Maintenance & Monitoring", url: "/help-center/hosting/maintenance" },
            { title: "Backup & Disaster Recovery", url: "/help-center/hosting/backup" },
            { title: "Cloud Hosting Solutions", url: "/help-center/hosting/cloud" },
        ]
    },
    {
        title: "Support & Maintenance",
        info: [
            { title: "Website Maintenance Plans", url: "/help-center/support/maintenance-plans" },
            { title: "Emergency Support Services", url: "/help-center/support/emergency" },
            { title: "Regular Security Updates", url: "/help-center/support/security-updates" },
            { title: "Performance Optimization", url: "/help-center/support/performance" },
            { title: "Content Updates & Changes", url: "/help-center/support/content-updates" },
            { title: "Technical Support Process", url: "/help-center/support/process" },
        ]
    }
];