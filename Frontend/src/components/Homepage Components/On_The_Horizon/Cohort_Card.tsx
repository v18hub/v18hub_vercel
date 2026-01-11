// CohortCard.tsx
import { Link } from "react-router-dom";

export function CohortCard({ cohort }: { cohort: any }) {
  const tagLower = cohort.tag?.toLowerCase() || "";
  const isFoundational = tagLower === "foundational";

  // Clean tag for display (capitalize first letter)
  const displayTag = cohort.tag 
    ? cohort.tag.charAt(0).toUpperCase() + cohort.tag.slice(1).toLowerCase()
    : "Cohort";

  return (
    <Link to={`/cohorts/${cohort.cohort_id}`} className="block h-full">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden">
          <img
            src={cohort.imageSrc}
            alt={cohort.title || cohort.cohortTitle || "Cohort image"}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#294b3c] mb-3 line-clamp-2">
            {cohort.title || cohort.cohortTitle || "Cohort Title"}
          </h3>

          {/* Short description */}
          {cohort.short_description && (
            <p className="text-sm sm:text-base text-gray-600 mb-5 line-clamp-3">
              {cohort.short_description}
            </p>
          )}

          {/* Date + Duration + Price (only for foundational) */}
          <div className="mt-auto space-y-2 mb-6 text-sm sm:text-base">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-700">
              <div>
                <span className="font-medium">Starts:</span> {cohort.startDate}
              </div>
              <div>
                <span className="font-medium">Duration:</span> {cohort.duration}
              </div>
            </div>

            {isFoundational && cohort.fees && (
              <div className="font-bold text-green-700 text-base sm:text-lg">
                Price: ₹{cohort.fees.toLocaleString("en-IN")}
              </div>
            )}
          </div>

          {/* Cohort Type + Enroll Button */}
          <div className="mt-auto">
            <div className="w-full py-3 px-5 bg-[#6A1F1B] text-[#f6f5ec] font-medium text-base sm:text-lg text-center rounded-lg mb-3">
              {displayTag} Cohort
            </div>

            <button className="w-full py-3 px-6 bg-[#294b3c] hover:bg-[#1e3a2c] text-white font-medium rounded-lg transition-colors duration-200">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}