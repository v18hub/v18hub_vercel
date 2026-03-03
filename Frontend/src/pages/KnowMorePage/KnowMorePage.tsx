// src/pages/KnowMorePage.tsx
import { Helmet } from '@vuer-ai/react-helmet-async';
import { Know_More_Educator } from "../../components/Know_More_Pages/Know_More_Educator/Know_More_Educator";
import { Know_More_Learner } from "../../components/Know_More_Pages/Know_More_Learner/Know_More_Learner";
import { Know_More_IndustryPartner } from "../../components/Know_More_Pages/Know_More_Industry_Partner/Know_More_Industry_Partner";
import { Know_More_Mentor } from "../../components/Know_More_Pages/Know_More_Mentor/Know_More_Mentor";
import { knowMoreSEO } from "../seo/knowMoreSEO";
import { useLocation, Link } from "react-router-dom";

const KnowMorePage = () => {
  const location = useLocation();

  const Know_More_Data: any = (() => {
    switch (location.pathname) {
      case "/ourcommunity/learners":
        return { ...Know_More_Learner, role: "Learners" };
      case "/ourcommunity/educators":
        return { ...Know_More_Educator, role: "Educators" };
      case "/ourcommunity/mentors":
        return { ...Know_More_Mentor, role: "Mentors" };
      case "/ourcommunity/industry-partners":
        return { ...Know_More_IndustryPartner, role: "Industry Partners" };
      default:
        return null;
    }
  })();

  if (!Know_More_Data) {
    return (
      <div className="text-center py-20 text-gray-600">
        Page data not found.
      </div>
    );
  }

  const seo = knowMoreSEO[location.pathname];
  const cta = Know_More_Data.cta?.[0];

  return (
    <>
      {/* ── SEO HEAD ─────────────────────────────────────────────────────── */}
      {seo && (
        <Helmet>
          {/* Primary */}
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <link rel="canonical" href={seo.canonical} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seo.canonical} />
          <meta property="og:title" content={seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:site_name" content="v18hub" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.ogTitle} />
          <meta name="twitter:description" content={seo.ogDescription} />

          {/* Robots */}
          <meta name="robots" content="index, follow" />
        </Helmet>
      )}

      {/* ── PAGE ─────────────────────────────────────────────────────────── */}
      {/* FIX: was #f4f2ee (off-brand near-miss) — corrected to #f6f5ec */}
      <div className="font-open-sans bg-[#f6f5ec] min-h-screen w-full flex justify-center py-16">
        <div className="w-full max-w-6xl px-6">

          {/* ROLE HEADING — h1, one per page, correct for SEO */}
          <h1 className="text-center text-5xl font-bold text-[#294b3c] mb-12">
            {Know_More_Data.role}
          </h1>

          {/* INTRO TEXT */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-[#546f61]">
              {Know_More_Data.title}
            </p>
          </div>

          {/* LEARNERS ONLY: STAT HOOK — split layout, stat vertically centered */}
          {Know_More_Data.stat_hook && (
            <div className="mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">

              {/* Large crimson stat — centered against text, no underline, no box */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <span
                  className="text-[#6A1F1B] font-bold font-serif leading-none"
                  style={{ fontSize: "clamp(4.5rem, 10vw, 7rem)" }}
                  aria-label={`Statistic: ${Know_More_Data.stat_hook.stat}`}
                >
                  {Know_More_Data.stat_hook.stat}
                </span>
              </div>

              {/* Context text — vertical divider on md+ */}
              <div className="flex-1 md:border-l md:border-[#a5b6ae] md:pl-10">
                <p className="text-[#294b3c] text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line">
                  {Know_More_Data.stat_hook.context}
                </p>
                <p className="text-[#546f61] text-sm mt-4 italic">
                  {Know_More_Data.stat_hook.footnote}
                </p>
              </div>

            </div>
          )}

          {/* LEARNERS ONLY: OUTCOMES GRID */}
          {Know_More_Data.outcomes && (
            <section aria-label="What you will learn at v18hub" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[#294b3c] text-center mb-10">
                What you'll walk away with
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {Know_More_Data.outcomes.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-6 py-5 shadow-sm border-l-4 border-[#546f61]"
                  >
                    <p className="font-semibold text-[#294b3c] text-lg mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#546f61] text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATORS / MENTORS / INDUSTRY PARTNERS: VALUE POINTS */}
          {Know_More_Data.value_points && (
            <section aria-label={`Why partner with v18hub as ${Know_More_Data.role}`} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium text-[#294b3c] text-center mb-10">
                Why it matters
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {Know_More_Data.value_points.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-6 py-5 shadow-sm border-l-4 border-[#546f61]"
                  >
                    <p className="font-semibold text-[#294b3c] text-lg mb-1">
                      {item.label}
                    </p>
                    <p className="text-[#546f61] text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* HOW DOES IT WORK — FIX: was a <div>, now proper <h2> */}
          <h2 className="font-medium text-3xl md:text-4xl text-[#294b3c] text-center mb-12">
            How does it work?
          </h2>

          {/* STEP BLOCKS */}
          <div className="flex flex-col gap-12 justify-center items-center">
            {Know_More_Data.how_does_it_work.map((each: any, i: number) => (
              <div
                key={i}
                className={`flex flex-col w-full md:flex-row items-center justify-between gap-8 rounded-xl py-8 transition-all duration-300 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* FIX: was bg-[#E6EAE7] (off-brand) — corrected to #a5b6ae */}
                <div className="h-[180px] w-[300px] sm:w-[20vw] sm:h-[15vw] bg-[#a5b6ae] flex items-center justify-center rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={each.img}
                    // FIX: was alt={each.inner_title} (generic step name)
                    // Now uses descriptive img_alt from data file
                    alt={each.img_alt || each.inner_title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-left">
                  {/* FIX: was <p>, now <h3> for correct heading hierarchy */}
                  <h3 className="font-semibold text-[#294b3c] text-xl sm:text-2xl mb-3">
                    {each.inner_title}
                  </h3>
                  <p className="text-[#546f61] text-lg sm:text-xl leading-relaxed">
                    {each.inner_desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* LEARNERS ONLY: FOUNDATIONAL COHORT NOTE */}
          {Know_More_Data.foundational_note && (
            <div className="mt-16 bg-white border border-[#a5b6ae] rounded-2xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
              <div className="flex-1">
                {/* h3 appropriate here — subordinate to the h2 "How does it work?" above */}
                <h3 className="font-semibold text-[#294b3c] text-xl mb-2">
                  {Know_More_Data.foundational_note.heading}
                </h3>
                <p className="text-[#546f61] text-base leading-relaxed">
                  {Know_More_Data.foundational_note.desc}
                </p>
              </div>
              <Link
                to={Know_More_Data.foundational_note.cta_href}
                aria-label="Learn about the v18hub Foundational Cohort for new AI learners"
                className="inline-flex font-medium items-center rounded-lg bg-[#294b3c] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#546f61] active:scale-95 transition-transform flex-shrink-0"
              >
                {Know_More_Data.foundational_note.cta_label}
              </Link>
            </div>
          )}

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5 justify-center items-center mt-16">
            {cta?.button1 && (
              <Link
                to={cta.button1.href}
                aria-label={`${cta.button1.label} — v18hub ${Know_More_Data.role}`}
                className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
              >
                {cta.button1.label}
              </Link>
            )}
            {cta?.button2 && (
              <Link
                to={cta.button2.href}
                aria-label={`${cta.button2.label} — v18hub ${Know_More_Data.role}`}
                className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
              >
                {cta.button2.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default KnowMorePage;
