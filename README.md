# Ocean of tech Website - Next.js

This repository contains the **official website of Ocean of tech**, built with **[Next.js](https://nextjs.org)** and deployed on **Vercel**.  
It showcases the company’s services, portfolio, and contact information.

---

## 🚀 Getting Started

### Prerequisites
* **Node.js 18+** installed on your machine
* npm, yarn, pnpm, or bun package manage
* Run the development server locally:

### Local Development
1. **Clone the repository:**
```bash
git clone https://github.com/your-org/your-company-website.git
cd your-company-website
```
2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 in your browser to view the website.
Edit pages in the app/ directory; changes update automatically.

---
### 🏗 Project Structure

your-company-website/
├── app/                 # Pages and layouts (App Router)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── services/       # Services page
│   ├── portfolio/      # Portfolio page
│   └── contact/        # Contact page
├── components/         # Reusable UI components
│   ├── ui/            # Basic components (buttons, cards)
│   ├── layout/        # Layout components (navbar, footer)
│   └── sections/      # Page sections
├── public/            # Static assets
│   ├── images/        # Images and graphics
│   └── icons/         # Icons and logos
├── lib/               # Utilities and helpers
├── styles/            # Additional styles
└── types/             # TypeScript type definitions

---
### 🛠 Technologies Used
Next.js – React framework for server-side rendering and static site generation

TypeScript – Strongly typed JavaScript development

Tailwind CSS / Custom CSS – Styling and responsive layouts

Vercel – Hosting and deployment platform

Semantic Release – Automatic versioning and changelog generation