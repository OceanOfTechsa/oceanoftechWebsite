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
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "Ocean of tech",
    subtitle: "Turning raw concepts into tangible, scalable digital solutions.",
    year: 2019,
    categories: ["Graphics", "Development", "UI/UX design"],
    images: ["/08.jpg", "/06.jpg", "/05.jpg"],
    client: "Webestica Webflow Agency",
    headquarters: "489 Depot Road Midland",
    industry: "E-commerce",
    founders: ["Emma Watson", "Maria Smith"],
    services: ["Email marketing", "Product design", "Content marketing"],
    timeSpent: "2023, 4 months",
    overview: "Ideas are the seeds of innovation. Through research and refinement, concepts are transformed into actionable solutions.",
    challenge: "Clients struggled with fragmented digital workflows and lack of consistent branding across platforms.",
    result: "Launched a responsive platform that unified their customer journey and boosted engagement.",
    metrics: {
      websiteTimeIncrease: "22",
      socialMediaReach: "4.5",
      fundingRaised: "12.8"
    },
    quote: {
      text: "They helped us reimagine our digital presence, and the results were beyond expectations.",
      author: "Emma Watson",
      position: "CEO, Co-founder"
    },
    relatedWorks: [
      { title: "Brushstrokes and Beyond", category: "UI/UX design" },
      { title: "Ceremony Worthy of Time", category: "Web design" },
      { title: "The Art of Storytelling", category: "Graphics design" }
    ],
    projectUrl: "ocean-of-tech", 
    clientLogo: "/04.svg",
    imageUrl: "/Ocean of tech.svg",
  },
  {
    id: "b2c3d4e5-f6g7-8901-bcde-f23456789012",
    title: "The Success Company",
    subtitle: "Elevating a sustainable beauty brand with clean visuals.",
    year: 2022,
    categories: ["Branding", "Packaging", "UI/UX design"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "Bio Cosmetics",
    headquarters: "London, UK",
    industry: "Beauty & Wellness",
    founders: ["Sophia Brown"],
    services: ["Brand identity", "Packaging design", "E-commerce UX"],
    timeSpent: "2022, 6 months",
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
    projectUrl: "the-success-company", 
    clientLogo: "/04.svg",
    imageUrl: "/The Success Company.svg"
  },
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    title: "TechWave Optimization",
    subtitle: "Boosting speed and SEO for a SaaS platform.",
    year: 2021,
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
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "https://picsum.photos/seed/case3/800/600"
  },
  {
    id: "d4e5f6g7-h8i9-0123-defg-456789012345",
    title: "Cherry Studio Portfolio",
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
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "https://picsum.photos/seed/case4/800/600"
  },
  {
    id: "e5f6g7h8-i9j0-1234-efgh-567890123456",
    title: "UrbanFit App Launch",
    subtitle: "A fitness app empowering city lifestyles.",
    year: 2023,
    categories: ["Mobile App", "UI/UX", "Marketing"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "UrbanFit",
    headquarters: "Toronto, Canada",
    industry: "Health & Fitness",
    founders: ["Maya Patel"],
    services: ["App design", "Growth marketing", "User research"],
    timeSpent: "2023, 5 months",
    overview: "Designed and launched a fitness app with AI-based workout recommendations.",
    challenge: "App needed high engagement and user retention from launch.",
    result: "Achieved 100K downloads in the first month with strong retention.",
    metrics: {
      websiteTimeIncrease: "40",
      socialMediaReach: "3",
      fundingRaised: "8"
    },
    quote: {
      text: "They gave our product the polish it needed to dominate the market.",
      author: "Maya Patel",
      position: "CEO"
    },
    relatedWorks: [
      { title: "Wellness Hub", category: "Mobile App" },
      { title: "FitTrack", category: "Health Tech" }
    ],
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "https://picsum.photos/seed/case5/800/600"
  },
  {
    id: "f6g7h8i9-j0k1-2345-fghi-678901234567",
    title: "EduNext LMS",
    subtitle: "Reinventing digital classrooms for hybrid learning.",
    year: 2022,
    categories: ["EdTech", "Platform", "UI/UX"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "EduNext",
    headquarters: "Sydney, Australia",
    industry: "Education",
    founders: ["Liam Johnson"],
    services: ["Platform design", "Gamification", "Student analytics"],
    timeSpent: "2022, 8 months",
    overview: "Built a learning platform that merges online and offline learning.",
    challenge: "Traditional systems weren't engaging students or providing insights.",
    result: "Introduced gamified features and analytics dashboard for teachers.",
    metrics: {
      websiteTimeIncrease: "50",
      socialMediaReach: "1.8",
      fundingRaised: "15"
    },
    quote: {
      text: "Students finally find online learning exciting — that's priceless.",
      author: "Liam Johnson",
      position: "Founder"
    },
    relatedWorks: [
      { title: "SmartLearn", category: "EdTech" },
      { title: "ClassHub", category: "Platform" }
    ],
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "https://picsum.photos/seed/case6/800/600"
  },
  {
    id: "g7h8i9j0-k1l2-3456-ghij-789012345678",
    title: "Finova Dashboard",
    subtitle: "Making finance tracking simple and intuitive.",
    year: 2021,
    categories: ["FinTech", "Dashboard", "UI/UX"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "Finova",
    headquarters: "San Francisco, USA",
    industry: "Finance",
    founders: ["Jason Wu"],
    services: ["Dashboard design", "UX research", "Data visualization"],
    timeSpent: "2021, 4 months",
    overview: "Developed an intuitive finance dashboard for startups and SMBs.",
    challenge: "Users overwhelmed by raw financial data.",
    result: "Clear, interactive dashboards simplified financial decision-making.",
    metrics: {
      websiteTimeIncrease: "25",
      socialMediaReach: "700",
      fundingRaised: "6.3"
    },
    quote: {
      text: "This dashboard made us rethink how financial data should be consumed.",
      author: "Jason Wu",
      position: "CEO"
    },
    relatedWorks: [
      { title: "MoneyMap", category: "FinTech" },
      { title: "ExpenseEase", category: "Finance App" }
    ],
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "https://picsum.photos/seed/case7/800/600"
  },
  {
    id: "h8i9j0k1-l2m3-4567-hijk-890123456789",
    title: "GreenEarth Campaign",
    subtitle: "Driving sustainability through digital awareness.",
    year: 2020,
    categories: ["Marketing", "Campaign", "Branding"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "GreenEarth NGO",
    headquarters: "Cape Town, South Africa",
    industry: "Non-profit",
    founders: ["Sarah Nkosi"],
    services: ["Digital campaign", "Branding", "Content strategy"],
    timeSpent: "2020, 3 months",
    overview: "Digital campaign raising awareness about climate action.",
    challenge: "Limited reach and engagement on previous campaigns.",
    result: "Achieved global participation with viral social media strategy.",
    metrics: {
      websiteTimeIncrease: "70",
      socialMediaReach: "10",
      fundingRaised: "20"
    },
    quote: {
      text: "They helped us amplify our voice for climate justice.",
      author: "Sarah Nkosi",
      position: "Director"
    },
    relatedWorks: [
      { title: "EcoFuture", category: "Campaign" },
      { title: "ZeroWaste", category: "Branding" }
    ],
    projectUrl: "example.com",
    imageUrl: "https://picsum.photos/seed/case8/800/600",
    clientLogo: "/04.svg",
  },
  {
    id: "i9j0k1l2-m3n4-5678-ijkl-901234567890",
    title: "MedConnect Portal",
    subtitle: "A secure portal for patient-doctor collaboration.",
    year: 2023,
    categories: ["HealthTech", "Portal", "Security"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "MedConnect",
    headquarters: "Boston, USA",
    industry: "Healthcare",
    founders: ["Olivia White"],
    services: ["Portal design", "HIPAA compliance", "User testing"],
    timeSpent: "2023, 9 months",
    overview: "Built a secure healthcare portal for online appointments and records.",
    challenge: "Patients lacked a simple, secure way to connect with doctors.",
    result: "HIPAA-compliant platform with secure messaging and records.",
    metrics: {
      websiteTimeIncrease: "55",
      socialMediaReach: "500",
      fundingRaised: "25"
    },
    quote: {
      text: "Trust and security were top priorities — they delivered flawlessly.",
      author: "Olivia White",
      position: "Founder & MD"
    },
    relatedWorks: [
      { title: "HealthFirst", category: "Portal" },
      { title: "CareConnect", category: "HealthTech" }
    ],
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "/show.jpg"
  },
  {
    id: "j0k1l2m3-n4o5-6789-jklm-012345678901",
    title: "AutoDrive AI",
    subtitle: "Revolutionizing transport with AI simulations.",
    year: 2022,
    categories: ["AI", "Automotive", "Simulation"],
    images: ["/show.jpg", "/show2.jpg", "/show3.jpg"],
    client: "AutoDrive Labs",
    headquarters: "Tokyo, Japan",
    industry: "Automotive",
    founders: ["Kenji Tanaka"],
    services: ["AI modeling", "Simulation", "UX design"],
    timeSpent: "2022, 12 months",
    overview: "Built AI simulation environments to test autonomous vehicles.",
    challenge: "High costs and risks of real-world testing.",
    result: "Simulation platform reduced testing costs by 70%.",
    metrics: {
      websiteTimeIncrease: "45",
      socialMediaReach: "6",
      fundingRaised: "50M"
    },
    quote: {
      text: "Our AI testing went from months to days, thanks to the platform.",
      author: "Kenji Tanaka",
      position: "CTO"
    },
    relatedWorks: [
      { title: "DriveSim", category: "AI" },
      { title: "SafeRoads", category: "Automotive" }
    ],
    projectUrl: "example.com", clientLogo: "/04.svg",
    imageUrl: "/show.jpg"
  }
];