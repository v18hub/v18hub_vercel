// src/pages/Explore_Cohort.tsx
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { cohortsData } from "../../data/cohorts";

// ─── SEO: JSON-LD structured data ────────────────────────────────────────────
// Renders a CourseList schema — helps Google surface cohorts as rich results.
// Move into react-helmet / Next.js <Head> if available for true SSR injection.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "v18Hub Learning Cohorts — Project-Based AI & Data Science Programs",
  "description":
    "Explore industry, applied, and foundational project-based learning cohorts at v18Hub. Build real AI systems, earn portfolio-ready certifications, and get mentored by industry experts.",
  "url": "https://v18hub.in/explore-cohorts",
  "itemListElement": cohortsData.map((cohort, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": cohort.title,
      "description": cohort.short_description || cohort.description,
      "url": `https://v18hub.in/cohort/${cohort.cohort_id}`,
      "provider": {
        "@type": "Organization",
        "name": "v18Hub",
        "url": "https://v18hub.in",
      },
    },
  })),
};

export type Cohort = {
  cohort_id: string;
  partner_id: string;
  imageSrc: string;
  tag: string;
  title: string;
  short_description: string;
  description: string;
  startDate: string;
  duration: string;
  level: string;
  goal: string[];
  dataset: string;
  methods: string[];
  milestones: string[];
  deliverables: string[];
  documents_list: string;
  key_learnings: string;
  social_engagement: string;
  evaluations: string;
  skill_tags: string[];
  cohort_card_skill_tags: string[];
  fees: number;
  current_version: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
  top_content: string[];
};

const tagMap: Record<string, { display: string; slug: string }> = {
  industry:     { display: "Industry Cohorts",     slug: "industry-cohorts" },
  applied:      { display: "Applied Cohorts",      slug: "applied-cohorts" },
  foundational: { display: "Foundational Cohorts", slug: "foundational-cohorts" },
  webinar:      { display: "Webinars",             slug: "webinars" },
};

// Alternating backgrounds — mirrors Why Us page rhythm exactly:
// industry(1)→ cream | applied(2)→ sage | foundational(3)→ cream | webinar(4)→ sage
const tagBgMap: Record<string, { section: string; cards: string; heading: string; body: string }> = {
  industry:     { section: "bg-[#f6f5ec]", cards: "bg-[#f6f5ec]", heading: "text-[#294b3c]", body: "text-[#546f61]" },
  applied:      { section: "bg-[#a5b6ae]", cards: "bg-[#f6f5ec]", heading: "text-[#294b3c]", body: "text-[#294b3c]" },
  foundational: { section: "bg-[#f6f5ec]", cards: "bg-[#f6f5ec]", heading: "text-[#294b3c]", body: "text-[#546f61]" },
  webinar:      { section: "bg-[#a5b6ae]", cards: "bg-[#f6f5ec]", heading: "text-[#294b3c]", body: "text-[#294b3c]" },
};

const signals = [
  { stat: "35%",  label: "Drop in entry-level job postings since 2023",      note: "Revelio Labs" },
  { stat: "50%",  label: "Decline in new-grad hiring at top tech firms",      note: "SignalFire Research" },
  { stat: "78%",  label: "Organisations using AI in daily workflows",         note: "Stanford AI Index 2025" },
];

const Explore_Cohort = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSection = searchParams.get("section");

  const groupedCohorts = cohortsData.reduce((acc, cohort) => {
    const tag = (cohort.tag || "others").trim().toLowerCase();
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(cohort);
    return acc;
  }, {} as Record<string, Cohort[]>);

  const tagOrder    = Object.keys(tagMap);
  const orderedTags = tagOrder.filter((tag) => groupedCohorts[tag]);

  useEffect(() => {
    if (activeSection) {
      const el = document.getElementById(`section-${activeSection}`);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      return;
    }
    const hash = location.hash.slice(1);
    if (hash) {
      const possibleSlug = tagMap[hash]?.slug || hash;
      if (Object.values(tagMap).some((t) => t.slug === possibleSlug)) {
        setSearchParams({ section: possibleSlug }, { replace: true });
      }
    }
  }, [activeSection, location.hash, setSearchParams]);

  // ── Testimonials ──────────────────────────────────────────────────────────
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

  return (
    <>
      {/* SEO: JSON-LD schema for Google Course rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="font-open-sans">

        {/* ═══════════════════════════════════════════════════════════
            HERO — light cream opener, welcoming and readable
            h1 is placed here — only one per page, keyword-rich
        ════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#f6f5ec] px-[5vw] pt-[8vh] pb-[6vh]"
          aria-label="Why project-based learning cohorts matter"
        >
          <div className="max-w-5xl mx-auto">

            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-5">
              Why this matters before you choose a cohort
            </p>

            {/* SEO: h1 — one per page, descriptive, naturally keyword-rich */}
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 max-w-3xl text-[#294b3c]">
              Project-based learning cohorts for{" "}
              <span className="italic text-[#6A1F1B]">
                the AI-first job market.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#546f61] leading-relaxed max-w-2xl mb-10">
              Entry-level job pipelines in tech are shrinking, not because there are fewer
              opportunities, but because AI now handles what junior hires used to do. Companies
              are skipping the learning curve and hiring people who can already build.
              <br /><br />
              A portfolio of deployed, real-world projects is the new entry ticket.
              That's what every cohort here is designed to give you.
            </p>

            {/* Stats — clean white cards with coloured accents */}
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
                href="#cohorts"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("cohorts")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-[#294b3c] hover:bg-[#1e3830] text-[#f6f5ec] font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                aria-label="Scroll down to browse all cohorts"
              >
                Browse Cohorts ↓
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

        {/* ═══════════════════════════════════════════════════════════
            HOW TO CHOOSE — dark green band, bridging hero to listings
        ════════════════════════════════════════════════════════════ */}
        <section
          className="bg-[#a5b6ae] px-[5vw] py-14"
          aria-label="Guide to choosing the right cohort type"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-3 text-center">
              How to choose
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] text-center mb-3">
              Which cohort is right for you?
            </h2>
            <p className="text-sm text-[#a5b6ae] text-center mb-10 max-w-2xl mx-auto">
              Start with what excites you — the domain, the problem type, or where you are right now.
            </p>

            {/* Row 1 — Entry points: Foundational + Webinar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div className="rounded-2xl border border-[#294b3c] bg-[#294b3c] p-6 flex flex-col gap-3 hover:bg-[#546f61] group hover:bg-[#546f61] transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <span className="bg-[#a5b6ae] text-[#294b3c] text-xs font-bold px-3 py-1 rounded-full">Foundational</span>
                  <span className="text-xs text-[#a5b6ae] italic">Good starting point</span>
                </div>
                <p className="text-sm font-semibold text-[#f6f5ec]">"Build something real for the first time."</p>
                <p className="text-sm text-[#a5b6ae]">
                  Short, guided, hands-on, you learn how cohort-based building works without the pressure of a full commitment. Realistic datasets, real output.
                </p>
                <p className="text-xs text-[#d1d9d4] mt-auto pt-3 border-t border-[#8ca89a]/70 group-hover:border-t-[#d1d9d4]/90 transition-colors duration-200">
                  💰 Fees fully refunded if you can't keep up in week 1
                </p>
              </div>

              <div className="rounded-2xl border border-[#294b3c] bg-[#294b3c] p-6 flex flex-col gap-3 hover:bg-[#546f61] group transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <span className="bg-[#6A1F1B] text-[#f6f5ec] text-xs font-bold px-3 py-1 rounded-full">Webinar</span>
                  <span className="text-xs text-[#a5b6ae] italic">No commitment</span>
                </div>
                <p className="text-sm font-semibold text-[#f6f5ec]">"Want to understand a topic before I commit to building it."</p>
                <p className="text-sm text-[#a5b6ae]">
                  2–3 hour live sessions. Spark awareness, clarify concepts, explore emerging tech before deciding which cohort fits your direction.
                </p>
                <p className="text-xs text-[#d1d9d4] mt-auto pt-3 border-t border-[#8ca89a]/70 group-hover:border-t-[#d1d9d4]/90 transition-colors duration-200">
                  ✓ Free to attend
                </p>
              </div>
            </div>

            {/* Row 2 — Applied vs Industry */}
            <div className="rounded-2xl border border-[#546f61] bg-[#294b3c] p-6 mb-3">
              <p className="text-xs font-semibold tracking-[2px] uppercase text-[#f6f5ec] mb-4">
                Ready to go deep? Both deliver the same learning depth and portfolio strength -
                the difference is the{" "}
                <span className="text-[#f6f5ec] text-base md:text-lg font-semibold">
                  type of problem
                </span>{" "}
                you want to work on.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl border border-[#f6f5ec] bg-[#546f61] p-5 flex flex-col gap-3 hover:bg-[#294b3c] group transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#f6f5ec] text-[#294b3c] text-xs font-bold px-3 py-1 rounded-full">Applied</span>
                    <span className="text-xs text-[#a5b6ae] italic">Problem-first</span>
                  </div>
                  <p className="text-sm font-semibold text-[#f6f5ec]">"Build a production-style AI system designed around real-world problem statements."</p>
                  <p className="text-sm text-[#a5b6ae]">
                    Pick a cohort by topic - GenAI, NLP, forecasting, computer vision, and more. Problems are built from real public datasets and authentic scenarios. Full end-to-end system, production-ready thinking.
                  </p>
                  <p className="text-xs text-[#d1d9d4] mt-auto pt-3 border-t border-[#8ca89a]/70 group-hover:border-t-[#d1d9d4]/90 transition-colors duration-200">
                    ✓ Strong portfolio project
                  </p>
                </div>

                <div className="rounded-xl border border-[#f6f5ec] bg-[#546f61] p-5 flex flex-col gap-3 hover:bg-[#294b3c] group transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#f6f5ec] text-[#294b3c] text-xs font-bold px-3 py-1 rounded-full">Industry</span>
                    <span className="text-xs text-[#a5b6ae] italic">Problem-first</span>
                  </div>
                  <p className="text-sm font-semibold text-[#f6f5ec]">"Build a production-style AI system based on an industry-defined problem."</p>
                  <p className="text-sm text-[#a5b6ae]">
                    The problem comes from an industry partner or startup with real constraints, real stakeholders, and real context. Full end-to-end system, production-ready thinking.
                  </p>
                  <p className="text-xs text-[#d1d9d4] mt-auto pt-3 border-t border-[#8ca89a]/70 group-hover:border-t-[#d1d9d4]/90 transition-colors duration-200">
                    ✓ Strong portfolio project
                  </p>
                </div>
              </div>
            </div>

            {/* Final summary — bigger + bold */}
            <p className="text-base md:text-lg font-bold text-[#f6f5ec] text-center mt-4 tracking-wide">
              Applied and Industry cohorts are equal in learning depth, pick based on what kind of problem motivates you most.
            </p>
          </div>
        </section>



        {/* ═══════════════════════════════════════════════════════════
            COHORT LISTINGS — alternating cream / sage per section
        ════════════════════════════════════════════════════════════ */}
        <div id="cohorts">
          {orderedTags.map((tagKey) => {
            const cohorts        = groupedCohorts[tagKey];
            const { display: displayTag, slug: sectionSlug } = tagMap[tagKey];
            const sectionId      = `section-${sectionSlug}`;
            const isWebinar      = tagKey === "webinar";
            const isFoundational = tagKey === "foundational";
            const bg             = tagBgMap[tagKey] ?? tagBgMap["industry"];

            return (
              <section
                key={tagKey}
                id={sectionId}
                className={`${bg.section} scroll-mt-20 py-[10vh] px-[5vw]`}
                aria-label={`${displayTag} — v18Hub cohort programs`}
              >
                {/* SEO: h2 per section, descriptive */}
                <h2 className={`text-3xl md:text-4xl font-bold ${bg.heading} text-center mb-4`}>
                  {displayTag}
                </h2>

                {/* Descriptive paragraph — keyword-rich, crawlable body text */}
                <div className={`max-w-4xl mx-auto text-left ${bg.body} text-[1.05rem] leading-7 mb-10 px-4 md:px-8 lg:px-12`}>
                  {tagKey === "industry" && (
                    <p>
                      Cohorts built in collaboration with industry partners or startups where learners build complete, 
                      end-to-end AI systems. Learners work on partner-driven datasets and constraints. 
                      Strong emphasis on system design, engineering depth, and deployment-ready thinking. 
                      Each cohort ends with a production-style project that stand out strongly on your portfolio.
                      <br /><br />
                      Industry Cohorts are priced based on depth, duration, and level of collaboration.
                    </p>
                  )}
                  {tagKey === "applied" && (
                    <p>
                      Production-oriented cohorts where learners build complete, end-to-end AI systems using real 
                      datasets and problem statements. Strong emphasis on system design, engineering depth, 
                      and deployment-ready thinking. Each cohort ends with a production-style project that 
                      stand out strongly on your portfolio.
                      <br /><br />
                      Applied Cohorts are priced based on depth, duration, and complexity.
                    </p>
                  )}
                  {tagKey === "foundational" && (
                    <p>
                      Designed for learners who want to build confidence before committing to advanced tracks. 
                      You work through core concepts while building a structured part of a real AI project, 
                      understanding how systems are designed, implemented, and evaluated within a cohort setting.
                      <br /><br />
                      👉 Foundational Cohorts have a fixed and affordable price. Fees are fully adjustable
                      on upgrading to an Applied or Industry Cohort.
                      <br />
                      👉 If a learner is unable to keep up within the first week, the full fees will be refunded.
                    </p>
                  )}
                  {tagKey === "webinar" && (
                    <p>
                      Quick, interactive sessions (2–3 hours) designed to spark awareness,
                      simplify complex concepts, and introduce you to emerging technologies
                      in an engaging way.
                    </p>
                  )}
                </div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                  {cohorts.map((cohort) => (
                    <Link
                      key={cohort.cohort_id}
                      to={`/cohort/${cohort.cohort_id}`}
                      className="block group w-full max-w-[380px]"
                      aria-label={`${cohort.title} — ${cohort.tag} cohort, starts ${cohort.startDate}`}
                    >
                      {/* SEO: <article> tag signals self-contained content to crawlers */}
                      <article className={`${bg.cards} rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col`}>

                        {/* SEO: descriptive alt text on every image */}
                        <div className="h-48 overflow-hidden bg-[#a5b6ae]">
                          <img
                            src={cohort.imageSrc}
                            alt={`${cohort.title} — v18Hub ${cohort.tag} cohort`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            width={380}
                            height={192}
                          />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          <span className="inline-block bg-[#546f61] text-[#f6f5ec] text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                            {cohort.tag.charAt(0).toUpperCase() + cohort.tag.slice(1)}
                          </span>

                          {/* SEO: h3 inside article — correct heading hierarchy h1→h2→h3 */}
                          <h3 className="text-xl font-bold text-[#294b3c] mb-2 line-clamp-2 min-h-[3.5rem]">
                            {cohort.title}
                          </h3>

                          {/* Short description visible on card — adds crawlable text */}
                          {cohort.short_description && (
                            <p className="text-sm text-[#546f61] mb-3 line-clamp-2 leading-relaxed">
                              {cohort.short_description}
                            </p>
                          )}

                          {isWebinar && cohort.startDate ? (
                            <p className="text-sm text-[#294b3c] mb-1">
                              <strong>Date & Time:</strong> {cohort.startDate}
                            </p>
                          ) : (
                            <p className="text-sm text-[#294b3c] mb-1">
                              <strong>Start Date:</strong> {cohort.startDate}
                            </p>
                          )}

                          <p className="text-sm text-[#294b3c] mb-2">
                            <strong>Duration:</strong> {cohort.duration}
                          </p>

                          {/* cohort_card_skill_tags — surfaces keywords visually and in DOM */}
                          {cohort.cohort_card_skill_tags?.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3" aria-label="Skills covered">
                              {cohort.cohort_card_skill_tags.slice(0, 3).map((skill, si) => (
                                <span
                                  key={si}
                                  className="text-xs bg-[#a5b6ae] text-[#294b3c] px-2 py-0.5 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-auto flex flex-col items-center gap-3">
                            {isFoundational && (
                              <p className="text-lg font-bold text-[#6A1F1B] text-center">
                                ₹{cohort.fees.toLocaleString("en-IN")}
                              </p>
                            )}
                            <div className="flex gap-3 justify-center">
                            <button
                              className="px-5 py-2 bg-[#546f61] hover:bg-[#294b3c] text-[#f6f5ec] rounded-lg text-sm font-medium transition"
                              aria-label={`Know more about ${cohort.title}`}
                            >
                              Know More
                            </button>
                            {cohort.is_approved && (
                              <button
                                className={`px-5 py-2 border-2 rounded-lg text-sm font-medium transition ${
                                  isWebinar
                                    ? "border-[#294b3c] text-[#294b3c] hover:bg-[#a5b6ae]"
                                    : "border-[#546f61] text-[#546f61] hover:bg-[#a5b6ae]"
                                }`}
                                aria-label={isWebinar ? `Register free for ${cohort.title}` : `Enroll in ${cohort.title}`}
                              >
                                {isWebinar ? "Register Free" : "Enroll Now"}
                              </button>
                            )}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
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

export default Explore_Cohort;