// utils/custom/offer-carousel.tsx — ARROWS ONLY IF >3 COHORTS
import { useEffect, useRef, useState, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for routing

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

interface OfferCarouselProps {
  cohorts: Cohort[];
}

const OfferCard = memo(({ cohort }: { cohort: Cohort }) => {
  return (
    <div className="relative group flex-shrink-0 w-full sm:w-80 lg:w-96">
      {/* Wrap the entire card in a Link to make it clickable */}
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

            {/* Centered Button */}
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

const OfferCarousel = ({ cohorts }: OfferCarouselProps) => {
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
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [cohorts]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.9;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const isScrollable = cohorts.length > 3;

  return (
    <div className="relative h-[620px] flex items-center justify-center bg-white">
      {/* ARROWS ONLY FOR 4+ */}
      {isScrollable && canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-40 
                     bg-white shadow-2xl rounded-full p-5 hover:scale-110 
                     transition-all duration-300 border-4 border-gray-100"
          aria-label="Previous"
        >
          <ChevronLeft size={48} className="text-[#294b3c]" />
        </button>
      )}

      {isScrollable && canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 
                     bg-white shadow-2xl rounded-full p-5 hover:scale-110 
                     transition-all duration-300 border-4 border-gray-100"
          aria-label="Next"
        >
          <ChevronRight size={48} className="text-[#294b3c]" />
        </button>
      )}

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className={`w-full ${
          isScrollable
            ? "overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 lg:px-16"
            : "overflow-hidden"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={isScrollable ? checkScrollButtons : undefined}
      >
        <div
          className={`flex py-10 ${
            isScrollable
              ? "gap-10 lg:gap-16 min-w-max"
              : "gap-8 lg:gap-12 justify-center"
          }`}
        >
          {cohorts.map((cohort, index) => (
            <div
              key={cohort.cohort_id}
              className={`snap-center flex-shrink-0 w-full sm:w-80 lg:w-90 ${
                !isScrollable && index === 0 ? "ml-8 lg:ml-16" : ""
              } ${
                !isScrollable && index === cohorts.length - 1 ? "mr-8 lg:mr-16" : ""
              }`}
            >
              <OfferCard cohort={cohort} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(OfferCarousel);