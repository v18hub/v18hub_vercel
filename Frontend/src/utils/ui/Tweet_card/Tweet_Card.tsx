export interface TweetCardProps {
  name: string;
  username: string;
  text: string;
  firstLetter: string; // First letter of NAME
  className?: string;
}

export const Tweet_card = ({
  name,
  username,
  text,
  firstLetter,
  className = "",
}: TweetCardProps) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-center p-6 rounded-2xl shadow-lg
        bg-[#294b3c] text-[#f6f5ec]
        min-h-[200px] w-full
        transition-transform duration-300
        ${className}
      `}
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-3 mb-3 w-full">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
          {firstLetter}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-lg leading-tight truncate">{name}</p>
          <p className="text-sm opacity-80 leading-tight truncate">@{username}</p>
        </div>
      </div>

      {/* Testimonial Text – 4–5 lines, centered */}
      <p className="text-sm leading-relaxed line-clamp-5 text-center w-full">
        {text}
      </p>
    </div>
  );
};