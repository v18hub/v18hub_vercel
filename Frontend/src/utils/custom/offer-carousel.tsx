// utils/custom/offer-carousel.tsx — FINAL MOBILE-OPTIMIZED VERSION
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
    <div className="relative group flex-shrink-0 w-full sm:w-80 lg:w-96">
      <Link to={`/cohort/${cohort.cohort_id}`} className="block h-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden flex-shrink-0">
            <img
              src={cohort.imageSrc}
              alt={cohort.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#526B61] text-white px-4 py-1.5 rounded-full text-sm font-bold">
              {cohort.tag}
            </div>
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#294b3c] mb-3 leading-tight">
                {cohort.title}
              </h3>
              <p className="text-[#294b3c] text-sm mb-6 line-clamp-3 leading-relaxed">
                {cohort.short_description}
              </p>

              <div className="flex justify-between text-sm mb-8">
                <div>
                  <p className="text-gray-600">Starts</p>
                  <p className="font-bold text-[#294b3c]">{cohort.startDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Duration</p>
                  <p className="font-bold text-[#294b3c]">{cohort.duration}</p>
                </div>
              </div>
            </div>

            {/* Enroll Button */}
            {cohort.is_approved && (
              <div className="flex justify-center">
                <button className="px-10 py-4 bg-[#526B61] hover:bg-[#294b3c] text-white rounded-2xl font-bold text-lg tracking-wide transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Enroll Now
                </button>
              </div>
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

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    const handleScroll = () => checkScrollButtons();

    container?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, [cohorts]);

  const scrollNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector(".card-item") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16; // matches gap-4
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const card = container.querySelector(".card-item") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  // Show arrows on mobile always if >1 card, on desktop only if >3
  const showArrows = cohorts.length > 1;
  const showDesktopArrowsOnlyWhenMany = cohorts.length > 3;

  return (
    <div className="relative h-[620px] flex items-center justify-center bg-white">
      {/* Arrows - Mobile: always if scrollable, Desktop: only when >3 */}
      {showArrows && (
        <>
          {canScrollLeft && (
            <button
              onClick={scrollPrev}
              className={`absolute left-2 lg:left-12 top-1/2 -translate-y-1/2 z-40 
                         bg-white shadow-2xl rounded-full p-4 hover:scale-110 
                         transition-all duration-300 border-4 border-gray-100
                         ${!showDesktopArrowsOnlyWhenMany ? "block" : "hidden lg:block"}`}
              aria-label="Previous"
            >
              <ChevronLeft size={36} className="text-[#294b3c]" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={scrollNext}
              className={`absolute right-2 lg:right-12 top-1/2 -translate-y-1/2 z-40 
                         bg-white shadow-2xl rounded-full p-4 hover:scale-110 
                         transition-all duration-300 border-4 border-gray-100
                         ${!showDesktopArrowsOnlyWhenMany ? "block" : "hidden lg:block"}`}
              aria-label="Next"
            >
              <ChevronRight size={36} className="text-[#294b3c]" />
            </button>
          )}
        </>
      )}

      {/* Scroll Container - Perfect Mobile Experience */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-4 lg:px-16"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={checkScrollButtons}
      >
        <div className="flex gap-4 lg:gap-16 py-10 min-w-max">
          {cohorts.map((cohort) => (
            <div
              key={cohort.cohort_id}
              className="card-item snap-center flex-shrink-0 w-[85vw] sm:w-80 lg:w-96"
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