# AI Career Coach Platform

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Components](#architecture--components)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Background Jobs & Workflows](#background-jobs--workflows)
- [Configuration & Environment Variables](#configuration--environment-variables)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Contact](#contact)

---

## Project Overview
The **AI Career Coach Platform** is a full-stack web application designed to guide users through the career development process with AI-driven insights and tools. From onboarding and industry analysis to resume generation, quizzes, and cover letters, this platform centralizes all aspects of career planning into an intuitive, personalized experience.

**Key Objectives:**
- Personalize career guidance based on user-selected industries and skills
- Automate resume and cover letter creation using Markdown and AI (Google Gemini)
- Provide interactive AI-generated quizzes to track learning progress
- Visualize industry trends and user performance with dynamic charts

---

## Features
- **User Authentication & Profiles**: Secure signup/login via Clerk, with customizable profile pages
- **Onboarding Flow**: Industry, sub-industry, and skill selection stored in PostgreSQL
- **Industry Insights**: AI-curated market outlooks, salary trends, trending jobs, and recommended skills (charts powered by Shadcn)
- **Resume Builder**: Markdown-driven resume templates, real-time preview, customization, and PDF download
- **AI Quiz Module**: Dynamic multiple-choice quizzes, automated scoring, and performance tracking over time
- **Cover Letter Generator**: AI-generated, role- and company-specific cover letters (powered by Google Gemini), stored and editable
- **User Dashboard**: Central hub displaying insights, resume, quiz history, and cover letters

---

## Tech Stack
| Layer               | Technology             |
|---------------------|------------------------|
| Frontend Framework  | Next.js                |
| UI Components       | Shadcn (Tailwind CSS)  |
| Authentication      | Clerk                  |
| Background Jobs     | Inngest                |
| ORM & Database      | Prisma & PostgreSQL    |
| AI & Language Model | Google Gemini API      |
| Hosting & Deployment| Vercel (Next.js)       |

---

## Architecture & Components
1. **Next.js Client & Server**  
   - Server-side rendering for SEO and performance  
   - API routes for backend logic and data operations

2. **Clerk**  
   - User authentication, sessions, and profile management  
   - Prebuilt React components and hooks

3. **Prisma & PostgreSQL**  
   - Data models: User, IndustryPreference, ResumeData, QuizResult, CoverLetter, Skill  
   - Easy migrations and type-safe queries

4. **Inngest**  
   - Background workflows (quiz scoring, cover letter generation)

5. **AI Integrations**  
   - Google Gemini prompts for quizzes and cover letters

---

## Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-career-coach.git
   cd ai-career-coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2luZ3VsYXItZ29waGVyLTUxLmNsZXJrLmFjY291bnRzLmRldiQ
   CLERK_SECRET_KEY=sk_test_Kbn1ktq8ZqTVV3e0oa0O0QtGYTGRnohqN7q9LOEsBM
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   DATABASE_URL=postgresql://neondbdf_owner:npg_7VBo0qJIrQXS@ep-quiet-fire-a4cu2rha-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
   DIRECT_URL=postgresql://neondb_owner:npg_Jm2AQpuw0xCr@ep-aged-cldfdfoud-a4qi7z6k-pooler.us-east-1.aws.neon.tech/neondb?connect_timeout=10
   GEMINI_API_KEY=AIzaSyCraMQR1ty-t3CgdU62gVMvge16uu6gJqo
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

---

## Usage
- **Onboarding**: Navigate to `/onboarding` to set industry preferences
- **Dashboard**: Visit `/dashboard` for personalized charts and insights
- **Resume**: Go to `/resume` to build, preview, customize, and download your resume
- **Interview (Quizzes)**: Access `/interview` for AI-generated quizzes and performance tracking
- **Cover Letter**: Open `/ai-cover-letter` to generate and manage cover letter drafts

---

## Database Schema 
```prisma
model User {
  id            String      @id @default(cuid())
  email         String      @unique
  clerkId       String      @unique
  preferences   Preference[]
  resumeData    ResumeData?
  quizResults   QuizResult[]
  coverLetters  CoverLetter[]
  createdAt     DateTime    @default(now())
}

// ... other models (Assessment, , IndustryInsight, CoverLetter, Resume)
```

---

## Background Jobs & Workflows
- **Quiz Workflow**: Generates quiz questions via Gemini, scores submissions, and updates `QuizResult`
- **Cover Letter Workflow**: Sends prompts to Gemini, saves generated cover letter
- **Resume PDF Generation**: Converts markdown resume to PDF on demand

---

## Configuration & Environment Variables
| Variable                                   | Description                             |
|--------------------------------------------|-----------------------------------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`        | Clerk frontend publishable key          |
| `CLERK_SECRET_KEY`                         | Clerk backend secret key                |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`            | Path for sign-in page                   |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`            | Path for sign-up page                   |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`      | Redirect after sign-in                  |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`      | Redirect after sign-up                  |
| `DATABASE_URL`                             | Primary Neon Postgres connection string |
| `DIRECT_URL`                               | Direct Neon Postgres connection string  |
| `GEMINI_API_KEY`                           | Google Gemini API key                   |

---

## Future Enhancements
- Connection pooling
- Built-in ATS scanning
- AI chatbot for career queries
- Real-time job board API integrations (LinkedIn, Indeed)
- LinkedIn profile auto-import

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

---

## Contact
Developed by [Namra Vora] – [voranamra625@gmail.com]  
GitHub: https://github.com/Vora-Namra  
LinkedIn: https://www.linkedin.com/in/namra-vora/
