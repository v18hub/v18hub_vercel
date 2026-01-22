// src/pages/Explore_Cohort.tsx
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { cohortsData } from "../../data/cohorts";

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
  industry: { display: "Industry Cohorts", slug: "industry-cohorts" },
  applied: { display: "Applied Cohorts", slug: "applied-cohorts" },
  foundational: { display: "Foundational Cohorts", slug: "foundational-cohorts" },
  webinar: { display: "Webinars", slug: "webinars" },
};

const Explore_Cohort = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeSection = searchParams.get("section");

  // Group cohorts by tag
  const groupedCohorts = cohortsData.reduce((acc, cohort) => {
    const tag = (cohort.tag || "others").trim().toLowerCase();
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(cohort);
    return acc;
  }, {} as Record<string, Cohort[]>);

  const tagOrder = Object.keys(tagMap);
  const orderedTags = tagOrder.filter((tag) => groupedCohorts[tag]);

  // Handle scrolling + optional hash → query param migration
  useEffect(() => {
    // 1. Prefer new query param
    if (activeSection) {
      const targetId = `section-${activeSection}`;
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
      return;
    }

    // 2. Fallback: if someone uses old #hash link → convert to ?section= (shareable upgrade)
    const hash = location.hash.slice(1);
    if (hash) {
      const possibleSlug = tagMap[hash]?.slug || hash; // in case someone uses raw tag
      if (Object.values(tagMap).some((t) => t.slug === possibleSlug)) {
        setSearchParams({ section: possibleSlug }, { replace: true });
        // After replace, the next effect run will handle scrolling
      }
    }
  }, [activeSection, location.hash, setSearchParams]);

  return (
    <div className="bg-[#F6F5ED] py-12 font-open-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-20">
        {orderedTags.map((tagKey) => {
          const cohorts = groupedCohorts[tagKey];
          const { display: displayTag, slug: sectionSlug } = tagMap[tagKey];
          const sectionId = `section-${sectionSlug}`;
          const isWebinar = tagKey === "webinar";
          const isFoundational = tagKey === "foundational";

          return (
            <section key={tagKey} id={sectionId} className="scroll-mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#294b3c] text-center mb-8">
                {displayTag}
              </h2>

              {/* Descriptive text */}
              <div className="max-w-4xl mx-auto text-left text-gray-700 text-[1.05rem] leading-7 mb-10 px-4 md:px-8 lg:px-12">
                {tagKey === "industry" && (
                  <p>
                    Cohorts built in collaboration with industry partners or startups. 
                    Learners work on partner-driven datasets, constraints, and workflows, 
                    closely mirroring real-world engineering environments. 
                    The focus is on engineering depth, system design, deployment-ready thinking, 
                    and projects that stand out strongly on your portfolio.
                    <br /><br />
                    Industry Cohorts are priced based on depth, duration, and level of collaboration.
                  </p>
                )}

                {tagKey === "applied" && (
                  <p>
                    Production-oriented cohorts where learners build complete, end-to-end AI systems 
                    using real datasets and authentic problem statements. 
                    Strong emphasis on system design, engineering depth, and deployment-ready thinking. 
                    Each cohort ends with a production-style project that significantly strengthens 
                    your portfolio without direct industry collaboration.
                    <br /><br />
                    Applied Cohorts are priced based on depth, duration, and complexity.
                  </p>
                )}

                {tagKey === "foundational" && (
                  <p>
                    Designed to help learners build confidence and learn how to create real AI systems. 
                    These are short, guided, hands-on programs using realistic datasets, 
                    no industry partner involved. 
                    Each cohort results in a completed mini-project you can confidently add to your portfolio.
                    <br /><br />
                    👉 Foundational Cohorts have a fixed and affordable price. Fees is fully adjustable 
                    on upgrading to an Applied or Industry Cohort.
                    <br />
                    👉 If a learner is unable to keep up within the first week of the Foundational Cohort, the full fees will be refunded.
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
              <div className="flex flex-wrap justify-center gap-8 px-4">
                {cohorts.map((cohort) => (
                  <Link
                    key={cohort.cohort_id}
                    to={`/cohort/${cohort.cohort_id}`}
                    className="block group w-full max-w-[380px]"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="h-48 overflow-hidden bg-gray-100">
                        <img
                          src={cohort.imageSrc}
                          alt={cohort.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Tag Badge */}
                        <span className="inline-block bg-[#526B61] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                          {cohort.tag.charAt(0).toUpperCase() + cohort.tag.slice(1)}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#294b3c] mb-2 line-clamp-2">
                          {cohort.title}
                        </h3>

                        {/* Date */}
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
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Duration:</strong> {cohort.duration}
                        </p>

                        {/* Price - only for Foundational */}
                        {isFoundational && (
                          <p className="text-lg font-bold text-[#6A1F1B] mb-4 text-center">
                            ₹{cohort.fees.toLocaleString("en-IN")}
                          </p>
                        )}

                        {/* Buttons */}
                        <div className="mt-auto flex gap-3 justify-center">
                          <button className="px-5 py-2 bg-[#526B61] hover:bg-[#294b3c] text-white rounded-lg text-sm font-medium transition">
                            Know More
                          </button>
                          {cohort.is_approved && (
                            <button
                              className={`px-5 py-2 border-2 rounded-lg text-sm font-medium transition ${
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