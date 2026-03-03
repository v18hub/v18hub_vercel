// src/pages/Why_Us.tsx
import { Helmet } from "@vuer-ai/react-helmet-async";
import { Link } from "react-router-dom";

// ─── SEO: JSON-LD Structured Data ────────────────────────────────────────────
// Move into react-helmet or your app's <Helmet> for true <head> injection.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "name": "v18Hub",
      "url": "https://v18hub.in",
      "description":
        "v18Hub is India's project-based learning platform connecting learners, mentors, educators, and industry partners through real-world AI and data science cohorts. Cohort-based, research-integrated, and portfolio-focused.",
      "sameAs": ["https://v18hub.in/why-us", "https://v18hub.in/explore-cohorts"],
      "knowsAbout": [
        "Project-based learning",
        "AI education",
        "Data science cohorts",
        "Industry mentorship",
        "Portfolio development",
        "Research-to-product pipeline",
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who are v18Hub cohorts for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "v18Hub cohorts are for learners who want hands-on experience building real AI and data science systems, educators who want to make their programmes more outcome-driven, and industry partners looking to engage with trained, motivated talent.",
          },
        },
        {
          "@type": "Question",
          "name": "What makes v18Hub different from other online learning platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "v18Hub is the only platform in India combining Problem-First Learning, Literature-Backed Execution, Cross-Demographic Cohorts, a Continuous Learning Loop, and a Research-to-Product Pipeline. Students build end-to-end solutions with industry professionals and graduate with portfolios, not just certificates.",
          },
        },
        {
          "@type": "Question",
          "name": "How does v18Hub's project-based learning model work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Each cohort starts with a real industry problem. Learners build hands-on from Day 1 with weekly milestones, curated research reading, and mentorship from experts. Work is documented on GitHub and certified for outcomes.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the Research-to-Product pipeline at v18Hub?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Every v18Hub cohort ends with open research topics, creating a continuous pipeline from learning to research to product. This is a vision no conventional EdTech or bootcamp platform offers.",
          },
        },
      ],
    },
  ],
};

const Why_Us = () => {

  const steps = [
    {
      img: "/Images/forecasting_and_timeseries.jpg",
      title: "Start with Real Problems",
      desc: "Each cohort is built around actual industry challenges or real-world data, not textbook simulations.",
    },
    {
      img: "/Images/partners_track_project.png",
      title: "Learn by Building",
      desc: "Students begin hands-on work from Day 1 with weekly milestones, deliverables, and peer accountability.",
    },
    {
      img: "/Images/mentoring.jpg",
      title: "Guided by Experts",
      desc: "Mentors from academia and industry provide continuous feedback, the kind that only comes from real experience.",
    },
    {
      img: "/Images/evaluation.png",
      title: "Evaluate & Showcase",
      desc: "Work is documented on GitHub, reviewed by mentors, and certified giving you proof, not just a certificate.",
    },
  ];

  const signals = [
    { stat: "35%",  label: "Drop in entry-level job postings since 2023",       note: "Revelio Labs" },
    { stat: "50%",  label: "Decline in new-grad hiring at top tech firms",       note: "SignalFire Research" },
    { stat: "78%",  label: "Organisations already using AI in daily workflows",  note: "Stanford AI Index 2025" },
  ];

  // From pitch deck Slide 2 — India-specific survey data
  const indiaProblems = [
    { pct: "37.3%", label: "cite insufficient technical capabilities as the top barrier to employability", icon: "🛠️" },
    { pct: "33.9%", label: "highlight inability to approach and solve real-world problems", icon: "🧩" },
    { pct: "90%+",  label: "of students surveyed were defaulted to web dev, rarely exploring high-impact domains like ML, DL & GenAI fields", icon: "📡" },
  ];

  // From pitch deck Slide 4 — 5 differentiators
  const differentiators = [
    {
      icon: "🎯",
      title: "Problem-First Learning",
      body: "Cohorts are built around real problems. The learning follows the problem, not a fixed syllabus. Students work on actual industry and research-grade challenges, not simulations.",
    },
    {
      icon: "📚",
      title: "Literature-Backed Execution",
      body: "Students refer research papers and technical articles curated specifically for each project as the cohort progresses - building the research habit from day one.",
    },
    {
      icon: "🤝",
      title: "Cross-Demographic Cohorts",
      body: "Our learners include both undergraduate students and professionals with decades of industry experience, bringing meaningful real-world context into a collaborative learning environment.",
    },
    {
      icon: "🔄",
      title: "Continuous Learning Loop",
      body: "Every cohort ends with open research topics. Each ending is a new beginning, keeping learners engaged in a cycle of growth long after the cohort closes.",
    },
    {
      icon: "🚀",
      title: "Research-to-Product Pipeline",
      body: "Learning → Research → Product. A vision no conventional EdTech or bootcamp offers. Every cohort contributes to a pipeline of ideas that can become real-world products.",
    },
  ];

  // From pitch deck Slide 5 — real student testimonials
  const testimonials = [
    {
      quote: "The cohort was 90% execution-driven. We were given frameworks and had to figure out how to build and code with mentorship support when stuck.",
      who: "3rd Year Student",
    },
    {
      quote: "The GenAI cohort gave me a foundation in RAG, embeddings, and vector databases. I could follow IIT/IISc/UCLA faculty sessions at the CSML workshop in IISc with ease.",
      who: "3rd Year Student",
    },
    {
      quote: "My team used the RAG startup funding project we built during the cohort as our GHCI project. We wouldn't have been able to do it without v18hub. We won runners-up.",
      who: "3rd Year Student - GHCI-2025 Runners-Up",
    },
  ];

  // From pitch deck Slide 5 — traction numbers
  const traction = [
    { stat: "60+",   label: "Industry leaders surveyed" },
    { stat: "200+",  label: "Students across 18 colleges" },
    { stat: "100+",  label: "Students via webinars" },
    { stat: "3",     label: "Active cohorts running" },
  ];

  // From pitch deck Slide 6 — expanded win-win (4 stakeholders)
  const winRows = [
    {
      label: "Learners",
      accent: "#6A1F1B",
      points: [
        "Resume-grade project portfolios with real-world AI/ML stacks",
        "Confidence with modern AI tools, not just theory",
        "Research mindset and publication potential",
        "Foundational cohort for hesitant starters, at refundable pricing",
      ],
    },
    {
      label: "Educators",
      accent: "#6A1F1B",
      points: [
        "Stronger placement outcomes and employer trust",
        "NAAC / accreditation narrative improvement",
        "Industry-aligned applied research potential",
        "Semester-wise structured programme (Sem 3–6), scalable with no infrastructure cost",
      ],
    },
    {
      label: "Industry Partners",
      accent: "#6A1F1B",
      points: [
        "Access to an execution-trained, pre-vetted talent pipeline",
        "Co-design cohorts around your specific real-world problems",
        "Reduced onboarding and training costs",
        "Directly hire learners you already know and trust",
      ],
    },
    {
      label: "Mentors",
      accent: "#6A1F1B",
      points: [
        "Guide learners through real industry and research-grade problems",
        "Cross-demographic cohorts, learners include undergraduate students and working professionals together",
        "Visible impact: cohort graduates go on to hackathons and advanced workshops",
        "Flexible involvement - full cohort, milestone reviews, or specific sessions",
      ],
    },
  ];

  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      <Helmet>
        {/* Primary */}
        <title>Why v18hub? | Project-Based AI & ML Learning Platform India</title>
        <meta
          name="description"
          content="v18hub is India's only platform combining project-based learning, industry mentorship, and research-to-product pipelines for AI and data science. Discover why learners, educators, mentors, and industry partners choose v18hub."
        />
        <link rel="canonical" href="https://v18hub.in/why-us" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v18hub.in/why-us" />
        <meta property="og:title" content="Why v18hub? | India's Project-Based AI Learning Platform" />
        <meta
          property="og:description"
          content="Knowledge grows through DOING. v18hub connects learners, mentors, educators, and industry through real-world AI cohorts. Resume-grade projects, not just certificates."
        />
        <meta property="og:site_name" content="v18hub" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why v18hub? | India's Project-Based AI Learning Platform" />
        <meta
          name="twitter:description"
          content="Knowledge grows through DOING. v18hub connects learners, mentors, educators, and industry through real-world AI cohorts. Resume-grade projects, not just certificates."
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data — correctly placed in <head> */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="font-open-sans bg-[#f6f5ec] text-[#294b3c]">

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="flex flex-col items-center justify-center text-center py-[8vh] px-6"
          aria-label="Why choose v18Hub for project-based learning"
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            Why v18hub?
          </h1>
          <p className="mt-8 text-[#294b3c] text-2xl md:text-3xl font-semibold max-w-3xl mx-auto">
            Knowledge grows through DOING
          </p>
          <p className="mt-6 text-base md:text-lg text-[#546f61] max-w-2xl mx-auto leading-relaxed font-normal">
            In a rapidly changing world, real progress comes from applying what you learn to meaningful, real-world problems.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1B — INDIA'S EMPLOYABILITY PROBLEM  ← NEW from pitch deck
            Source: Slide 2 — survey of 60 industry leaders + 200+ students
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#294b3c] py-[10vh] px-[5vw] text-[#f6f5ec]"
          aria-label="India's employability gap - survey data from 60 industry leaders and 200+ students"
        >
          <div className="max-w-4xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#a5b6ae] mb-4">
              The problem we're solving
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              India's employability gap is{" "}
              <span className="italic text-[#a5b6ae]">execution-driven, not theory-driven.</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#a5b6ae] max-w-3xl mx-auto">
              We surveyed 60 industry leaders and 200+ students across 18 colleges pan-India.
              The finding was consistent: the gap isn't knowledge, it's the ability to execute.
            </p>
          </div>

          {/* India problem stats */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#294b3c] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#294b3c] mb-14 list-none p-0 m-0"
            aria-label="Survey findings on India's tech employability gap"
          >
            {indiaProblems.map((p, i) => (
              <li key={i} className="bg-[#294b3c] px-6 py-10 text-center hover:bg-[#546f61] transition-colors duration-200">
                <span className="text-3xl mb-3 block" role="img" aria-label={p.label}>{p.icon}</span>
                <p className="text-4xl font-semibold text-[#f6f5ec] mb-3">{p.pct}</p>
                <p className="text-sm text-[#a5b6ae] leading-snug">{p.label}</p>
              </li>
            ))}
          </ul>

          {/* Global hiring context */}
          <div className="max-w-4xl mx-auto mb-14">
            <p className="text-center text-xs font-semibold tracking-[3px] uppercase text-[#f6f5ec] mb-6">
              And globally, the entry point is shrinking too
            </p>
            <ul
              className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#546f61] rounded-2xl overflow-hidden border border-[#546f61] list-none p-0 m-0"
              aria-label="Global statistics on AI's impact on hiring"
            >
              {signals.map((s, i) => (
                <li key={i} className="bg-[#294b3c] px-8 py-8 text-center hover:bg-[#546f61] transition-colors duration-200">
                  <p className="text-4xl font-semibold text-[#f6f5ec] mb-2">{s.stat}</p>
                  <p className="text-sm text-[#a5b6ae] leading-snug mb-1">{s.label}</p>
                  <p className="text-xs tracking-widest uppercase text-[#546f61]">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bridge */}
          <div className="max-w-2xl mx-auto text-center border-t border-[#294b3c] pt-10">
            <p className="text-base md:text-lg text-[#a5b6ae] leading-relaxed">
              The answer isn't more theory. It isn't another certification.
              It's structured, mentored, real-world execution, from day one.
              That's what v18hub was built to deliver.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2 — WHAT WE DO
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-[10vh] px-[5vw]"
          aria-label="What v18Hub does — India's project-based AI learning platform"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="w-full md:w-[45%] flex items-center justify-center">
              <div className="relative w-[78vw] max-w-[52vh] h-[36vh] -mt-4
                              md:w-[64vh] md:h-[44vh] md:-mt-20 mx-auto">
                <div className="absolute inset-0 w-full h-full rounded-2xl hover:scale-105 shadow-lg overflow-hidden">
                  <img
                    src="/Images/why_us_mentor.png"
                    alt="v18Hub mentor guiding a learner through a real-world AI project"
                    className="w-full h-full object-cover"
                    width={520}
                    height={440}
                    loading="eager"
                  />
                </div>
                <div className="absolute bottom-[-3rem] left-[-1rem]
                                md:bottom-[-7rem] md:left-[-6rem]
                                w-[26vh] h-[26vh]
                                rounded-2xl shadow-xl overflow-hidden border-4 border-white
                                hover:scale-105 transition-transform duration-300 z-10">
                  <img
                    src="/Images/why_us_industry.png"
                    alt="Industry partner collaborating with v18Hub learners on a live project"
                    className="w-full h-full object-cover"
                    width={260}
                    height={260}
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[50%] text-[#294b3c]">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-4">
                Our solution
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
                A cohort-based, project-driven learning model
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                <span className="font-semibold">We are the only platform in India</span> creating such an ecosystem - 
                introducing <span className="font-semibold">project-based learning at this depth and scale,
                connecting learners, mentors, educators, and industry through real-world problem solving.</span>
                <br /><br />
                v18hub is a <span className="font-semibold">cohort-based platform</span> where real problems,
                <span className="font-semibold"> either shared by industry partners or derived from publicly
                available real-world challenges</span> are turned into structured learning cohorts.
                <br /><br />
                Through collaborative, hands-on cohorts, <span className="font-semibold">students build end-to-end
                solutions, document their work like real engineers,</span> and graduate with portfolios that
                demonstrate practical skills, not just certificates.
                <br /><br />
                Our model is{" "}
                <span className="font-semibold">Cohort-Based, Research-Integrated, Portfolio-Focused</span> and
                 our mission is to <span className="font-semibold">empower the next generation of AI talent
                with confidence, clarity, and tech-ready capabilities.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3 — WHAT MAKES US DIFFERENT  ← NEW from pitch deck Slide 4
            5 differentiators no other platform offers
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#a5b6ae] py-[10vh] px-[5vw]"
          aria-label="Five differentiators that make v18Hub unique in project-based learning"
        >
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-4">
              What makes us different
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#294b3c] mb-4">
              5 Differentiators No Other Platform Offers
            </h2>
            <p className="text-base text-[#294b3c] max-w-2xl mx-auto leading-relaxed opacity-80">
              Each one matters. Together, they create something no EdTech or bootcamp offers.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <article
                key={i}
                className={`bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col
                  ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                aria-label={d.title}
              >
                <span className="text-3xl mb-4 block" role="img" aria-label={d.title}>{d.icon}</span>
                <h3 className="text-lg font-bold text-[#294b3c] mb-3">{d.title}</h3>
                <p className="text-sm text-[#546f61] leading-relaxed">{d.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4 — HOW WE MAKE LEARNING REAL
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#f6f5ec] py-[10vh] px-[5vw] text-center"
          aria-label="How v18Hub makes learning real, four-stage cohort process"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#294b3c]">
            How We Make Learning Real
          </h2>
          <p className="text-base text-[#294b3c] max-w-2xl mx-auto mb-12 leading-relaxed opacity-80">
            Every cohort follows a four-stage process, from problem to portfolio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <article
                key={i}
                className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label={`Step ${i + 1}: ${step.title}`}
              >
                <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
                  <img
                    src={step.img}
                    alt={`Step ${i + 1} — ${step.title}: v18Hub cohort project-based learning`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-2">Step {i + 1}</p>
                <h3 className="text-xl font-bold text-[#294b3c] mb-3">{step.title}</h3>
                <p className="text-base text-[#294b3c] leading-relaxed text-center">{step.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-12 text-[#294b3c] text-xl max-w-3xl mx-auto font-medium">
            Applied, project-based learning - structured, mentored, and measurable.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5 — TRACTION & TESTIMONIALS  ← NEW from pitch deck Slide 5
            Real outcomes, real student quotes
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#294b3c] py-[10vh] px-[5vw]"
          aria-label="v18Hub traction and student testimonials"
        >
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#a5b6ae] mb-4">
                Early signal. Real outcomes. Validated model.
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#f6f5ec] mb-4">
                What Our Learners Have Built
              </h2>
            </div>

            {/* Traction numbers */}
            <ul
              className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#546f61] rounded-2xl overflow-hidden border border-[#546f61] mb-14 list-none p-0 m-0"
              aria-label="v18Hub traction and reach statistics"
            >
              {traction.map((t, i) => (
                <li key={i} className="bg-[#294b3c] px-6 py-8 text-center hover:bg-[#546f61] transition-colors duration-200">
                  <p className="text-4xl md:text-5xl font-semibold text-[#f6f5ec] mb-2">{t.stat}</p>
                  <p className="text-xs text-[#a5b6ae] leading-snug">{t.label}</p>
                </li>
              ))}
            </ul>

            {/* Student quotes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="bg-[#294b3c] rounded-2xl p-7 flex flex-col"
                  aria-label={`Student testimonial from ${t.who}`}
                >
                  <span className="text-3xl text-[#a5b6ae] mb-4 leading-none">"</span>
                  <blockquote className="text-sm text-[#f6f5ec] leading-relaxed flex-grow mb-5">
                    {t.quote}
                  </blockquote>
                  <figcaption className="text-xs font-semibold tracking-widest uppercase text-[#546f61]">
                    — {t.who}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6 — A WIN–WIN FOR EVERYONE
            Split layout: large label left | vertical divider | bullet points right
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-[12vh] px-[5vw]"
          aria-label="How v18Hub benefits learners, mentors, educators, and industry partners"
        >
          {/* Heading — left aligned to match the split rows below */}
          <div className="max-w-5xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-semibold mb-1 text-[#6A1F1B]">
              A Win–Win for Everyone
            </h2>
            <div className="border-b-2 border-[#6A1F1B] w-full mb-3" />
            <p className="text-base text-[#546f61] leading-relaxed max-w-xl">
              v18hub works because everyone in the ecosystem has skin in the game.
            </p>
          </div>

          {/* Split rows — one per stakeholder */}
          <div className="max-w-5xl mx-auto flex flex-col divide-y divide-[#a5b6ae]">
            {winRows.map((row, i) => (
              <article
                key={i}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14 py-10"
                aria-label={`v18Hub for ${row.label}`}
              >
                {/* LEFT — large stakeholder label, vertically centered */}
                <div className="flex-shrink-0 w-full md:w-48 flex flex-col items-start md:items-end">
                  <span
                    className="font-bold font-serif leading-none pb-1 w-full md:text-right"
                    style={{
                      fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                      color: "#6A1F1B",
                    }}
                    aria-label={row.label}
                  >
                    {row.label}
                  </span>
                </div>

                {/* VERTICAL DIVIDER — hidden on mobile */}
                <div className="hidden md:block w-px self-stretch bg-[#a5b6ae] flex-shrink-0" />

                {/* RIGHT — bullet points */}
                <ul
                  className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3"
                  aria-label={`Benefits for ${row.label}`}
                >
                  {row.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#546f61] mt-1 flex-shrink-0 text-base">✓</span>
                      <p className="text-base text-[#294b3c] leading-relaxed">{pt}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-5xl mx-auto text-[#294b3c] font-semibold text-xl text-center">
            Together, we're building a continuous learning and innovation ecosystem.
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 7 — SUSTAINABLE LEARNING COMMUNITY
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-[12vh] px-[5vw] bg-[#a5b6ae] text-center"
          aria-label="v18Hub's self-sustaining peer mentorship learning community"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#102820] max-w-4xl mx-auto">
            Building a Sustainable Learning Community
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-[45%] flex flex-col items-end space-y-6">
              <div className="w-32 h-32 rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="/Images/self sustainablity.webp"
                  alt="Self-sustaining learning ecosystem — v18Hub community cycle"
                  className="w-full h-full object-contain bg-white p-4"
                  loading="lazy"
                  width={128}
                  height={128}
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-[36vh] h-[32vh] rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/Images/tracking_cohort.png"
                    alt="v18Hub learners and peer mentors collaborating inside a cohort"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={360}
                    height={320}
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-[50%] flex items-center">
              <div className="text-left">
                <p className="text-base md:text-lg leading-relaxed text-[#294b3c]">
                  At <strong className="font-bold">v18Hub</strong>, every cohort creates ripple effects. Students who complete
                  a programme often return as peer mentors, helping the next batch under expert supervision.
                  <br /><br />
                  Each cohort includes research-driven topics that encourage collaboration, exploration, and continuous learning.
                  The <strong className="font-bold">Research-to-Product pipeline</strong> means every ending is a new
                  beginning, ideas from one cohort become the foundation of the next.
                  <br /><br />
                  Over time, this creates a <strong className="font-bold">self-sustaining circle of innovation</strong> - learners
                  mentoring learners, guided by educators and industry experts. The community compounds with every cohort that ships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 8 — CTA
        ════════════════════════════════════════════════════════════════════ */}
        <section
          className="py-[10vh] text-center flex flex-col items-center justify-center gap-6"
          aria-label="Join v18Hub — explore cohorts and start building"
        >
          <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61]">
            Ready to build?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Join the Movement
          </h2>
          <p className="text-lg md:text-xl text-[#294b3c] max-w-3xl leading-relaxed">
            Be part of the change in how India learns and builds. Whether you're a
            learner, educator, mentor, or industry partner, v18hub is your space
            to collaborate, innovate, and grow.
          </p>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            <Link
              to="/explore-cohorts"
              className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
              aria-label="Explore all v18Hub cohorts - foundational, applied, and industry programs"
            >
              Explore Cohorts
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default Why_Us;
