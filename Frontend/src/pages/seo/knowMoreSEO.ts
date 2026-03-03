// src/pages/seo/knowMoreSEO.ts
// Per-route SEO metadata for the KnowMore community pages

export const knowMoreSEO: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonical: string;
  }
> = {
  "/ourcommunity/learners": {
    title: "For Learners | Project-Based AI & ML Cohorts | v18hub",
    description:
      "Learn AI, machine learning, GenAI and data science by solving real industry problems. v18hub cohorts are execution-driven, portfolio-focused, and open to students from Sem 3 onwards. 200+ students across 18 colleges PAN India.",
    ogTitle: "Learn AI by Doing — Not Just Watching | v18hub Learners",
    ogDescription:
      "Build resume-grade AI projects, work alongside industry professionals, and develop a research mindset. v18hub cohorts are designed for students who want more than a certificate.",
    canonical: "https://v18hub.in/ourcommunity/learners",
  },
  "/ourcommunity/educators": {
    title: "For Educators | Integrate Real-World AI Projects | v18hub",
    description:
      "Help your students build industry-ready AI skills through structured, semester-wise cohorts. Fully mapped to POs and COs. Strengthens NAAC narratives, placement outcomes, and applied research potential.",
    ogTitle: "Bridge Academia & Industry for Your Students | v18hub Educators",
    ogDescription:
      "v18hub's 4-semester AI learning program integrates with your curriculum, maps to POs/COs, and delivers visible student outcomes within one academic year.",
    canonical: "https://v18hub.in/ourcommunity/educators",
  },
  "/ourcommunity/mentors": {
    title: "For Mentors | Guide AI Learners on Real Projects | v18hub",
    description:
      "Share your expertise by guiding learners through real AI and data science problems. v18hub mentors work with cross-demographic cohorts including students and working professionals across India.",
    ogTitle: "Mentor the Next Generation of AI Practitioners | v18hub",
    ogDescription:
      "v18hub mentors guide learners through execution-driven AI cohorts — real problem statements, research paper reviews, and structured milestone deliverables.",
    canonical: "https://v18hub.in/ourcommunity/mentors",
  },
  "/ourcommunity/industry-partners": {
    title: "For Industry Partners | Co-Design AI Cohorts & Hire Talent | v18hub",
    description:
      "Partner with v18hub to co-design cohorts around your real use cases, reduce onboarding costs, and hire directly from a pre-vetted pool of execution-trained AI learners across India.",
    ogTitle: "Co-Design Cohorts & Hire Execution-Ready AI Talent | v18hub",
    ogDescription:
      "Industry partners at v18hub shape what learners build — and get early access to a talent pipeline trained on their actual problem statements.",
    canonical: "https://v18hub.in/ourcommunity/industry-partners",
  },
};
