// src/pages/Programs/programDetail.tsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "@vuer-ai/react-helmet-async";

import { approvedWorkshops }      from "../../data/workshops";
import { approvedBootcamps }      from "../../data/bootcamps";
import { approvedCohorts }        from "../../data/cohorts";
import { approvedPreviewCohorts } from "../../data/preview_cohorts";
import { approvedWebinars }       from "../../data/webinars";
import type { ProgramBase }       from "../../data/program_base";
import { generateProgramStructuredData, getProgramMeta } from "../seo/programSEO";

// ─── Data index ───────────────────────────────────────────────────────────────
const DATA_INDEX: Record<
  string,
  { records: Array<ProgramBase & { [key: string]: unknown }>; idKey: string }
> = {
  workshops:         { records: approvedWorkshops, idKey: "workshop_id" },
  bootcamps:         { records: approvedBootcamps, idKey: "bootcamp_id" },
  cohorts:           { records: approvedCohorts, idKey: "cohort_id" },
  "preview-cohorts": { records: approvedPreviewCohorts, idKey: "preview_cohort_id" },
  webinars:          { records: approvedWebinars, idKey: "webinar_id" },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const splitField = (raw: unknown, delimiter = ";"): string[] => {
  if (Array.isArray(raw)) return (raw as string[]).map((s) => s.trim()).filter(Boolean);
  if (!raw) return [];
  return String(raw)
    .split(delimiter)
    .map((s) => s.trim())
    .filter((s) => s && s !== "." && s !== "," && s !== ";");
};

const toDict = (raw: unknown): Record<string, string[]> => {
  if (!raw) return {};
  if (typeof raw === "object" && !Array.isArray(raw)) {
    return raw as Record<string, string[]>;
  }
  if (Array.isArray(raw)) {
    return (raw as string[]).reduce<Record<string, string[]>>((acc, item, i) => {
      if (item?.trim()) acc[`Entry ${i + 1}`] = [item.trim()];
      return acc;
    }, {});
  }
  const items = splitField(raw);
  return items.reduce<Record<string, string[]>>((acc, item, i) => {
    acc[`Entry ${i + 1}`] = [item];
    return acc;
  }, {});
};

// ─── Tag colour ───────────────────────────────────────────────────────────────
const TAG_COLOUR: Record<string, string> = {
  workshop:       "bg-[#a5b6ae] text-[#294b3c]",
  bootcamp:       "bg-[#546f61] text-[#f6f5ec]",
  cohort:         "bg-[#294b3c] text-[#f6f5ec]",
  "preview cohort": "bg-[#6A1F1B] text-[#f6f5ec]",
  webinar:        "bg-[#6A1F1B] text-[#f6f5ec]",
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
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

// ─── Not-found block ──────────────────────────────────────────────────────────
const NotFoundBlock = ({ message }: { message: string }) => (
  <div className="min-h-screen font-open-sans flex flex-col items-center justify-center gap-4 px-6 text-center bg-[#f6f5ec]">
    <h1 className="text-3xl font-bold text-[#294b3c]">Program not found</h1>
    <p className="text-[#546f61] max-w-md">{message}</p>
    <Link
      to="/programs"
      className="mt-2 px-6 py-3 bg-[#294b3c] text-[#f6f5ec] rounded-lg font-medium hover:bg-[#546f61] transition-colors"
    >
      Browse all programs
    </Link>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
const ProgramDetail = () => {
  const params = useParams<{ type: string; id: string }>();
  const { type, id } = params;

  let safeType = (type ?? "").toLowerCase().trim();
  let safeId   = (id ?? "").toLowerCase().trim();

  if (!safeType) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length >= 3 && pathParts[0] === "programs") {
      safeType = pathParts[1];
      safeId   = pathParts[2];
    }
  }

  const [openEntry, setOpenEntry] = useState<number | null>(0);
  const [isPaused, setIsPaused] = useState(false);

  const source = DATA_INDEX[safeType];
  if (!source) {
    return (
      <>
        <Helmet><title>Not Found | v18hub</title><meta name="robots" content="noindex" /></Helmet>
        <NotFoundBlock message={`Category "${safeType}" doesn't exist.`} />
      </>
    );
  }

  const program = source.records.find((p) => {
    const recordId = String(p[source.idKey] || "").trim().toLowerCase();
    return recordId === safeId;
  });

  if (!program) {
    return (
      <>
        <Helmet><title>Program Not Found | v18hub</title><meta name="robots" content="noindex" /></Helmet>
        <NotFoundBlock message="We couldn't find that program. It may have been removed or the link may be incorrect." />
      </>
    );
  }

  // ── Derived values ────────────────────────────────────────────────────────
  const isWebinar = safeType === "webinars";
  const idValue = String(program[source.idKey]);
  const pageUrl = `https://v18hub.in/programs/${safeType}/${idValue}`;
  const typeLabel = safeType.charAt(0).toUpperCase() + safeType.slice(1).replace(/-/g, " ");

  const rawTag = String(program.tag || safeType).toLowerCase();
  const tagLabel = rawTag.charAt(0).toUpperCase() + rawTag.slice(1);
  const tagClass = TAG_COLOUR[rawTag] || "bg-[#546f61] text-[#f6f5ec]";

  const isFoundational = rawTag.includes("preview");

  const keyLearnings = splitField(program.key_learnings, ";");
  const goals = Array.isArray(program.goal) ? (program.goal as string[]) : [];
  const prerequisites = splitField(program.prerequisites || program.requirements);

  const milestonesDict = toDict(program.milestones);
  const deliverablesDict = toDict(program.deliverables);
  const timelineKeys = Object.keys(milestonesDict);

  const evalPoints = splitField(program.program_evaluation_criteria ?? program.evaluations);

  const meta = getProgramMeta(program, typeLabel);
  const structuredData = generateProgramStructuredData([], "detail", safeType, program);

  const FORM_URLS: Record<string, string> = {
    "predict-agri-commodity-prices": "https://forms.gle/cXh4hooaC1ytYfB68",
    "automate-healthcare-claims": "https://forms.gle/e7o4rcttGYsBjSGX8",
    "intraoral-lesion": "https://forms.gle/PZwQZEi5KRS33WmU9",
    "startup-funding-rag": "https://forms.gle/RQgCxcHpSy6n42GH7",
    "ai_data_literacy": "https://forms.gle/nKQcJdNZYXtDjGeK9",
    "python_ml_basics": "https://forms.gle/Dr13FCzGi48uVDRX6",
    "ml_basics_bootcamp": "https://forms.gle/5u3HVW7s6DFDKsFz6",
    "dl_basics_bootcamp": "https://forms.gle/xF1gg4bWtYLhXGxo7",
    "genai_basics_bootcamp": "https://forms.gle/cjNhdAmv3KNEzupi9",
    "process-rag-data": "https://forms.gle/wkExkrJG8RovcQfn6",
    "explore-vision-dataset": "https://forms.gle/YuxMaBLHLCrZ3iHm9",
    "data-science-streams": "https://forms.gle/ZYS4eFn5aZ2bpF7u5"
  };
  const enrollURL = FORM_URLS[idValue] || `https://forms.zohopublic.com/v18hub/form/Register/formperma/xxxx?program_id=${idValue}`;

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow" />
        {(program.skill_tags as string[] | undefined)?.length && (
          <meta name="keywords" content={(program.skill_tags as string[]).join(", ")} />
        )}
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        {program.imageSrc && <meta property="og:image" content={`https://v18hub.in${program.imageSrc}`} />}
        <meta property="og:site_name" content="v18hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {program.imageSrc && <meta name="twitter:image" content={`https://v18hub.in${program.imageSrc}`} />}
      </Helmet>

      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}

      <div className="min-h-screen bg-[#f6f5ec] font-open-sans">
        {/* HERO */}
        <header className="bg-[#294b3c] text-[#f6f5ec] px-[5vw] pt-[8vh] pb-[7vh]" aria-label={`${program.title} overview`}>
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-xs text-[#a5b6ae] list-none p-0 m-0">
                <li><Link to="/programs" className="hover:text-[#f6f5ec] transition-colors">Programs</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link to={`/programs/${safeType}`} className="hover:text-[#f6f5ec] transition-colors">{typeLabel}</Link></li>
                <li aria-hidden="true">›</li>
                <li className="text-[#f6f5ec]" aria-current="page">{program.title as string}</li>
              </ol>
            </nav>

            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagClass} mb-4 inline-block`}>
              {tagLabel}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl">
              {program.title as string}
            </h1>

            <p className="text-base md:text-lg text-[#a5b6ae] leading-relaxed max-w-3xl mb-8">
              {(program.short_description || program.description) as string}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#a5b6ae]">
              <span className="text-base">📅 <strong className="text-[#f6f5ec] font-bold">Starts:</strong> <strong className="text-[#f6f5ec] font-bold">{(program.startDate || "TBA") as string}</strong></span>
              <span>⏱ <strong className="text-[#f6f5ec]">Duration:</strong> {(program.duration || "TBA") as string}</span>
              <span>💻 <strong className="text-[#f6f5ec]">Mode:</strong> Online (Live + Recorded)</span>
              <span>📌 <strong className="text-[#f6f5ec]">Level:</strong> {(program.level || "All levels") as string}</span>
              {program.is_approved && !isWebinar && (program.fees as number) > 0 && (
                <span className="text-base">💰 <strong className="text-[#f6f5ec] font-bold">Fees:</strong> <strong className="text-[#f6f5ec] font-bold">₹{(program.fees as number).toLocaleString("en-IN")}{isFoundational && " · refundable in week 1"}</strong></span>
              )}
              {isWebinar && <span>🎟 <strong className="text-[#f6f5ec]">Free to attend</strong></span>}
            </div>

            {Array.isArray(program.skill_tags) && program.skill_tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8" aria-label="Skills covered">
                {(program.skill_tags as string[]).map((skill, i) => (
                  <span key={i} className="text-xs bg-[#1e3830] text-[#a5b6ae] border border-[#546f61] px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {program.is_approved && (
              <a href={enrollURL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#f6f5ec] hover:bg-[#a5b6ae] text-[#294b3c] rounded-lg font-semibold transition-colors duration-200 active:scale-95">
                {isWebinar ? "Register Free →" : "Enroll Now →"}
              </a>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-[5vw] pb-20">
          {/* 1. You Build Something Real + Program Goals */}
          {goals.length > 0 && (
            <section className="py-12 border-b border-[#a5b6ae]" aria-label="Program goals">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">More than a course</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">You build something real</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((g, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#f6f5ec] border border-[#a5b6ae] rounded-xl">
                    <span className="text-xl mt-0.5 flex-shrink-0" role="img" aria-hidden="true">→</span>
                    <p className="text-sm text-[#294b3c] leading-relaxed">{g}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 2. What you'll gain - Skills & Outcomes */}
          <section className="py-12 border-b border-[#a5b6ae]" aria-label="Skills and outcomes">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">What you'll gain</p>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">
                  Skills &amp; outcomes you'll walk away with
                </h2>
                {keyLearnings.length > 0 ? (
                  <ul className="space-y-3 list-none p-0 m-0">
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

              {/* Bigger Image */}
              {program.imageSrc && (
                <div className="rounded-2xl overflow-hidden shadow-md bg-[#a5b6ae] max-h-[420px]">
                  <img
                    src={program.imageSrc as string}
                    alt={`${program.title} — v18hub ${tagLabel}`}
                    className="w-full h-full object-contain min-h-[420px]"
                    loading="eager"
                    width={400}
                    height={620}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
              )}
            </div>
          </section>

          {/* 3. About this program */}
          {program.description && (
            <section className="py-12 border-b border-[#a5b6ae]" aria-label="About this program">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Overview</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-5">About this program</h2>
              <p className="text-[#546f61] text-base md:text-lg leading-relaxed max-w-3xl">
                {program.description as string}
              </p>
            </section>
          )}

          {/* 4. Prerequisites */}
          {prerequisites.length > 0 && (
            <section className="py-12 border-b border-[#a5b6ae]" aria-label="Prerequisites">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Prerequisites</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">What you should know before joining</h2>
              <ul className="space-y-3 list-none p-0 m-0">
                {prerequisites.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-[#294b3c]">
                    <span className="text-[#546f61] font-bold mt-0.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 5. Timeline */}
          {timelineKeys.length > 0 && (
            <section className="py-12 border-b border-[#a5b6ae]" aria-label="Project timeline">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Project timeline</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-2">What happens each step</h2>
              <p className="text-sm text-[#546f61] mb-8">Click any row to expand milestones and deliverables.</p>

              <div className="space-y-2" role="list">
                {timelineKeys.map((key, index) => {
                  const isOpen = openEntry === index;
                  const milestoneItems = milestonesDict[key] || [];
                  const deliverableItems = deliverablesDict[key] || [];

                  return (
                    <div key={key} className={`rounded-xl border transition-colors duration-200 overflow-hidden ${isOpen ? "border-[#294b3c] bg-[#f6f5ec]" : "border-[#a5b6ae] bg-[#f6f5ec] hover:border-[#546f61]"}`} role="listitem">
                      <button onClick={() => setOpenEntry(isOpen ? null : index)} className="w-full flex items-center justify-between px-5 py-4 text-left gap-4" aria-expanded={isOpen}>
                        <div className="flex items-center gap-4 min-w-0">
                          <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${isOpen ? "bg-[#294b3c] text-[#f6f5ec]" : "bg-[#a5b6ae] text-[#294b3c]"}`}>
                            {index + 1}
                          </span>
                          <p className={`text-sm font-semibold truncate ${isOpen ? "text-[#294b3c]" : "text-[#546f61]"}`}>
                            {key}
                          </p>
                        </div>
                        <span className={`flex-shrink-0 text-[#546f61] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▾</span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 grid sm:grid-cols-2 gap-6 border-t border-[#a5b6ae]">
                          <div className="pt-4">
                            <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-2">Milestones</p>
                            {milestoneItems.length > 0 ? (
                              <ul className="space-y-1.5 list-none p-0 m-0">
                                {milestoneItems.map((m, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-[#294b3c]">
                                    <span className="text-[#546f61] flex-shrink-0 mt-0.5">·</span>{m}
                                  </li>
                                ))}
                              </ul>
                            ) : <p className="text-sm text-[#a5b6ae] italic">No milestones listed.</p>}
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
                            ) : <p className="text-sm text-[#a5b6ae] italic">No deliverable listed.</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 6. Logistics + Prerequisites already added above */}
          <section className="py-12 border-b border-[#a5b6ae]" aria-label="Program logistics and enrollment">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">Logistics</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">Details &amp; Enrollment</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Mode", value: "Online (Live + Recorded)" },
                { label: isWebinar ? "Date & Time" : "Start Date", value: (program.startDate || "TBA") as string },
                { label: "Duration", value: (program.duration || "TBA") as string },
                { label: "Level", value: (program.level || "All levels") as string },
                ...(program.is_approved && !isWebinar && (program.fees as number) > 0 ? [{
                  label: "Fees",
                  value: `₹${(program.fees as number).toLocaleString("en-IN")}${isFoundational ? " (refundable in week 1)" : ""}`,
                }] : []),
                ...(isWebinar ? [{ label: "Cost", value: "Free to attend" }] : []),
              ].map((row, i) => (
                <div key={i} className="bg-[#f6f5ec] border border-[#a5b6ae] rounded-xl p-4">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-1">{row.label}</p>
                  <p className="text-base font-semibold text-[#294b3c]">{row.value}</p>
                </div>
              ))}
            </div>

            {evalPoints.length > 0 && (
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-3">How you'll be evaluated</p>
                <ul className="flex flex-wrap gap-2">
                  {evalPoints.map((ev, i) => (
                    <li key={i} className="bg-[#a5b6ae] text-[#294b3c] text-sm px-4 py-1.5 rounded-full">{ev}</li>
                  ))}
                </ul>
              </div>
            )}

            {program.is_approved && (
              <div className="flex justify-center">
                <a href={enrollURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-[#294b3c] hover:bg-[#1e3830] text-[#f6f5ec] rounded-xl font-semibold text-lg transition-colors duration-200 active:scale-95">
                  {isWebinar ? "Register Free →" : "Enroll Now →"}
                </a>
              </div>
            )}
          </section>

          {/* 7. Testimonials */}
          <section className="py-12" aria-label="Student testimonials">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#546f61] mb-2">What learners say</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#294b3c] mb-6">Straight from our program graduates</h2>

            <div className="overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="flex gap-6 w-max" style={{ animation: "testimonialScroll 22s linear infinite", animationPlayState: isPaused ? "paused" : "running" }}>
                {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                  <figure key={i} className="bg-[#294b3c] rounded-2xl p-6 flex flex-col shrink-0" style={{ width: "320px" }}>
                    <span className="text-3xl text-[#a5b6ae] mb-3 leading-none" aria-hidden="true">"</span>
                    <blockquote className="text-sm text-[#f6f5ec] leading-relaxed flex-grow mb-4 italic">{t.text}</blockquote>
                    <figcaption className="text-xs font-semibold tracking-widest uppercase text-[#546f61]">— {t.author}</figcaption>
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

export default ProgramDetail;