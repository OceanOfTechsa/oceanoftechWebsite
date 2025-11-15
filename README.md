# Company Website - Next.js

This repository contains the official website of [Your Company Name], built with Next.js and deployed on Vercel. It showcases your company's services, portfolio, and contact information.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, yarn, pnpm, or bun package manager

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

4. **Open your browser** and navigate to `http://localhost:3000`

The page will automatically update as you edit files in the `app/` directory.

## 🏗 Project Structure

```
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
```

## 🛠 Technologies Used

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="20" height="20" alt="Next.js"/> **Next.js** – ⚡ React framework for server-side rendering and static site generation
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="20" height="20" alt="TypeScript"/> **TypeScript** – 🔷 Strongly typed JavaScript development
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="20" height="20" alt="Tailwind CSS"/> **Tailwind CSS** – 🎨 Styling and responsive layouts
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="20" height="20" alt="Vercel"/> **Vercel** – 🚀 Hosting and deployment platform
- <img src="https://avatars.githubusercontent.com/u/12551863?s=200&v=4" width="20" height="20" alt="Semantic Release"/> **Semantic Release** – 📦 Automatic versioning and changelog generation

## 📈 Development Workflow

### Making Changes

1. **Create a new branch** for your feature or fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

2. **Make your changes** in the appropriate directories:
   - `app/` – Page components and routes
   - `components/` – Reusable UI components
   - `styles/` – Styling updates

3. **Test your changes** locally using the development server

4. **Commit** using Conventional Commits (see below for guidelines)

5. **Push** and create a Pull Request for review

### Workflow Diagram

```
Developer
    |
    | (Commit using Conventional Commits)
    v
   Feature Branch
    |
    | (Create Pull Request)
    v
   Code Review
    |
    | (Merge to main)
    v
   main branch
    |
    | (GitHub Actions triggers workflow)
    v
Semantic Release
    |
    |-- Updates CHANGELOG.md
    |-- Creates version tag
    |-- Generates GitHub Release
    v
   GitHub Release
    |
    | (Deployment Trigger)
    v
    Vercel (Production)
```

## 📝 Versioning & Semantic Release

This project uses **Semantic Versioning** and **Semantic Release** for automatic versioning, changelog generation, and GitHub releases.

### Commit Message Convention

| Commit Type | Description | Version Bump |
|------------|-------------|--------------|
| `feat:` | Adds a new feature | MINOR (1.0.0 → 1.1.0) |
| `fix:` | Bug fixes | PATCH (1.0.0 → 1.0.1) |
| `feat!:` or `fix!:` | Breaking changes | MAJOR (1.0.0 → 2.0.0) |
| `chore:` | Updates to dependencies, build scripts | None |
| `docs:` | Documentation only | None |
| `refactor:` | Code restructuring without changing behavior | None |

### Examples

```bash
git commit -m "feat: add new pricing section"
git commit -m "fix: correct navbar alignment on mobile"
git commit -m "feat!: redesign homepage layout - breaks existing templates"
git commit -m "docs: update installation instructions"
```

> **Note:** Semantic Release automatically handles version bumps, CHANGELOG updates, git tagging, and GitHub releases when changes are merged to `main`.

## 📦 Deployment

### Automatic Deployment (Recommended)

- Vercel automatically builds and deploys the website on every push to `main`
- Preview deployments are created for all pull requests

### Manual Deployment

1. **Build the project:**

```bash
npm run build
```

2. **Deploy to Vercel:**

```bash
npx vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes using conventional commit format
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 CHANGELOG

The changelog is **automatically maintained** by Semantic Release. **Do not edit CHANGELOG.md manually.**

### Example format:

```markdown
## [1.2.0] - 2025-01-15
### Added
- New pricing section on homepage
- Updated team page layout

### Fixed
- Navbar alignment on mobile devices
- Contact form validation
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Learn about features and APIs
- [Next.js Learn Course](https://nextjs.org/learn) – Interactive tutorial
- [Vercel Deployment Docs](https://vercel.com/docs) – Deployment guidelines
- [Semantic Versioning](https://semver.org/) – Versioning standards
- [Conventional Commits](https://www.conventionalcommits.org/) – Commit message guidelines

## ⚡ Best Practices

### ✅ Do's
- Always use Conventional Commits for proper version bumping
- Test changes locally before pushing to `master`
- Keep components modular and reusable
- Follow TypeScript best practices
- Ensure responsive design across all devices

### ❌ Don'ts
- Do not manually edit `CHANGELOG.md`
- Avoid pushing directly to `master` - use Pull Requests

## 🆘 Troubleshooting

### Common Issues

**Development server won't start:**
- Ensure Node.js version 18+ is installed
- Delete `node_modules` and run `npm install` again

**Build failures:**
- Check TypeScript errors with `npm run type-check`
- Verify all environment variables are set

**Styling issues:**
- Clear browser cache
- Restart development server

For additional support, please open an issue in the repository.

---

Made with ❤️ by Ocean of tech