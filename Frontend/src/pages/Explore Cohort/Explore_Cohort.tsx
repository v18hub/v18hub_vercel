// src/pages/Explore_Cohort.tsx
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { cohortsData } from "../../data/cohorts";

export type Cohort = {
  cohort_id: string;
  partner_id: string;
  imageSrc: string;
  tag: string;
  title: string;
  short_description: string,
  description: string;
  startDate: string; // "Nov 1, 2025"
  duration: string;
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
  fees: number;
  current_version: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
};

const tagMap: Record<string, { display: string; slug: string }> = {
  "industry": { display: "Industrial Cohorts", slug: "industry-cohorts" },
  "foundational": { display: "Foundational Cohorts", slug: "foundational-cohorts" },
  "webinar": { display: "Webinars", slug: "webinars" },
};

const Explore_Cohort = () => {
  const location = useLocation();

  // Group cohorts by tag (lowercase)
  const groupedCohorts = cohortsData.reduce((acc, cohort) => {
    const tag = (cohort.tag || "others").trim().toLowerCase();
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(cohort);
    return acc;
  }, {} as Record<string, Cohort[]>);

  // Fixed order based on tagMap keys
  const tagOrder = Object.keys(tagMap);

  const orderedTags = tagOrder.filter(tag => groupedCohorts[tag]);

  // Scroll to section on menu click
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (!hash) return;

    const targetId = `section-${hash}`;
    const el = document.getElementById(targetId);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="bg-[#F6F5ED] py-12 font-open-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {orderedTags.map((tagKey) => {
          const cohorts = groupedCohorts[tagKey];
          const { display: displayTag, slug: sectionSlug } = tagMap[tagKey];
          const sectionId = `section-${sectionSlug}`;

          const isWebinar = tagKey === "webinar";

          return (
            <section key={tagKey} id={sectionId} className="scroll-mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#294b3c] text-center mb-8">
                {displayTag}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cohorts
                .map((cohort) => (
                  <Link
                    key={cohort.cohort_id}
                    to={`/cohort/${cohort.cohort_id}`}
                    className="block group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={cohort.imageSrc}
                          alt={cohort.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Tag */}
                        <span className="inline-block bg-[#526B61] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                          {cohort.tag}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#294b3c] mb-2 line-clamp-2">
                          {cohort.title}
                        </h3>

                        {/* Webinar: Date & Time */}
                        {isWebinar && cohort.startDate ? (
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Date & Time:</strong> {cohort.startDate}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>Start Date:</strong> {cohort.startDate}
                          </p>
                        )}

                        {/* Duration */}
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Duration:</strong> {cohort.duration}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-6 flex gap-3 justify-center">
                          <button className="px-5 py-2 bg-[#526B61] hover:bg-[#294b3c] text-white rounded-lg text-sm font-medium transition">
                            Know More
                          </button>
                          {cohort.is_approved && (
                            <button
                              className={`px-5 py-2 border rounded-lg text-sm font-medium transition ${
                                isWebinar
                                  ? "border-green-600 text-green-600 hover:bg-green-50"
                                  : "border-[#526B61] text-[#526B61] hover:bg-[#526B61]/10"
                              }`}
                            >
                              {isWebinar ? "Register Free" : "Enroll Now"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Explore_Cohort;