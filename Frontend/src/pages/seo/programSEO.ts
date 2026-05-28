// src/pages/seo/programSEO.ts
import type { ProgramBase } from "../../data/program_base";

/**
 * Generates JSON-LD structured data for program pages.
 * Used by Programs.tsx (overview), programListing.tsx, and programDetail.tsx.
 */
export const generateProgramStructuredData = (
  programs: Array<ProgramBase & { [key: string]: unknown }>,
  pageType: "overview" | "listing" | "detail",
  slug?: string,
  singleProgram?: ProgramBase & { [key: string]: unknown }
): object | null => {
  try {
    // ── Overview page ──────────────────────────────────────────────────────
    if (pageType === "overview") {
      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "v18hub Programs — Workshops, Bootcamps, Cohorts, Preview Cohorts & Webinars",
        description:
          "Explore hands-on AI learning programs: workshops, intensive bootcamps, project-based cohorts, preview cohorts, and webinars. Build real AI systems with expert mentorship.",
        url: "https://v18hub.in/programs",
        itemListElement: programs.map((p, i) => {
          const programId =
            (p.workshop_id ||
              p.bootcamp_id ||
              p.cohort_id ||
              p.preview_cohort_id ||
              p.webinar_id) as string | undefined;

          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Course",
              name: p.title,
              description: p.short_description || p.description,
              url: `https://v18hub.in/programs/${(p.program_type || "cohorts").toLowerCase()}/${programId}`,
              provider: { "@type": "Organization", name: "v18hub", url: "https://v18hub.in" },
            },
          };
        }),
      };
    }

    // ── Listing page ───────────────────────────────────────────────────────
    if (pageType === "listing" && slug) {
      const displayName = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `v18hub ${displayName} Programs`,
        description: `Explore all ${displayName} programs at v18hub. Build production-ready AI projects with real datasets and expert mentorship.`,
        url: `https://v18hub.in/programs/${slug}`,
        itemListElement: programs.map((p, i) => {
          const programId =
            (p.workshop_id ||
              p.bootcamp_id ||
              p.cohort_id ||
              p.preview_cohort_id ||
              p.webinar_id) as string | undefined;

          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": slug === "webinars" ? "Event" : "Course",
              name: p.title,
              description: p.short_description || p.description,
              url: `https://v18hub.in/programs/${slug}/${programId}`,
              provider: { "@type": "Organization", name: "v18hub", url: "https://v18hub.in" },
            },
          };
        }),
      };
    }

    // ── Detail page ────────────────────────────────────────────────────────
    if (pageType === "detail" && singleProgram && slug) {
      const isWebinar = slug === "webinars";
      const programId =
        (singleProgram.workshop_id ||
          singleProgram.bootcamp_id ||
          singleProgram.cohort_id ||
          singleProgram.preview_cohort_id ||
          singleProgram.webinar_id) as string | undefined;

      return {
        "@context": "https://schema.org",
        "@type": isWebinar ? "Event" : "Course",
        name: singleProgram.title,
        description: singleProgram.description || singleProgram.short_description,
        url: `https://v18hub.in/programs/${slug}/${programId}`,
        ...(singleProgram.startDate ? { startDate: singleProgram.startDate } : {}),
        ...(singleProgram.imageSrc ? { image: `https://v18hub.in${singleProgram.imageSrc}` } : {}),
        provider: { "@type": "Organization", name: "v18hub", url: "https://v18hub.in" },
        ...(isWebinar
          ? {}
          : {
              educationalLevel: singleProgram.level,
              teaches: singleProgram.skill_tags,
              offers: {
                "@type": "Offer",
                price: singleProgram.fees,
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            }),
      };
    }
  } catch (err) {
    console.error("[programSEO] Failed to generate structured data:", err);
  }

  return null;
};

/**
 * Returns { title, description } for <Helmet> on any program page.
 * Pass no arguments for the overview page defaults.
 */
export const getProgramMeta = (
  program?: ProgramBase & { [key: string]: unknown },
  typeLabel = ""
): { title: string; description: string } => ({
  title: program
    ? `${program.title} | v18hub ${typeLabel}`
    : "Programs — Workshops, Bootcamps, Cohorts, Preview Cohorts & Webinars | v18hub",

  description:
    (program?.short_description as string | undefined) ||
    (program?.description as string | undefined)?.slice(0, 160) ||
    "Explore v18hub's project-based AI programs: hands-on workshops, intensive bootcamps, production-focused cohorts, preview cohorts, and free webinars.",
});