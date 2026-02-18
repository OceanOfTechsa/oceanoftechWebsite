// types.ts
export interface Career {
  id      ?: string;
  title    : string;
  slug     : string;
  category : string;
  location : {
    city: string;
    region?: string;
    country: string;
  };
  salary: {
    amount: number;
    currency: "ZAR";
    period: "year" | "month" | "hour";
  };
  skills                : string[];
  responsibilities      : string[];
  experience            : string[];
  education             : string[];
  description           : string;
  candidates            : number
  type                  : "Remote" | "Hybrid" | "Home" | "Part-time",
  additionalRequirements: string,
  contact               : {
    email: string;
    phone: string;
  };
}

// careers.ts
export const careers: Career[] = [
  {
    title: "UI/UX and Product Designer",
    slug: "ui-ux-product-designer",
    category: "Design",
    location: { city: "Durban", region: "San Francisco", country: "RSA" },
    salary: { amount: 32000, currency: "ZAR", period: "year" },
    type: "Hybrid",
    skills: [
      "Involving The Team In Decisions That Affect Them",
      "Displays technical or professional expertise",
      "Displays high integrity and honesty",
      "Solves problems and analyzes issues",
      "Communicates powerfully and prolifically"
    ],
    responsibilities: [
      "Writing SEO Performant Code",
      "Converting Design to Code"
    ],
    experience:["Ideally, 2 years to 4 years experience in an agency environment working in multi-tiered tasks"],
    education: ["Bachelor Degree"],
    description: "Perceived end knowledge certainly day sweetness why cordially... (trimmed for brevity)",
    candidates: 2,
    additionalRequirements: "A portfolio of professional design projects that includes work with web/mobile applications, demonstrating your design process and problem-solving skills.",
    contact: { email: "info@example.com", phone: "+79 2589 63598" }
  },
  {
    title: "React Frontend Developer",
    slug: "react-frontend-developer",
    category: "development",
    location: { city: "New York", country: "USA" },
    salary: { amount: 45000, currency: "ZAR", period: "year" },
    type: "Home",
    skills: [
      "Proficient in React and Tailwind CSS",
      "Understanding of responsive design",
      "Strong debugging skills",
      "Good communication"
    ],
    responsibilities: [
      "Developing interactive UI components",
      "Collaborating with designers",
      "Optimizing web performance"
    ],
    experience: ["3+ years in web development"],
    education: ["Bachelor in Computer Science or related field"],
    description: "Create intuitive and responsive user interfaces using modern frontend technologies...",
    additionalRequirements: "A portfolio of professional design projects that includes work with web/mobile applications, demonstrating your design process and problem-solving skills.",
    candidates: 11,
    contact: { email: "jobs@example.com", phone: "+1 555 123 4567" }
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    category: "marketing",
    location: { city: "London", country: "UK" },
    salary: { amount: 30000, currency: "ZAR", period: "year" },
    type: "Part-time",
    skills: [
      "SEO & SEM strategies",
      "Social media marketing",
      "Analytics and reporting",
      "Content creation"
    ],
    responsibilities: [
      "Designing marketing campaigns",
      "Monitoring ad spend",
      "Creating performance reports"
    ],
    experience: ["2+ years in digital marketing roles"],
    education: ["Marketing or Business degree"],
    description:"Plan and execute digital marketing strategies to drive brand awareness and lead generation...",
    additionalRequirements: "A portfolio of professional design projects that includes work with web/mobile applications, demonstrating your design process and problem-solving skills.",
    candidates: 5,
    contact: { email: "marketing@example.co.uk", phone: "+44 20 7946 0958" }
  }
];
