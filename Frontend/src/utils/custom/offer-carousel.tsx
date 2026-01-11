// utils/custom/offer-carousel.tsx — UPDATED with bigger tag label + styled price
import { useEffect, useRef, useState, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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

interface OfferCarouselProps {
  cohorts: Cohort[];
}

const OfferCard = memo(({ cohort }: { cohort: Cohort }) => {
  const isFoundational = cohort.tag.toLowerCase() === "foundational";
  const displayTag = cohort.tag.charAt(0).toUpperCase() + cohort.tag.slice(1);

  return (
    <div className="h-[560px] w-full flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
      <Link to={`/cohort/${cohort.cohort_id}`} className="flex flex-col h-full">

        {/* Image */}
        <div className="h-64 flex-shrink-0">
          <img
            src={cohort.imageSrc}
            alt={cohort.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 px-5 pt-4 pb-6 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#294b3c] mb-2 line-clamp-2 leading-tight">
              {cohort.title}
            </h3>
            <p className="text-[#294b3c] text-xs mb-3 line-clamp-3 leading-snug">
              {cohort.short_description}
            </p>

            {/* Centered row: Starts → Price → Duration */}
            <div className="grid grid-cols-3 gap-2 text-xs text-center">
              <div>
                <div className="text-gray-600">Starts</div>
                <div className="font-bold text-[#294b3c]">{cohort.startDate}</div>
              </div>

              {isFoundational ? (
                <div>
                  <div className="text-gray-600">Price</div>
                  <div className="text-base font-bold text-[#6A1F1B]">
                    ₹{cohort.fees.toLocaleString("en-IN")}
                  </div>
                </div>
              ) : (
                <div /> // placeholder to keep grid alignment
              )}

              <div>
                <div className="text-gray-600">Duration</div>
                <div className="font-bold text-[#294b3c]">{cohort.duration}</div>
              </div>
            </div>
          </div>

          {/* Tag Cohort Label – bigger font */}
          <div className="bg-[#6A1F1B] text-[#f6f5ec] py-2.5 px-4 rounded-2xl text-base font-bold text-center mb-3">
            {displayTag} Cohort
          </div>

          {/* Enroll Button */}
          {cohort.is_approved ? (
            <button className="w-full py-3 bg-[#526B61] hover:bg-[#294b3c] text-white rounded-2xl font-bold text-sm transition-all active:scale-95">
              Enroll Now
            </button>
          ) : (
            <button disabled className="w-full py-3 bg-gray-400 text-gray-200 rounded-2xl font-bold text-sm cursor-not-allowed">
              Coming Soon
            </button>
          )}
        </div>
      </Link>
    </div>
  );
});
OfferCard.displayName = "OfferCard";

const OfferCarousel = memo(({ cohorts }: OfferCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const timer = setTimeout(checkScroll, 300);
    checkScroll();

    const handler = () => checkScroll();
    window.addEventListener("resize", handler);
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("resize", handler);
      container?.removeEventListener("scroll", handler);
      clearTimeout(timer);
    };
  }, [cohorts]);

  const scrollNext = () => scrollContainerRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  const scrollPrev = () => scrollContainerRef.current?.scrollBy({ left: -340, behavior: "smooth" });

  const showArrows = cohorts.length > 1;

  return (
    <div className="relative">
      {showArrows && canScrollLeft && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 md:left-[-20px] top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full hover:scale-110 transition-all border border-gray-200"
        >
          <ChevronLeft size={28} className="text-[#294b3c]" />
        </button>
      )}

      {showArrows && canScrollRight && (
        <button
          onClick={scrollNext}
          className="absolute right-0 md:right-[-20px] top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full hover:scale-110 transition-all border border-gray-200"
        >
          <ChevronRight size={28} className="text-[#294b3c]" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={checkScroll}
      >
        <div className="flex gap-5 py-8 justify-start">
          {cohorts.map((cohort) => (
            <div
              key={cohort.cohort_id}
              className="snap-center flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[380px]"
            >
              <OfferCard cohort={cohort} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

OfferCarousel.displayName = "OfferCarousel";
export default OfferCarousel;