export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  year: number;
  categories: string[];
  images: string[] | null;

  client: string;
  headquarters: string;
  industry: string;
  founders: string[];
  services: string[];
  timeSpent: string;

  overview: string;
  challenge: string;
  result: string;

  metrics: {
    websiteTimeIncrease: string;
    socialMediaReach: string;
    fundingRaised: string;
  };

  quote: {
    text: string;
    author: string;
    position: string;
  };

  relatedWorks: {
    title: string;
    category: string;
  }[];

  projectUrl: string;
  imageUrl: string;
  
  clientLogo: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
    title: "The Success Company",
    subtitle: "Redesigning the success company website and developed to meet costumer expectation and beyond",
    year: 2025,
    categories: ["Web Design", "Web Development", "UI/UX design"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "The Success Company",
    headquarters: "Kloof, Durban",
    industry: "Business Consultation",
    founders: ["Adele Benvie"],
    services: ["Brand identity", "Packaging design", "E-commerce UX"],
    timeSpent: "6 months",
    overview: "A new identity for a cruelty-free skincare startup to connect better with eco-conscious consumers.",
    challenge: "Outdated branding and inconsistent online shopping experience.",
    result: "Rebranded with minimalist visuals and redesigned the online store, improving conversions.",
    metrics: {
      websiteTimeIncrease: "35",
      socialMediaReach: "1.2",
      fundingRaised: "2.4"
    },
    quote: {
      text: "The rebrand gave us a fresh start and doubled our online revenue.",
      author: "Sophia Brown",
      position: "Founder"
    },
    relatedWorks: [
      { title: "Green Earth Foods", category: "Branding" },
      { title: "Nature Glow", category: "Packaging" }
    ],
    projectUrl: "https:thesuccesscompany",
    clientLogo: "/clients/the-success-company-logo.webp",
    imageUrl: "/The Success Company.svg"
  },
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    title: "iFind101",
    subtitle: "Boosting speed and SEO for a SaaS platform.",
    year: 2025,
    categories: ["Web Development", "Performance", "SEO"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "TechWave Inc.",
    headquarters: "Berlin, Germany",
    industry: "SaaS",
    founders: ["David Müller"],
    services: ["SEO audit", "Performance tuning", "Web redesign"],
    timeSpent: "2021, 3 months",
    overview: "Focused on optimizing load times, code performance, and search engine visibility.",
    challenge: "High bounce rates due to slow website performance.",
    result: "Reduced load times by 60% and improved organic search ranking.",
    metrics: {
      websiteTimeIncrease: "48",
      socialMediaReach: "800",
      fundingRaised: "5.1"
    },
    quote: {
      text: "Users noticed the speed difference instantly — game-changing.",
      author: "David Müller",
      position: "CTO"
    },
    relatedWorks: [
      { title: "NextGen Hosting", category: "Performance" },
      { title: "SEO Mastery", category: "SEO" }
    ],
    projectUrl: "example.com", clientLogo: "/clients/ifind101-logo.webp",
    imageUrl: "https://picsum.photos/seed/case3/800/600"
  },
  {
    id: "d4e5f6g7-h8i9-0123-defg-456789012345",
    title: "Ncukumane Digitals",
    subtitle: "Building an elegant web showcase for a creative agency.",
    year: 2020,
    categories: ["Branding", "Packaging", "Development"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "Cherry Studio",
    headquarters: "New York, USA",
    industry: "Creative Agency",
    founders: ["Anna Lee", "Carlos Diaz"],
    services: ["Website design", "Brand guidelines", "UI system"],
    timeSpent: "2020, 4 months",
    overview: "Designed a portfolio site that highlights the studio's artistic edge.",
    challenge: "Agency lacked a modern online portfolio to attract international clients.",
    result: "Interactive and responsive showcase website launched.",
    metrics: {
      websiteTimeIncrease: "60",
      socialMediaReach: "2",
      fundingRaised: "3.7"
    },
    quote: {
      text: "The new portfolio doubled our inbound leads within weeks.",
      author: "Anna Lee",
      position: "Co-founder"
    },
    relatedWorks: [
      { title: "Creative Sparks", category: "Branding" },
      { title: "Design Flow", category: "UI/UX" }
    ],
    projectUrl: "example.com", clientLogo: "/clients/ncukumanedigital.webp",
    imageUrl: "https://picsum.photos/seed/case4/800/600"
  },
];