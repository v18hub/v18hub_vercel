// utils/custom/offer-carousel.tsx — FINAL: NO TRUNCATION, MOBILE FULLY VISIBLE
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
  return (
    <div className="h-[560px] w-full flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
      <Link to={`/cohort/${cohort.cohort_id}`} className="flex flex-col h-full">

        {/* Image */}
        <div className="relative h-80 flex-shrink-0">
          <img
            src={cohort.imageSrc}
            alt={cohort.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 bg-[#526B61] text-white px-3 py-1 rounded-full text-xs font-bold">
            {cohort.tag}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#294b3c] mb-2 line-clamp-2 leading-tight">
              {cohort.title}
            </h3>
            <p className="text-[#294b3c] text-xs mb-3 line-clamp-3 leading-snug">
              {cohort.short_description}
            </p>

            <div className="flex justify-between text-xs mb-1">
              <div>
                <span className="text-gray-600 block">Starts</span>
                <span className="font-bold text-[#294b3c]">{cohort.startDate}</span>
              </div>
              <div className="text-right">
                <span className="text-gray-600 block">Duration</span>
                <span className="font-bold text-[#294b3c]">{cohort.duration}</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-1.5">
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
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const handler = () => checkScroll();
    window.addEventListener("resize", handler);
    scrollContainerRef.current?.addEventListener("scroll", handler);
    setTimeout(checkScroll, 100);

    return () => {
      window.removeEventListener("resize", handler);
      scrollContainerRef.current?.removeEventListener("scroll", handler);
    };
  }, [cohorts]);

  const scrollNext = () => scrollContainerRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  const scrollPrev = () => scrollContainerRef.current?.scrollBy({ left: -320, behavior: "smooth" });

  const total = cohorts.length;
  const showMobileArrows = total > 1;
  const showDesktopArrows = total > 3;

  return (
    <div className="relative">
      {/* Desktop Arrows */}
      {showDesktopArrows && (canScrollLeft || canScrollRight) && (
        <>
          {canScrollLeft && (
            <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-12 h-12 bg-white shadow-2xl rounded-full hover:scale-110 transition-all border border-gray-200">
              <ChevronLeft size={32} className="text-[#294b3c]" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center w-12 h-12 bg-white shadow-2xl rounded-full hover:scale-110 transition-all border border-gray-200">
              <ChevronRight size={32} className="text-[#294b3c]" />
            </button>
          )}
        </>
      )}

      {/* Mobile Arrows */}
      {showMobileArrows && !showDesktopArrows && (canScrollLeft || canScrollRight) && (
        <>
          {canScrollLeft && (
            <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-40 flex lg:hidden items-center justify-center w-10 h-10 bg-white shadow-xl rounded-full">
              <ChevronLeft size={28} className="text-[#294b3c]" />
            </button>
          )}
          {canScrollRight && (
            <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-40 flex lg:hidden items-center justify-center w-10 h-10 bg-white shadow-xl rounded-full">
              <ChevronRight size={28} className="text-[#294b3c]" />
            </button>
          )}
        </>
      )}

      {/* Scroll Container — THIS IS THE KEY FIX */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={checkScroll}
      >
        <div className="flex gap-5 px-4 py-8 min-w-max justify-center lg:justify-start">
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