export type Service = {
    id: number;
    title: string;
    slug: string;
    description: string;
    href: string;
    iconName:
      | "code-xml"
      | "scale-3d"
      | "server"
      | "pen-tool"
      | "mail"
      | "search"
      | "headset"
      | "workflow"
      | "HandHelping";
  };
  
  export const servicesData: Service[] = [
    {
      id: 1,
      title: "Websites & Web Applications",
      slug: "web-development",
      description: "We build and maintain modern, fast websites and powerful online systems that help your business run smoothly and grow.",
      iconName: "code-xml",
      href: "/services/web-development",
    },
    {
      id: 2,
      title: "Custom Software Development",
      slug: "custom-software-Development",
      description: "We develop tailored desktop programs, mobile apps, and business software that perfectly fit the way your company works",
      iconName: "scale-3d",
      href: "/services/custom-software-Development",
    },
    {
      id: 3,
      title: "Hosting & Domain Services",
      slug: "hosting",
      description: "We provide fast, secure, load-shedding-proof hosting and domain management so your business is always online and protected.",
      iconName: "server",
      href: "/services/hosting",
    },
    {
      id: 4,
      title: "Website & UI/UX Design",
      slug: "design-services",
      description: "We design beautiful, user-friendly websites and interfaces that look professional and make your customers love using them.",
      iconName: "pen-tool",
      href: "/services/design-services",
    },
    {
      id: 5,
      title: "Business Email Solutions",
      slug: "business-emails",
      description: "We set up secure, professional @yourcompany.co.za emails that build trust and keep your team connected from anywhere.",
      iconName: "mail",
      href: "/services/business-emails",
    },
    {
      id: 6,
      title: "Search Engine Optimization (SEO)",
      slug: "seo-optimization",
      description: "We optimize your website to rank higher on Google and bring you more customers and enquiries without paying for ads.",
      iconName: "search",
      href: "/services/seo-optimization",
    },
    {
      id: 7,
      title: "Maintenance & Ongoing Support",
      slug: "maintenance-support",
      description: "We keep your website and systems updated, secure, backed up and running perfectly with fast local support when you need it.",
      iconName: "headset",
      href: "/services/maintenance-support",
    },
    {
      id: 8,
      title: "Automation & Integrations",
      slug: "automation",
      description: "We connect your systems and automate repetitive tasks so you save time, reduce mistakes and cut costs",
      iconName: "workflow",
      href: "/services/automation",
    },
    {
      id: 9,
      title: "Training & Mentorship",
      slug: "training",
      description: "Training for your staff plus structured mentorship programmes for graduate and junior developers",
      iconName: "HandHelping",
      href: "/services/trainng",
    },
  ];