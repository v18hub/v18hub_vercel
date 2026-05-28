// src/pages/Programs/ProgramListing.tsx
// ─── Generic listing page — /programs/:type ───────────────────────────────────
// One component handles all five listing routes.
// Each route passes its own `slug` prop via the route wrapper (see routes.tsx).
// Add a new program type by adding one entry to LISTING_CONFIG — nothing else.

import { Link } from "react-router-dom";
import { Helmet } from "@vuer-ai/react-helmet-async";

import { approvedWorkshops }      from "../../data/workshops";
import { approvedBootcamps }      from "../../data/bootcamps";
import { approvedCohorts }        from "../../data/cohorts";
import { approvedPreviewCohorts } from "../../data/preview_cohorts";
import { approvedWebinars }       from "../../data/webinars";
import type { ProgramBase }       from "../../data/program_base";
import ProgramCard                from "../../components/Programs/ProgramCard";

// ─── Per-type config ──────────────────────────────────────────────────────────
interface ListingConfig {
  heading: string;
  subheading: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  programs: Array<ProgramBase & { [key: string]: unknown }>;
  idKey: string;         // field name of the primary ID on each record
  isWebinar?: boolean;
  showFees?: boolean;
  schemaType?: string;   // JSON-LD @type — defaults to "Course"
}

const LISTING_CONFIG: Record<string, ListingConfig> = {
  workshops: {
    heading: "Workshops",
    subheading: "Short, focused, hands-on skill sessions",
    description:
      "Workshops are learning programs designed to help students explore new domains, build foundational understanding, and gain practical exposure through guided hands-on sessions. They focus on developing awareness, curiosity, and core problem-solving skills that prepare learners for deeper technical learning paths.",
    seoTitle: "Workshops | v18hub Programs",
    seoDescription:
      "Explore v18hub AI workshops - focused, hands-on skill sessions with real datasets.",
    programs: approvedWorkshops as Array<ProgramBase & { [key: string]: unknown }>,
    idKey: "workshop_id",
  },
  bootcamps: {
    heading: "Bootcamps",
    subheading: "Intensive, mentor-led programs for building strong fundamentals",
    description: "Bootcamps are structured, intensive and hands-on learning programs designed to help learners building strong fundamentals in ML, Deep Learning, and Generative AI. These programs prepare them with the concepts and practical skills needed to work on real-world applications confidently.",
    seoTitle: "Bootcamps | v18hub Programs",
    seoDescription:
      "Join a v18hub AI bootcamp - intensive, mentor-led programs that builds strong fundamentals and makes you ready for advanced production style cohorts.",
    programs: approvedBootcamps as Array<ProgramBase & { [key: string]: unknown }>,
    idKey: "bootcamp_id",
  },
  cohorts: {
    heading: "Cohorts",
    subheading: "Build industry oriented AI systems",
    description:
      "Cohorts are industry-oriented programs where learners learn by building complete, end-to-end real AI solutions. Focused on in-depth learning, practical implementation, teamwork, and hands-on problem solving. These programs put strong emphasis on system design, engineering depth, and deployment-ready thinking. Each cohort culminates in a production-style project that significantly strengthens your portfolio.",
    seoTitle: "Cohorts | v18hub Programs",
    seoDescription:
      "Join a v18hub cohort - Build industry oriented AI systems with real datasets and mentorship which significantly strengthens your portfolio.",
    programs: approvedCohorts as Array<ProgramBase & { [key: string]: unknown }>,
    idKey: "cohort_id",
  },
  "preview-cohorts": {
    heading: "Preview Cohorts",
    subheading: "Experience a cohort before committing to the full program",
    description:
          "Preview Cohorts are very short-duration experiences where learners build a part of a real cohort. Help learners to understand the cohort learning style and collaboration process, before committing to a full cohort program. The ideal starting point if you're new to project-based learning.\n\n" +
          "👉 Preview Cohorts have a fixed, affordable prices and fully adjustable on upgrading to Cohort program.\n\n"+
          "👉 If a learner is unable to keep up within the first week of the Preview Cohort, the full fees will be refunded.",
    seoTitle: "Preview Cohorts | v18hub Programs",
    seoDescription:
      "Try a v18hub Preview Cohort - a low-commitment way to experience project-based AI learning before joining a full cohort.",
    programs: approvedPreviewCohorts as Array<ProgramBase & { [key: string]: unknown }>,
    idKey: "preview_cohort_id",
    showFees: true,
  },
  webinars: {
    heading: "Webinars",
    subheading: "Quick, expert-led live sessions on emerging AI topics",
    description:
      "Webinars are quick, interactive sessions normally of 1-2 hours to spark awareness, simplify concepts, and introduce you to emerging technologies. Free to attend - the perfect starting point before choosing a deeper program.",
    seoTitle: "Webinars | v18hub Programs",
    seoDescription:
      "Attend a free v18hub webinar — expert-led live sessions on AI, ML, and emerging technology topics.",
    programs: approvedWebinars as Array<ProgramBase & { [key: string]: unknown }>,
    idKey: "webinar_id",
    isWebinar: true,
    schemaType: "Event",
  },
};

// ─── Props ────────────────────────────────────────────────────────────────────
interface ProgramListingProps {
  slug: string; // matches a key in LISTING_CONFIG
}

// ─── Component ────────────────────────────────────────────────────────────────
const ProgramListing = ({ slug }: ProgramListingProps) => {
  const config = LISTING_CONFIG[slug];

  // ── Unknown slug guard ────────────────────────────────────────────────────
  if (!config) {
    return (
      <>
        <Helmet>
          <title>Program Not Found | v18hub</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 font-open-sans px-6 text-center">
          <h1 className="text-3xl font-bold text-[#294b3c]">Program type not found</h1>
          <p className="text-[#546f61]">
            The program category you're looking for doesn't exist or hasn't launched yet.
          </p>
          <Link
            to="/programs"
            className="mt-2 px-6 py-3 bg-[#294b3c] text-[#f6f5ec] rounded-lg font-medium hover:bg-[#546f61] transition-colors"
          >
            Browse all programs
          </Link>
        </div>
      </>
    );
  }

  const {
    heading,
    subheading,
    description,
    seoTitle,
    seoDescription,
    programs,
    idKey,
    isWebinar,
    showFees,
    schemaType = "Course",
  } = config;

  // ── JSON-LD structured data ───────────────────────────────────────────────
  let structuredData: object | null = null;
  try {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: seoTitle,
      description: seoDescription,
      url: `https://v18hub.in/programs/${slug}`,
      itemListElement: programs.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": schemaType,
          name: p.title,
          description: p.short_description || p.description,
          url: `https://v18hub.in/programs/${slug}/${p[idKey]}`,
          provider: {
            "@type": "Organization",
            name: "v18hub",
            url: "https://v18hub.in",
          },
        },
      })),
    };
  } catch (err) {
    console.error("[ProgramListing] Failed to build structured data:", err);
  }

  return (
    <>
      {/* ── SEO: Helmet ──────────────────────────────────────────────────── */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={`https://v18hub.in/programs/${slug}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={`https://v18hub.in/programs/${slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── JSON-LD ───────────────────────────────────────────────────────── */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="font-open-sans">

        {/* ════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#f6f5ec] px-[5vw] pt-[8vh] pb-[6vh]"
          aria-label={`${heading} overview`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb — SEO + UX */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-[#546f61]">
                <li><Link to="/" className="hover:text-[#294b3c] transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/programs" className="hover:text-[#294b3c] transition-colors">Programs</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-[#294b3c] font-semibold" aria-current="page">{heading}</li>
              </ol>
            </nav>

            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-4">
              {subheading}
            </p>

            {/* SEO: h1 — one per page */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-5 max-w-4xl text-[#294b3c]">
              {heading}
            </h1>

            <p className="text-base md:text-lg text-[#546f61] leading-relaxed max-w-4xl mb-8 whitespace-pre-line">
              {description}
            </p>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 border border-[#294b3c] text-[#294b3c] hover:bg-[#294b3c] hover:text-[#f6f5ec] font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              ← All Programs
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            LISTINGS GRID
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#f6f5ec] px-[5vw] py-[8vh]"
          aria-label={`All ${heading} on v18hub`}
        >
          <div className="max-w-7xl mx-auto">
            {programs.length > 0 ? (
              <>
                {/* <p className="text-sm text-[#546f61] mb-8">
                  {programs.length} {heading.toLowerCase()}
                  {programs.length !== 1 ? "" : ""} available
                </p> */}
                <div className="flex flex-wrap justify-center gap-8">
                  {programs.map((program) => {
                    const programId = program[idKey];

                    // ── Security: skip malformed records ─────────────────
                    if (!programId || typeof programId !== "string") {
                      console.warn("[ProgramListing] Skipping record with missing ID:", program);
                      return null;
                    }

                    return (
                      <ProgramCard
                        key={programId}
                        program={program}
                        detailPath={`/programs/${slug}/${programId}`}
                        isWebinar={isWebinar}
                        showFees={showFees}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              /* ── Empty state ─────────────────────────────────────────── */
              <div className="text-center py-20">
                <p className="text-[#a5b6ae] text-xl italic mb-4">
                  {heading} are coming soon.
                </p>
                <p className="text-[#546f61] text-sm mb-8">
                  We're preparing these programs. Check back shortly, or explore our other offerings.
                </p>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 bg-[#294b3c] text-[#f6f5ec] font-medium px-6 py-3 rounded-lg hover:bg-[#546f61] transition-colors"
                >
                  Browse all programs →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#294b3c] py-12 px-[5vw] text-center"
          aria-label="Explore more v18hub programs"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-[#f6f5ec] mb-3">
            Not sure {heading.toLowerCase()} are right for you?
          </h2>
          <p className="text-[#a5b6ae] text-base max-w-xl mx-auto mb-6 leading-relaxed">
            Explore the full range of v18hub programs - from quick workshops to intensive cohorts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-[#f6f5ec] text-[#294b3c] font-semibold px-6 py-3 rounded-lg hover:bg-[#a5b6ae] transition-colors duration-200"
              aria-label="Browse all v18hub programs"
            >
              All Programs →
            </Link>
            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 border border-[#f6f5ec] text-[#f6f5ec] font-semibold px-6 py-3 rounded-lg hover:bg-[#546f61] hover:border-[#546f61] transition-colors duration-200"
              aria-label="Learn why v18hub uses project-based learning"
            >
              Why v18hub?
            </Link>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProgramListing;
