// src/pages/CohortDetails.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "@vuer-ai/react-helmet-async";
import { cohortsData } from "../../data/cohorts";

// ─── Per-cohort SEO meta ──────────────────────────────────────────────────────
const cohortSEO: Record<string, { title: string; description: string; keywords: string }> = {
  "startup-funding-rag": {
    title: "Startup Funding RAG Application | Build LLM & Vector DB Pipelines - v18Hub",
    description:
      "Build a Retrieval-Augmented Generation (RAG) system on real startup funding data. Learn web scraping, chunking, embeddings, Milvus vector DB, LLM querying, and cloud deployment in this 8-week industry cohort.",
    keywords:
      "RAG application, retrieval augmented generation, LLM pipeline, vector database, Milvus, startup funding AI, GenAI cohort, LangChain, LlamaIndex, AI project India",
  },
  "automate-healthcare-claims": {
    title: "Automating Medical Insurance Claims with AI Agents | Multi-Agent NLP - v18Hub",
    description:
      "Design a multi-agent AI system to automate medical insurance claim workflows. Hands-on with healthcare NLP, FHIR, ICD-10 codes, workflow orchestration, and deployment in a 12-week industry collaboration with Sarvatra.ai.",
    keywords:
      "AI agents healthcare, medical insurance claims automation, NLP healthcare, multi-agent AI, FHIR, ICD-10 NLP, workflow automation AI, healthcare AI India, Sarvatra.ai cohort",
  },
  "predict-agri-commodity-prices": {
    title: "Predicting Agricultural Commodity Prices | Time Series Forecasting ML - v18Hub",
    description:
      "Forecast crop prices using real Indian commodity data. Build ARIMA, XGBoost, LSTM, and ML pipelines, deploy an interactive dashboard, and gain hands-on time series and forecasting experience in this 8-week applied cohort.",
    keywords:
      "agricultural price forecasting, time series forecasting, ARIMA LSTM XGBoost, commodity price prediction, agri AI India, machine learning forecasting, data science cohort India",
  },
  "intraoral-lesion": {
    title: "Intraoral Lesion Detection & Analysis | Medical Computer Vision - v18Hub",
    description:
      "Train deep learning models to detect oral lesions on real dental images. Work with CNNs, transfer learning, Grad-CAM explainability, and deploy a demo app in this 12-week applied computer vision cohort.",
    keywords:
      "intraoral lesion detection, medical image AI, dental AI, computer vision healthcare, Grad-CAM explainability, CNN transfer learning, deep learning medical imaging, AI cohort India",
  },
};

const CohortDetails = () => {
  const { id } = useParams<{ id: string }>();
  const cohort = cohortsData.find((c) => c.cohort_id === id);

  const [openWeek, setOpenWeek] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);

  if (!cohort) {
    return (
      <div className="py-32 text-center text-2xl text-[#294b3c]" role="alert">
        Cohort not found. Please check the URL or{" "}
        <a href="/explore-cohorts" className="underline text-[#546f61]">
          explore all cohorts
        </a>
        .
      </div>
    );
  }

  // ── Data helpers ──────────────────────────────────────────────────────────
  const goals = Array.isArray(cohort.goal) ? cohort.goal : [];

  const keyLearnings = Array.isArray(cohort.key_learnings)
    ? cohort.key_learnings
    : cohort.key_learnings
        ?.split(";")
        .map((s) => s.trim())
        .filter(Boolean) || [];

  const timelineData = Array.isArray(cohort.milestones)
    ? cohort.milestones.map((m, i) => ({
        milestone: (m || "").trim(),
        deliverable: (cohort.deliverables?.[i] || "").trim(),
      }))
    : [];

  const isFoundational = cohort.tag?.toLowerCase() === "foundational";
  const isWebinar = cohort.tag?.toLowerCase() === "webinar";

  // ── Form URL map ──────────────────────────────────────────────────────────
  const formURLs: Record<string, string> = {
    "predict-agri-commodity-prices": "https://forms.gle/cXh4hooaC1ytYfB68",
    "automate-healthcare-claims":    "https://forms.gle/e7o4rcttGYsBjSGX8",
    "intraoral-lesion":              "https://forms.gle/PZwQZEi5KRS33WmU9",
    "startup-funding-rag":           "https://forms.gle/RQgCxcHpSy6n42GH7",
    "collect-process-rag-data":      "https://forms.gle/MSju23hBmYpBEzjF7",
    "explore-vision-dataset":        "https://forms.gle/BL3f3ubZFDac7ED47",
    "timeseries-forcasting":         "https://forms.gle/UYvMhqoZkLaDKohj7",
  };
  const ZOHO_FORM_URL =
    formURLs[cohort.cohort_id] ||
    `https://forms.zohopublic.com/yourorg/form/Register/formperma/xxxx?cohort_id=${cohort.cohort_id}`;

  // ── SEO ───────────────────────────────────────────────────────────────────
  const seo = cohortSEO[cohort.cohort_id];
  const pageTitle    = seo?.title       || `${cohort.title} | v18Hub Cohort`;
  const pageDesc     = seo?.description || cohort.short_description || cohort.description;
  const pageKeywords = seo?.keywords    || cohort.skill_tags?.join(", ") || "";
  const canonicalURL = `https://v18hub.in/cohort/${cohort.cohort_id}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": cohort.title,
    "description": cohort.description,
    "url": canonicalURL,
    "provider": { "@type": "Organization", "name": "v18Hub", "url": "https://v18hub.in" },
    "educationalLevel": cohort.tag,
    "timeRequired": cohort.duration,
    "startDate": cohort.startDate,
    "keywords": pageKeywords,
  };

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

  // ── Tag colour helper ─────────────────────────────────────────────────────
  const tagColour: Record<string, string> = {
    foundational: "bg-[#a5b6ae] text-[#294b3c]",
    applied:      "bg-[#546f61] text-[#f6f5ec]",
    industry:     "bg-[#294b3c] text-[#f6f5ec]",
    webinar:      "bg-[#6A1F1B] text-[#f6f5ec]",
  };
  const tagClass = tagColour[cohort.tag?.toLowerCase() || ""] || "bg-[#546f61] text-[#f6f5ec]";

  return (
    <>
      {/* ── SEO HEAD ──────────────────────────────────────────────────────── */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords"    content={pageKeywords} />
        <link rel="canonical"    href={canonicalURL} />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={canonicalURL} />
        <meta property="og:title"       content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image"       content={`https://v18hub.in${cohort.imageSrc}`} />
        <meta property="og:site_name"   content="v18Hub" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image"       content={`https://v18hub.in${cohort.imageSrc}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#f6f5ec] font-open-sans">

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <header
          className="bg-[#294b3c] text-[#f6f5ec] px-[5vw] pt-[8vh] pb-[7vh]"
          aria-label={`${cohort.title} cohort overview`}
        >
          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-[#a5b6ae] list-none p-0 m-0">
                <li><a href="/explore-cohorts" className="hover:text-[#f6f5ec] transition-colors">Cohorts</a></li>
                <li aria-hidden="true">›</li>
                <li className="text-[#f6f5ec]" aria-current="page">{cohort.title}</li>
              </ol>
            </nav>

            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagClass} mb-4 inline-block`}>
              {cohort.tag}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
              {cohort.title}
            </h1>

            <p className="text-base md:text-lg text-[#a5b6ae] leading-relaxed max-w-3xl mb-8">
              {cohort.short_description || cohort.description}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#a5b6ae]">
              <span>📅 <strong className="text-[#f6f5ec]">Starts:</strong> {cohort.startDate}</span>
              <span>⏱ <strong className="text-[#f6f5ec]">Duration:</strong> {cohort.duration}</span>
              <span>💻 <strong className="text-[#f6f5ec]">Mode:</strong> Online (Live + Recorded)</span>
              <span>📌 <strong className="text-[#f6f5ec]">Commitment:</strong> 9–10 hrs / week</span>
              {cohort.is_approved && !isWebinar && (
                <span>
                  💰 <strong className="text-[#f6f5ec]">Fees:</strong>{" "}
                  ₹{cohort.fees.toLocaleString("en-IN")}
                  {isFoundational && " · refundable in week 1"}
                </span>
              )}
              {isWebinar && <span>🎟 <strong className="text-[#f6f5ec]">Free to attend</strong></span>}
            </div>

            {/* Skill tags */}
            {cohort.skill_tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8" aria-label="Skills covered in this cohort">
                {cohort.skill_tags.map((skill, i) => (
                  <span key={i} className="text-xs bg-[#1e3830] text-[#a5b6ae] border border-[#546f61] px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            {cohort.is_approved && (
              <a
                href={ZOHO_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#f6f5ec] hover:bg-[#a5b6ae] text-[#294b3c] rounded-lg font-semibold transition-colors duration-200 active:scale-95"
                aria-label={isWebinar ? `Register free for ${cohort.title}` : `Enroll in ${cohort.title}`}
              >
                {isWebinar ? "Register Free →" : "Enroll Now →"}
              </a>
            )}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-[5vw] pb-20">

          {/* ════════════════════════════════════════════════════════════════
              1 — Why v18Hub (generic value-prop bullets, shown on every page)
          ═════════════════════════════════════════════════════════════════ */}
          {cohort.top_content && cohort.top_content.length > 0 && (
            <section
              className="py-12 border-b border-[#a5b6ae]"
              aria-label="Why choose v18Hub cohorts"
            >
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">More than a course</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">
                You build something real
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cohort.top_content.map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#f6f5ec] border border-[#a5b6ae] rounded-xl">
                    <span className="text-xl mt-0.5 flex-shrink-0" role="img" aria-hidden="true">{['🔨', '📄', '🤝', '🔄', '📜'][i] || '✓'}</span>
                    <p className="text-sm text-[#294b3c] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════════════════════
              2 — What you'll gain (outcomes-first)
          ════════════════════════════════════════════════════════════════ */}
          <section
            className="py-12 border-b border-[#a5b6ae]"
            aria-label={`Skills and outcomes from the ${cohort.title} cohort`}
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">What you'll gain</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">
                  Skills &amp; outcomes you'll walk away with
                </h2>
                {keyLearnings.length > 0 ? (
                  <ul className="space-y-3 list-none p-0 m-0" aria-label="Key learnings from this cohort">
                    {keyLearnings.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#546f61] font-bold mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-base text-[#294b3c] leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#546f61] italic">Details coming soon.</p>
                )}
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden shadow-md bg-[#a5b6ae]">
                  <img
                    src={cohort.imageSrc}
                    alt={`${cohort.title} — v18Hub ${cohort.tag} cohort`}
                    className="w-full h-56 object-cover"
                    loading="eager"
                    width={600}
                    height={224}
                  />
                </div>
                {goals.length > 0 && (
                  <div className="bg-[#294b3c] rounded-2xl p-6">
                    <p className="text-xs font-semibold tracking-[3px] uppercase text-[#a5b6ae] mb-3">Project goals</p>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {goals.map((g, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#f6f5ec] leading-relaxed">
                          <span className="text-[#a5b6ae] font-bold flex-shrink-0 mt-0.5">→</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ════════════════════════════════════════════════════════════════
              3 — Week-by-week accordion
          ════════════════════════════════════════════════════════════════ */}
          {timelineData.length > 0 && (
            <section
              className="py-12 border-b border-[#a5b6ae]"
              aria-label={`Week-by-week project timeline for ${cohort.title}`}
            >
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Project timeline</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-2">
                What happens each week
              </h2>
              <p className="text-sm text-[#546f61] mb-8">Click any week to expand milestones and deliverables.</p>

              <div className="space-y-2" role="list">
                {timelineData.map((item, index) => {
                  const week = index + 1;
                  const isOpen = openWeek === index;
                  const milestoneItems = item.milestone.split(";").map(s => s.trim()).filter(Boolean);
                  const deliverableItems = item.deliverable.split(";").map(s => s.trim()).filter(Boolean);
                  const summary = milestoneItems[0] || `Week ${week}`;

                  return (
                    <div
                      key={week}
                      className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                        isOpen ? "border-[#294b3c] bg-[#f6f5ec]" : "border-[#a5b6ae] bg-[#f6f5ec] hover:border-[#546f61]"
                      }`}
                      role="listitem"
                    >
                      <button
                        onClick={() => setOpenWeek(isOpen ? null : index)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                        aria-expanded={isOpen}
                        aria-controls={`week-${week}-content`}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                            isOpen ? "bg-[#294b3c] text-[#f6f5ec]" : "bg-[#a5b6ae] text-[#294b3c]"
                          }`}>
                            {week}
                          </span>
                          <p className={`text-sm font-semibold truncate ${isOpen ? "text-[#294b3c]" : "text-[#546f61]"}`}>
                            {summary}
                          </p>
                        </div>
                        <span
                          className={`flex-shrink-0 text-[#546f61] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >▾</span>
                      </button>

                      {isOpen && (
                        <div
                          id={`week-${week}-content`}
                          className="px-5 pb-5 grid sm:grid-cols-2 gap-6 border-t border-[#a5b6ae]"
                        >
                          <div className="pt-4">
                            <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-2">Milestones</p>
                            <ul className="space-y-1.5 list-none p-0 m-0">
                              {milestoneItems.map((m, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-[#294b3c]">
                                  <span className="text-[#546f61] flex-shrink-0 mt-0.5">·</span>{m}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-4">
                            <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-2">Deliverables</p>
                            {deliverableItems.length > 0 ? (
                              <ul className="space-y-1.5 list-none p-0 m-0">
                                {deliverableItems.map((d, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-[#294b3c]">
                                    <span className="text-[#6A1F1B] font-bold flex-shrink-0 mt-0.5">✓</span>{d}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-[#a5b6ae] italic">No deliverable listed.</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ════════════════════════════════════════════════════════════════
              4 — Logistics + Enroll CTA
          ════════════════════════════════════════════════════════════════ */}
          <section className="py-12 border-b border-[#a5b6ae]" aria-label="Cohort logistics and enrollment">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Logistics</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">Details &amp; Enrollment</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Mode",            value: "Online (Live + Recorded)" },
                { label: "Start Date",      value: cohort.startDate },
                { label: "Duration",        value: cohort.duration },
                { label: "Time Commitment", value: "9–10 hrs / week" },
                { label: "Level",           value: cohort.level },
                ...(cohort.is_approved && !isWebinar
                  ? [{
                      label: "Fees",
                      value: `₹${cohort.fees.toLocaleString("en-IN")}${isFoundational ? " (refundable in week 1)" : ""}`,
                    }]
                  : []),
              ].map((row, i) => (
                <div key={i} className="bg-[#f6f5ec] border border-[#a5b6ae] rounded-xl p-4">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-1">{row.label}</p>
                  <p className="text-base font-semibold text-[#294b3c]">{row.value}</p>
                </div>
              ))}
            </div>
            {cohort.is_approved && (
              <div className="flex justify-center">
                <a
                  href={ZOHO_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-[#294b3c] hover:bg-[#1e3830] text-[#f6f5ec] rounded-xl font-semibold text-lg transition-colors duration-200 active:scale-95"
                  aria-label={isWebinar ? `Register free for ${cohort.title}` : `Enroll in ${cohort.title}`}
                >
                  {isWebinar ? "Register Free →" : "Enroll Now →"}
                </a>
              </div>
            )}
          </section>

          {/* ════════════════════════════════════════════════════════════════
              5 — Testimonials — infinite CSS marquee, no jump
          ════════════════════════════════════════════════════════════════ */}
          <section className="py-12" aria-label="Student testimonials from v18Hub cohorts">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">What learners say</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">
              Straight from our cohort graduates
            </h2>

            {/* Overflow clip so cards outside viewport are hidden */}
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* The track — duplicated so the seam is seamless */}
              <div
                className="flex gap-6 w-max"
                style={{
                  animation: "testimonialScroll 22s linear infinite",
                  animationPlayState: isPaused ? "paused" : "running",
                }}
              >
                {/* Render twice: second copy picks up exactly where first ends */}
                {[...testimonials, ...testimonials].map((t, i) => (
                  <figure
                    key={i}
                    className="bg-[#294b3c] rounded-2xl p-6 flex flex-col shrink-0"
                    style={{ width: "320px" }}
                    aria-label={`Testimonial from ${t.author}`}
                  >
                    <span className="text-3xl text-[#a5b6ae] mb-3 leading-none" aria-hidden="true">"</span>
                    <blockquote className="text-sm text-[#f6f5ec] leading-relaxed flex-grow mb-4 italic">
                      {t.text}
                    </blockquote>
                    <figcaption className="text-xs font-semibold tracking-widest uppercase text-[#546f61]">
                      — {t.author}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>

      <style>{`
        @keyframes testimonialScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
};

export default CohortDetails;