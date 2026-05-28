// src/components/Homepage Components/On_The_Horizon/On_The_Horizon.tsx
import { useEffect, useState } from "react";
import OfferCarousel from "../../../utils/custom/offer-carousel";
import { ScrollAnimation } from "../../animations/Scroll_Animation";

// Import all program types
import { approvedWorkshops } from "../../../data/workshops";
import { approvedBootcamps } from "../../../data/bootcamps";
import { cohortsData, type Cohort } from "../../../data/cohorts";
import { approvedPreviewCohorts } from "../../../data/preview_cohorts";

const On_The_Horizon = () => {
  const [upcomingPrograms, setUpcomingPrograms] = useState<any[]>([]);

  useEffect(() => {
    const now = new Date();
    const twoMonthsLater = new Date(now);
    twoMonthsLater.setMonth(now.getMonth() + 2);

    // Combine all programs from different sources
    const allPrograms = [
      ...approvedWorkshops.map(w => ({ 
        ...w, 
        program_type: "workshop" 
      })),
      ...approvedBootcamps.map(b => ({ 
        ...b, 
        program_type: "bootcamp" 
      })),
      ...cohortsData.map(c => ({ 
        ...c, 
        program_type: "cohort" 
      })),
      ...approvedPreviewCohorts.map(p => ({ 
        ...p, 
        program_type: "preview-cohort" 
      })),
    ];

    // Filter upcoming programs (next 2 months)
    const filtered = allPrograms.filter((program) => {
      const start = new Date(program.startDate);
      return start >= now && start <= twoMonthsLater;
    });

    // Priority: Workshop → Bootcamp → Cohort → Preview Cohort
    const tagPriority: Record<string, number> = {
      workshop: 1,
      bootcamp: 2,
      cohort: 3,
      "preview-cohort": 4,
      "preview cohort": 4,
    };

    const sorted = filtered.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();

      if (dateA !== dateB) {
        return dateA - dateB; // earlier dates first
      }

      const priorityA = tagPriority[a.program_type.toLowerCase()] ?? 999;
      const priorityB = tagPriority[b.program_type.toLowerCase()] ?? 999;
      return priorityA - priorityB;
    });

    setUpcomingPrograms(sorted);
  }, []);

  return (
    <section className="bg-[#a5b6ae] py-24">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-[75px] pt-10 pb-5">
        <ScrollAnimation delay={0.1}>
          <h2 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug">
            On the Horizon: Cohorts and Webinars
          </h2>
        </ScrollAnimation>

        {/* FULL-WIDTH WHITE STRIP */}
        <div className="relative -mx-4 lg:-mx-20 mt-12">
          <div className="bg-[#f6f5ec] py-16 lg:py-20 shadow-2xl">
            <ScrollAnimation delay={0.2}>
              <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {upcomingPrograms.length > 0 ? (
                  <OfferCarousel cohorts={upcomingPrograms} />
                ) : (
                  <div className="text-center py-32">
                    <p className="text-[#294b3c] text-2xl font-medium">
                      No upcoming programs in the next 2 months
                    </p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default On_The_Horizon;