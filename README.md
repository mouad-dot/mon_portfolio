# Mouad Maafi - AI Engineering Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Modern, performant, and bilingual portfolio showcasing AI/ML projects with measurable results

**Live:** [mouadmaafi-portfolio.vercel.app](https://mouadmaafi-portfolio.vercel.app)

---

## 🎯 Overview

Professional portfolio featuring:
- **3 AI/ML projects** with real performance metrics
- **6 technical domains** with proficiency levels
- **Bilingual support** (EN/FR) with i18n
- **Modern UI/UX** with glassmorphism and smooth animations
- **Optimized performance** (Lighthouse 95+)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview build
npm run preview
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **Animation** | Framer Motion |
| **Build** | Vite |
| **Deployment** | Vercel |
| **Code Quality** | ESLint, TypeScript strict mode |

---

## 📁 Project Structure

```
src/
├── components/     # Atomic design components
├── features/       # Feature-based sections
├── data/          # Content & configuration
├── types/         # TypeScript definitions
└── lib/           # Utilities (i18n, animations)
```

---

## ✨ Key Features

### Performance
- ⚡ Lighthouse score 95+
- 📦 Optimized bundle size (< 220KB gzipped)
- 🎨 60 FPS animations
- 📱 Mobile-first responsive

### Design
- 🌐 Bilingual (English/French)
- 🎭 Glassmorphism effects
- 🌈 Dynamic gradients
- ♿ WCAG 2.1 accessible

### Content
- 📊 Real project metrics (accuracy, speed, mAP)
- 🔧 Technical skill matrix
- 📄 Downloadable CV
- 🔗 Social links integration

---

## 🎨 Customization

Update content in `/src/data`:

```typescript
// projects.data.ts - Add your projects
{
  title: { en: "Project Name", fr: "Nom du Projet" },
  metrics: [{ label: {...}, value: 95, unit: "%" }],
  techStack: [{ name: "YOLOv8", category: "framework" }]
}

// skills.data.ts - Update skills
{
  technologies: [
    { name: "PyTorch", proficiency: "advanced", yearsOfExperience: 2 }
  ]
}

// personal.data.ts - Personal information
```

---

## 📊 Performance Metrics

- **Build Time:** ~15s
- **Bundle Size:** 214KB (gzipped)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s

---

## 🌐 Deployment

### Quick Deployment Guide 🚀

#### Step 1: Push to GitHub

```bash
# Using the automated script (Windows)
.\setup-github.ps1 -GithubUsername YOUR_USERNAME

# Or manually:
git remote add origin https://github.com/YOUR_USERNAME/mon-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "Add New Project"
4. Import your `mon-portfolio` repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Done! Your site will be live in ~2 minutes 🎉

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

#### Automated Deployments

After initial setup, use the deployment script:

```bash
# Windows PowerShell
.\deploy.ps1 "Your commit message"

# Or manually
git add .
git commit -m "Update portfolio"
git push
# Vercel auto-deploys on push!
```

### Other Platforms

Works with Netlify, Firebase, GitHub Pages, or any static hosting.

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details

---

## 👤 Author

**Mouad Maafi**  
AI Engineering Student | Computer Vision & Deep Learning

- 🌐 Portfolio: [mouadmaafi-portfolio.vercel.app](https://mouadmaafi-portfolio.vercel.app)
- 💼 LinkedIn: [Mouad Maafi](https://www.linkedin.com/in/mouad-m-370814310/)
- 🐙 GitHub: [@mouad-dot](https://github.com/mouad-dot)
- 📧 Email: mouadmaafi1@gmail.com

---

**⭐ Star this repo if you find it useful!**

