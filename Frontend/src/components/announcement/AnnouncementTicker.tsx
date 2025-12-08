// src/components/AnnouncementTicker.tsx
import { useLocation } from "react-router-dom"; // ← Better than window.location

const AnnouncementTicker = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/" || location.pathname === "/home";

  // Remove the isMounted state — not needed here since we're using React Router
  if (!isLandingPage) return null;

  return (
    <div className="bg-gradient-to-r from-[#294b3c] to-[#537367] text-[#f6f5ec] py-3 overflow-hidden relative">
      <div className="animate-marquee">
        <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide mx-8">
          Celebrating success - GHCI 2025 Runner-Up title secured by our learners!
        </span>
        <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide mx-8">
          Celebrating success - GHCI 2025 Runner-Up title secured by our learners!
        </span>
      </div>

      {/* Duplicate layer for seamless loop */}
      <div className="absolute top-0 animate-marquee2">
        <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide mx-8">
          Celebrating success - GHCI 2025 Runner-Up title secured by our learners!
        </span>
        <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide mx-8">
          Celebrating success - GHCI 2025 Runner-Up title secured by our learners!
        </span>
      </div>
    </div>
  );
};

export default AnnouncementTicker;