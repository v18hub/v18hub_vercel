// src/pages/CohortDetails.tsx
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { cohortsData } from "../../data/cohorts";

const CohortDetails = () => {
  const { id } = useParams<{ id: string }>();
  const cohort = cohortsData.find((c) => c.cohort_id === id);

  if (!cohort) return <div className="py-32 text-center text-2xl">Cohort not found</div>;

  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  // Helpers
  const goals = Array.isArray(cohort.goal) ? cohort.goal : [];
  const keyLearnings = Array.isArray(cohort.key_learnings)
    ? cohort.key_learnings
    : cohort.key_learnings?.split(";").map((s) => s.trim()).filter(Boolean) || [];

  let ZOHO_FORM_URL = `https://forms.zohopublic.com/yourorg/form/Register/formperma/xxxx?cohort_id=${cohort.cohort_id}`;
  if (cohort.cohort_id === "predict-agri-commodity-prices") {
    ZOHO_FORM_URL = "https://forms.gle/cXh4hooaC1ytYfB68"; // "https://forms.gle/VSKcAgdCkK6E4draA";
  } else if (cohort.cohort_id === "automate-healthcare-claims") {
    ZOHO_FORM_URL = "https://forms.gle/e7o4rcttGYsBjSGX8"; // "https://forms.gle/6mnx5MSJYJAvnz6V6";
  } else if (cohort.cohort_id === "intraoral-lesion") {
    ZOHO_FORM_URL = "https://forms.gle/PZwQZEi5KRS33WmU9"; // "https://forms.gle/Zt9XaP4oRL1hkEcbA";
  } else if (cohort.cohort_id === "startup-funding-rag") {
    ZOHO_FORM_URL = "https://forms.gle/RQgCxcHpSy6n42GH7";
  } else if(cohort.cohort_id === "collect-process-rag-data") {
    ZOHO_FORM_URL = "https://forms.gle/MSju23hBmYpBEzjF7";
  } else if (cohort.cohort_id === "explore-vision-dataset") {
    ZOHO_FORM_URL = "https://forms.gle/BL3f3ubZFDac7ED47"
  } else if (cohort.cohort_id === "timeseries-forcasting") {
    ZOHO_FORM_URL = "https://forms.gle/UYvMhqoZkLaDKohj7"
  } 


  // ── Removed strikethrough logic: now simply display original values ──
  const displayStartDate = () => cohort.startDate;

  const displayFees = () => `₹${cohort.fees}`;

  // Sample Testimonials
  const testimonials = [
    {
      text: "The cohort was really informative and it got me more interested in AI and the different domains to dive into. The way you explained the concepts and provided so many reference materials made things easy to understand.",
      author: "Thanu George",
    },
    {
      text: "The cohort was about 90% practical and 10% theory, which helped in understanding logic and frameworks effectively. ...",
      author: "Taran Thimmaiah",
    },
    {
      text: "I really enjoyed being part of the genai cohort. It was one of the most insightful and engaging learning experiences I’ve had...",
      author: "Prakrathi Jain",
    },
  ];

  // Auto-scroll testimonials
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !hoveredTestimonial) {
        const scrollAmount = 320; // card width + gap
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        const newScroll = scrollRef.current.scrollLeft + scrollAmount;

        if (newScroll >= maxScroll) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [hoveredTestimonial]);

  return (
    <div className="min-h-screen bg-[#F6F5ED] font-open-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 pt-12 pb-8">
        <div className="border-b border-gray-300 pb-4 space-y-2">
          <h1 className="text-5xl font-bold text-[#294b3c]">{cohort.title}</h1>
          <p className="text-2xl text-[#546f61]">{cohort.tag}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 mt-6">
          <p className="text-lg">
            <span className="font-medium">Start Date & Duration</span>
            <br />
            <span className="text-2xl font-medium">{displayStartDate()} | {cohort.duration}</span>
          </p>

          {cohort.is_approved && (
            <a
              href={ZOHO_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#546f61] hover:bg-[#294b3c] text-[#f4f2ee] rounded-lg font-medium transition active:scale-95"
            >
              Enroll Now
            </a>
          )}
        </div>
      </header>

      {/* Overview + Image */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-[#294b3c] mb-4">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-800">{cohort.description}</p>
          </div>
          <div className="flex justify-center">
            <img
              src={cohort.imageSrc}
              alt={cohort.title}
              className="w-full max-w-md h-auto rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 pb-16 space-y-12">
        {/* Goal */}
        {goals.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-[#294b3c] mb-4">Goal</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
              {goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Project Timeline & Deliverables */}
        <section>
          <h2 className="text-2xl font-semibold text-[#294b3c] mb-6">
            Project Timeline & Deliverables
          </h2>
          <div className="space-y-3 max-w-4xl">
            {(() => {
              const timelineData = Array.isArray(cohort.milestones)
                ? cohort.milestones.map((m, i) => ({
                    milestone: (m || "").trim(),
                    deliverable: (cohort.deliverables?.[i] || "").trim(),
                  }))
                : [];

              return timelineData.map((item, index) => {
                const week = index + 1;
                const milestoneItems = item.milestone.split(";").map(s => s.trim()).filter(Boolean);
                const deliverableItems = item.deliverable.split(";").map(s => s.trim()).filter(Boolean);

                return (
                  <div
                    key={week}
                    className="border border-gray-300 rounded-lg bg-white flex overflow-hidden"
                  >
                    <div className="w-32 px-5 py-4 text-left font-medium text-lg text-[#294b3c] bg-gray-50 border-r border-gray-300 flex items-center justify-center">
                      Week {week}
                    </div>
                    <div className="flex-1 px-6 py-4 space-y-3 text-gray-700">
                      <div>
                        <p className="font-medium text-[#294b3c] mb-1">Milestone:</p>
                        {milestoneItems.length > 0 ? (
                          <ul className="list-disc list-inside space-y-1 text-base">
                            {milestoneItems.map((m, i) => <li key={i}>{m}</li>)}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic">N/A</p>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-[#294b3c] mb-1">Deliverable:</p>
                        {deliverableItems.length > 0 ? (
                          <ul className="list-disc list-inside space-y-1 text-base">
                            {deliverableItems.map((d, i) => <li key={i}>{d}</li>)}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic">N/A</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* What You’ll Learn */}
        <section>
          <h2 className="text-2xl font-semibold text-[#294b3c] mb-4">What You’ll Learn</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            {keyLearnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Logistics Details */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#294b3c] mb-4">Logistics Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-800">
            <p><strong>Mode:</strong> Online (Live + Recorded)</p>
            <p><strong>Time commitment:</strong> 9-10 hrs/week</p>
            {cohort.is_approved && (
              <p>
                <strong>Fees:</strong>{" "}
                <span className="bg-[#546f61] text-[#f4f2ee] px-3 py-1 rounded-full text-base">
                  {displayFees()}
                </span>
              </p>
            )}
            <p><strong>Who should attend:</strong> Beginners / Intermediate</p>
          </div>
          {cohort.is_approved && (
            <div className="flex justify-center mt-6">
              <a
                href={ZOHO_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#546f61] hover:bg-[#294b3c] text-[#f4f2ee] rounded-lg font-medium transition active:scale-95"
              >
                Enroll Now
              </a>
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-2xl font-semibold text-[#294b3c] mb-6">Testimonials</h2>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
            style={{ scrollBehavior: "smooth" }}
            onMouseEnter={() => setHoveredTestimonial(-1)}
            onMouseLeave={() => setHoveredTestimonial(null)}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-80 transition-all duration-200"
                onMouseEnter={() => setHoveredTestimonial(i)}
                onMouseLeave={() => setHoveredTestimonial(null)}
                style={{
                  transform:
                    hoveredTestimonial === i
                      ? "scale(1.08) translateY(-8px)"
                      : hoveredTestimonial != null
                      ? "scale(0.95)"
                      : "scale(1)",
                  zIndex: hoveredTestimonial === i ? 10 : 1,
                  boxShadow:
                    hoveredTestimonial === i
                      ? "0 20px 40px rgba(0,0,0,0.1)"
                      : "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <blockquote className="bg-white p-6 rounded-xl h-full border border-gray-200">
                  <p className="italic text-lg text-gray-800 leading-relaxed">“{t.text}”</p>
                  <footer className="mt-4 text-right text-sm text-[#526B61] font-medium">
                    — {t.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CohortDetails;