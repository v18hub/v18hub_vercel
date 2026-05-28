// src/components/Mentors/MentorCard.tsx
import { useState } from "react";

export type Mentor = {
  id: string;
  name: string;
  role: string;           // e.g. "Lead Mentor", "Mentor"
  title: string;          // Professional title
  image: string;
  bio: string;
  experience: string;
  linkedin?: string;
};

export const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  const [open, setOpen] = useState(false);

  // Split bio for drawer
  const bioParagraphs = mentor.bio
    .split(/\n\n+/)
    .map((para) => para.trim())
    .filter(Boolean);

  return (
    <>
      {/* ── Compact Main Card ── */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#a5b6ae] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#546f61]"
      >
        {/* Image */}
        <div className="h-64 overflow-hidden bg-[#a5b6ae]">
          <img
            src={mentor.image}
            alt={mentor.name}
            loading="lazy"
            width={400}
            height={256}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/Images/mentors/placeholder.jpg";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#546f61] bg-[#f6f5ec] border border-[#a5b6ae] px-2.5 py-0.5 rounded-full mb-3">
            {mentor.role}
          </span>

          <h3 className="text-xl font-bold text-[#294b3c] leading-tight mb-1">{mentor.name}</h3>
          <p className="text-sm text-[#546f61] font-medium mb-4">{mentor.title}</p>

          <p className="text-sm text-[#546f61] italic mb-5 line-clamp-3">
            {mentor.experience}
          </p>

          {/* LinkedIn */}
          {mentor.linkedin && mentor.linkedin !== "#" && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-[#294b3c] hover:text-[#6A1F1B] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          )}
        </div>
      </div>

      {/* ── Full Drawer ── */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f6f5ec] rounded-t-3xl shadow-2xl max-h-[88vh] overflow-y-auto">
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-11 h-1.5 rounded-full bg-[#a5b6ae]" />
            </div>

            <div className="p-6 md:p-10 max-w-2xl mx-auto relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-2xl text-[#546f61] hover:text-[#294b3c]"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex gap-6 items-start mb-8">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/Images/mentors/placeholder.jpg";
                  }}
                />
                <div>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#546f61] bg-white border border-[#a5b6ae] px-3 py-1 rounded-full mb-2">
                    {mentor.role}
                  </span>
                  <h2 className="text-3xl font-bold text-[#294b3c]">{mentor.name}</h2>
                  <p className="text-lg text-[#546f61]">{mentor.title}</p>
                </div>
              </div>

              {/* Full Bio */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-3">About</p>
                <div className="text-[#294b3c] leading-relaxed text-[15.5px] space-y-4">
                  {bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#546f61] mb-2">Experience</p>
                <p className="text-[#294b3c]">{mentor.experience}</p>
              </div>

              {/* LinkedIn Button */}
              {mentor.linkedin && mentor.linkedin !== "#" && (
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#294b3c] text-[#f6f5ec] rounded-2xl font-semibold hover:bg-[#1e3830] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect with {mentor.name.split(" ")[0]} on LinkedIn
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};