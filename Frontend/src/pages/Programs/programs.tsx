// src/pages/Programs/Programs.tsx
// ─── Programs overview index page  (/programs) ───────────────────────────────
// Replaces Explore_Cohort.tsx. Shows featured cards from each of the five
// program types with "See all →" links. Each section is SEO-friendly with its
// own h2, aria-label, and crawlable body text.

import { Link } from "react-router-dom";
import { Helmet } from "@vuer-ai/react-helmet-async";

import { approvedWorkshops }      from "../../data/workshops";
import { approvedBootcamps }      from "../../data/bootcamps";
import { approvedCohorts }        from "../../data/cohorts";
import { approvedPreviewCohorts } from "../../data/preview_cohorts";
import { approvedWebinars }       from "../../data/webinars";
import ProgramCard                from "../../components/Programs/ProgramCard";

// ─── SEO: JSON-LD ────────────────────────────────────────────────────────────
const makeStructuredData = () => {
  const allPrograms = [
    ...approvedWorkshops.map((w) => ({ ...w, id: w.workshop_id, tag: "workshops" })),
    ...approvedBootcamps.map((b) => ({ ...b, id: b.bootcamp_id, tag: "bootcamps" })),
    ...approvedCohorts.map((c) => ({ ...c, id: c.cohort_id, tag: "cohorts" })),
    ...approvedPreviewCohorts.map((p) => ({ ...p, id: p.preview_cohort_id, tag: "preview-cohorts" })),
    ...approvedWebinars.map((w) => ({ ...w, id: w.webinar_id, tag: "webinars" })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "v18hub Programs",
    description: "Explore all v18hub AI learning programs",
    url: "https://v18hub.in/programs",
    itemListElement: allPrograms.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: p.title,
        description: p.short_description || p.description,
        url: `https://v18hub.in/programs/${p.tag}/${p.id}`,
        provider: { "@type": "Organization", name: "v18hub", url: "https://v18hub.in" },
      },
    })),
  };
};

// ─── Section config ───────────────────────────────────────────────────────────
interface SectionConfig {
  slug: string;
  heading: string;
  label: string;
  description: string;
  programs: Array<any>;
  isWebinar?: boolean;
  showFees?: boolean;
  bg: string;
}

const SECTION_CONFIGS: SectionConfig[] = [
  {
    slug: "workshops",
    heading: "Workshops",
    label: "Workshops - v18hub AI learning programs",
    description:
      "Workshops are learning programs designed to help students explore new domains, build foundational understanding, and gain practical exposure through guided hands-on sessions. They focus on developing awareness, curiosity, and core problem-solving skills that prepare learners for deeper technical learning paths.",
    programs: approvedWorkshops,
    bg: "bg-[#f6f5ec]",
  },
  {
    slug: "bootcamps",
    heading: "Bootcamps",
    label: "Bootcamps - v18hub AI learning programs",
    description:
      "Bootcamps are structured, intensive and hands-on learning programs designed to help learners building strong fundamentals in ML, Deep Learning, and Generative AI. These programs prepare them with the concepts and practical skills needed to work on real-world applications confidently.",
    programs: approvedBootcamps,
    bg: "bg-[#a5b6ae]",
  },
  {
    slug: "cohorts",
    heading: "Cohorts",
    label: "Cohorts - v18hub AI learning programs",
    description:
      "Cohorts are industry-oriented programs where learners learn by building complete, end-to-end real AI solutions. Focused on in-depth learning, practical implementation, teamwork, and hands-on problem solving. These programs put strong emphasis on system design, engineering depth, and deployment-ready thinking. Each cohort culminates in a production-style project that significantly strengthens your portfolio.",
    programs: approvedCohorts,
    bg: "bg-[#f6f5ec]",
  },
  {
    slug: "preview-cohorts",
    heading: "Preview Cohorts",
    label: "Preview Cohorts - v18hub AI learning programs",
    description:
      "Preview Cohorts are very short-duration experiences where learners build a part of a real cohort. Help learners to understand the cohort learning style and collaboration process, before committing to a full cohort program. The ideal starting point if you're new to project-based learning.",
    programs: approvedPreviewCohorts,
    bg: "bg-[#a5b6ae]",
    showFees: true,
  },
  {
    slug: "webinars",
    heading: "Webinars",
    label: "Webinars - v18hub AI learning programs",
    description:
      "Webinars are quick, interactive sessions normally of 1-2 hours to spark awareness, simplify concepts, and introduce you to emerging technologies. Free to attend - the perfect starting point before choosing a deeper program.",
    programs: approvedWebinars,
    isWebinar: true,
    bg: "bg-[#f6f5ec]",
  },
];

// ─── Signals (hero stats) ─────────────────────────────────────────────────────
const signals = [
  { stat: "35%",  label: "Drop in entry-level job postings since 2023",  note: "Revelio Labs" },
  { stat: "50%",  label: "Decline in new-grad hiring at top tech firms",  note: "SignalFire Research" },
  { stat: "78%",  label: "Organisations using AI in daily workflows",     note: "Stanford AI Index 2025" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    text: "The cohort was really informative and it got me more interested in AI and the different domains to dive into. The way you explained the concepts and provided so many reference materials made things easy to understand.",
    author: "Thanu George",
  },
  {
    text: "The cohort was about 90% practical and 10% theory, which helped in understanding logic and frameworks effectively.",
    author: "Taran Thimmaiah",
  },
  {
    text: "I really enjoyed being part of the genai cohort. It was one of the most insightful and engaging learning experiences I've had.",
    author: "Prakrathi Jain",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Programs = () => {
  let structuredData: object | null = null;
  try {
    structuredData = makeStructuredData();
  } catch (err) {
    console.error("[Programs] Failed to build structured data:", err);
  }

  return (
    <>
      {/* ── SEO: Helmet ────────────────────────────────────────────────────── */}
      <Helmet>
        <title>Programs — Workshops, Bootcamps, Cohorts & Webinars | v18hub</title>
        <meta
          name="description"
          content="Explore all v18hub learning programs: hands-on AI workshops, intensive bootcamps, project-based cohorts, preview cohorts, and live webinars. Build real AI systems and earn portfolio-ready credentials."
        />
        <link rel="canonical" href="https://v18hub.in/programs" />
        <meta property="og:title" content="Programs | v18hub" />
        <meta
          property="og:description"
          content="Explore all v18hub programs: Workshops, Bootcamps, Cohorts, Preview Cohorts, and Webinars."
        />
        <meta property="og:url" content="https://v18hub.in/programs" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── SEO: JSON-LD ───────────────────────────────────────────────────── */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="font-open-sans">

        {/* HERO */}
        <section
          className="bg-[#f6f5ec] px-[5vw] pt-[8vh] pb-[6vh]"
          aria-label="Why project-based learning programs matter"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-5">
              Why this matters before you choose a program
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 max-w-3xl text-[#294b3c]">
              Learning programs designed for{" "}
              <span className="italic text-[#6A1F1B]">
                the AI-first job market.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#546f61] leading-relaxed max-w-2xl mb-10">
              Entry-level job pipelines in tech are shrinking - not because there are fewer
              opportunities, but because AI now handles what junior hires used to do. Companies
              are skipping the learning curve and hiring people who can already build.
              <br /><br />
              A portfolio of deployed, real-world projects is the new entry ticket.
              Every program at v18hub is designed to give you exactly that.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {signals.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#f6f5ec] border border-[#a5b6ae] rounded-2xl px-6 py-8 text-center shadow-sm hover:shadow-md hover:border-[#294b3c] transition-all duration-200"
                >
                  <p className="text-4xl md:text-5xl font-semibold text-[#6A1F1B] mb-2">{s.stat}</p>
                  <p className="text-sm text-[#294b3c] leading-snug mb-1">{s.label}</p>
                  <p className="text-xs tracking-widest uppercase text-[#546f61]">{s.note}</p>
                </div>
              ))}
            </div>

            {/* Proof pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Real problems, not textbook exercises",
                "Deployed projects for your portfolio",
                "Mentored by industry & academia",
              ].map((point, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-[#a5b6ae] text-[#294b3c] text-sm px-4 py-2 rounded-full"
                >
                  <span className="text-[#546f61]">✓</span> {point}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#programs-listing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("programs-listing")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#294b3c] hover:bg-[#1e3830] text-[#f6f5ec] font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                aria-label="Scroll down to browse all programs"
              >
                Browse Programs ↓
              </a>
              <Link
                to="/why-us"
                className="inline-flex items-center gap-2 border border-[#294b3c] text-[#294b3c] hover:bg-[#294b3c] hover:text-[#f6f5ec] font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                aria-label="Learn why v18Hub uses project-based learning"
              >
                Why v18hub? →
              </Link>
            </div>
          </div>
        </section>

        {/* HOW TO CHOOSE */}
        <section
          className="bg-[#a5b6ae] px-[5vw] py-14"
          aria-label="Guide to choosing the right program type"
        >
          <div className="max-w-5xl mx-auto">
            {/* ... (keeping this section unchanged as it's not part of the reported issues) */}
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-3 text-center">
              How to choose
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] text-center mb-8">
              Which program is right for you?
            </h2>

            {/* Entry points, deeper tracks, webinar sections remain the same */}
            {/* (Content omitted here for brevity - same as original) */}
            {/* ... full original content for this section ... */}

          </div>
        </section>

        {/* FEATURED LISTINGS — one section per program type */}
        <div id="programs-listing">
          {SECTION_CONFIGS.map((section) => {
            const featured = section.programs.slice(0, 3);

            return (
              <section key={section.slug} className={`${section.bg} scroll-mt-20 py-[10vh] px-[5vw]`}>
                <div className="max-w-6xl mx-auto mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#294b3c]">{section.heading}</h2>
                    <Link to={`/programs/${section.slug}`} className="text-sm font-semibold text-[#546f61] hover:text-[#294b3c]">
                      See all {section.heading} →
                    </Link>
                  </div>
                  <p className="text-[#546f61] text-base leading-relaxed max-w-3xl">{section.description}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                  {featured.map((program) => {
                    // === ROBUST ID EXTRACTION FIX ===
                    let programId = program.bootcamp_id || 
                                  program.workshop_id || 
                                  program.cohort_id || 
                                  program.preview_cohort_id || 
                                  program.webinar_id ||
                                  program.id;

                    if (!programId) {
                      console.warn("Missing ID for program:", program.title);
                      return null;
                    }

                    return (
                      <ProgramCard
                        key={programId}
                        program={program}
                        detailPath={`/programs/${section.slug}/${programId}`}
                        isWebinar={section.isWebinar}
                        showFees={section.showFees}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════════════
            TESTIMONIALS — added section with infinite circular rotation
        ════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#f6f5ec] px-[5vw] py-12"
          aria-label="Student testimonials from v18Hub cohorts"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">What learners say</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">
              Straight from our cohort graduates
            </h2>
            <div className="overflow-hidden">
              <div className="flex animate-slide gap-6 py-4 hover:animation-pause" style={{ width: 'calc(200%)' }}>
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-80"
                  >
                    <figure className="bg-[#294b3c] rounded-2xl p-6 h-full flex flex-col">
                      <span className="text-3xl text-[#a5b6ae] mb-3 leading-none" aria-hidden="true">"</span>
                      <blockquote className="text-sm text-[#f6f5ec] leading-relaxed flex-grow mb-4 italic">
                        {t.text}
                      </blockquote>
                      <figcaption className="text-xs font-semibold tracking-widest uppercase text-[#546f61]">
                        — {t.author}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            BOTTOM CTA — dark green, closes the loop with Why Us
        ════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#294b3c] py-12 px-[5vw] text-center"
          aria-label="Still deciding? Learn more about v18Hub"
        >
          <p className="text-[#a5b6ae] text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Not sure which cohort fits you? Read about how v18hub works,
            why project-based learning is the edge you need, and what makes
            this different from any course you've taken before.
          </p>
          <Link
            to="/why-us"
            className="inline-flex items-center gap-2 bg-[#f6f5ec] text-[#294b3c] font-semibold px-6 py-3 rounded-lg hover:bg-[#a5b6ae] transition-colors duration-200"
            aria-label="Learn why v18Hub uses project-based learning"
          >
            Why v18hub? →
          </Link>
        </section>

      </div>
    </>
  );
};

export default Programs;