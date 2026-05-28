// src/components/Programs/ProgramCard.tsx
import { Link } from "react-router-dom";
import type { ProgramBase } from "../../data/program_base";

interface ProgramCardProps {
  program: ProgramBase & { [key: string]: unknown };
  detailPath: string;
  isWebinar?: boolean;
  showFees?: boolean;
}

const ProgramCard = ({
  program,
  detailPath,
  isWebinar = false,
  showFees = false,
}: ProgramCardProps) => {
  if (!program?.title) return null;

  const tagLabel = program.program_type.charAt(0).toUpperCase() + program.program_type.slice(1).toLowerCase();

  // Fix: Use correct skill tags field with fallback
  const skillTags = program.program_card_skill_tags || [];

  return (
    <Link
      to={detailPath}
      className="block group w-full max-w-[380px]"
      aria-label={`${program.title} — ${tagLabel}, starts ${program.startDate}`}
    >
      <article className="bg-[#f6f5ec] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-transparent hover:border-[#294b3c]">

        {/* Thumbnail */}
        <div className="h-48 overflow-hidden bg-[#a5b6ae]">
          <img
            src={program.imageSrc}
            alt={`${program.title} — v18hub ${tagLabel}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width={380}
            height={192}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/Images/placeholder.png";
            }}
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* Tag pill */}
          <span className="inline-block bg-[#546f61] text-[#f6f5ec] text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
            {tagLabel}
          </span>

          <h3 className="text-xl font-bold text-[#294b3c] mb-2 line-clamp-2 min-h-[3.5rem]">
            {program.title}
          </h3>

          {program.short_description && (
            <p className="text-sm text-[#546f61] mb-3 line-clamp-2 leading-relaxed">
              {program.short_description}
            </p>
          )}

          <p className="text-sm text-[#294b3c] mb-1">
            <strong>{isWebinar ? "Date & Time:" : "Start Date:"}</strong>{" "}
            {program.startDate || "TBA"}
          </p>

          <p className="text-sm text-[#294b3c] mb-2">
            <strong>Duration:</strong> {program.duration || "TBA"}
          </p>

          {skillTags?.length > 0 && skillTags[0] !== "" && (
            <div className="flex flex-wrap gap-1 mb-3" aria-label="Skills covered">
              {skillTags.slice(0, 3).map((skill: string, si: number) => (
                <span
                  key={si}
                  className="text-xs bg-[#a5b6ae] text-[#294b3c] px-2 py-0.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {showFees && program.fees && program.fees > 0 && (
            <p className="text-base font-bold text-[#6A1F1B] mb-2">
              ₹{(program.fees as number).toLocaleString("en-IN")}
            </p>
          )}

          <div className="mt-auto flex gap-3 justify-center pt-2">
            <span className="px-5 py-2 bg-[#546f61] hover:bg-[#294b3c] text-[#f6f5ec] rounded-lg text-sm font-medium transition-colors cursor-pointer">
              Know More
            </span>
            {program.is_approved && (
              <span className="px-5 py-2 border-2 border-[#546f61] text-[#546f61] hover:bg-[#a5b6ae] rounded-lg text-sm font-medium transition-colors cursor-pointer">
                {isWebinar ? "Register Free" : "Enroll Now"}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProgramCard;