// src/components/Homepage Components/On_The_Horizon/On_The_Horizon.tsx
import { useEffect, useState } from "react";
import OfferCarousel from "../../../utils/custom/offer-carousel";
import { ScrollAnimation } from "../../animations/Scroll_Animation";
import { cohortsData, type Cohort } from "../../../data/cohorts";

const On_The_Horizon = () => {
  const [upcomingCohorts, setUpcomingCohorts] = useState<Cohort[]>([]);

  useEffect(() => {
    const now = new Date();
    const twoMonthsLater = new Date(now);
    twoMonthsLater.setMonth(now.getMonth() + 2);

    const filtered = cohortsData.filter((cohort: Cohort) => {
      const start = new Date(cohort.startDate);
      return start >= now && start <= twoMonthsLater;
    });

    setUpcomingCohorts(filtered);
  }, []);

  return (
    <section className="bg-[#a5b6ae] py-24">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-[75px] pt-10 pb-5">{/*max-w-[1380px] is to increase the white space area in width. 
      More the value more the white area*/}
        <ScrollAnimation delay={0.1}>
          <h2 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap">
            On the Horizon: Cohorts and Webinars
          </h2>
        </ScrollAnimation>

        {/* FULL-WIDTH WHITE STRIP */}
        <div className="relative -mx-4 lg:-mx-20">
          <div className="bg-white py-12 lg:py-16 shadow-2xl">
            <ScrollAnimation delay={0.2}>
              <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {upcomingCohorts.length > 0 ? (
                  <OfferCarousel cohorts={upcomingCohorts} />
                ) : (
                  <p className="text-center text-[#294b3c] py-24 text-xl font-medium">
                    No upcoming cohorts in the next 2 months
                  </p>
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