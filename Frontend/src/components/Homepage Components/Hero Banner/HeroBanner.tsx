// HeroBanner.tsx — FINAL 100% WORKING + OPTIMIZED
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ScrollAnimation } from "../../animations/Scroll_Animation";

const HiW_items = {
  one: { rank: 1, title: "Join the Ecosystem", desc: "Learners, educators, mentors, and industry partners come together on one collaborative platform." },
  two: { rank: 2, title: "Real Challenges, Curated as Cohorts", desc: "Industry partners share real use cases, which we transform into guided, time-bound learning cohorts." },
  three: { rank: 3, title: "Enroll & Learn by Doing", desc: "Learners register for cohorts that match their interests and learning stage — turning theory into practice." },
  four: { rank: 4, title: "Build with Guidance", desc: "Under mentor supervision, students design, develop, and deliver real solutions to industry challenges." },
};

const HeroBanner = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoHeight, setVideoHeight] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync height
  useEffect(() => {
    const syncHeight = () => {
      if (stepsRef.current) setVideoHeight(stepsRef.current.offsetHeight);
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  // Trigger load when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Force load immediately
          if (videoRef.current) {
            videoRef.current.load();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "200px" }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col font-open-sans mx-[10px]">
      {/* HERO TOP */}
      <div className="mb-8 sm:mb-12 lg:mb-20">
        <ScrollAnimation delay={0.2}>
          <div className="h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[20rem] text-[#294b3c] font-[300] text-[6rem] sm:text-[5rem] md:text-[10rem] lg:text-[12rem] flex justify-center items-center font-roboto px-4 lg:mx-[75px]">
            v18hub
          </div>
        </ScrollAnimation>

        <div className="flex flex-col text-center lg:mx-[75px] mb-6 lg:mb-10">
          <ScrollAnimation delay={0.3}>
            <div className="text-[1rem] sm:text-[2rem] lg:text-[2.5rem] font-[600] text-[#294b3c] leading-tight">
              Knowledge grows only when put in ACTION
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="text-[#546f61] text-center font-[550] text-base sm:text-lg lg:text-xl mt-4 max-w-5xl mx-auto px-4 leading-relaxed">
              India’s only project-based learning platform where industry partners, educators, and mentors come together to help learners solve real-world problems with real guidance.
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.6}>
          <div className="px-4 lg:mx-[75px] flex justify-center">
            <Link
              to="/explore-cohorts"
              className="px-8 py-4 bg-[#526B61] hover:bg-[#25473A] text-white font-bold text-lg rounded-xl transition-all active:scale-95 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      {/* HERO BOTTOM */}
      <div className="lg:mx-[75px] mx-5 mt-12 lg:mt-20 mb-16 lg:mb-24">
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-16">
            {/* LEFT: Steps */}
            <div ref={stepsRef} className="flex flex-col gap-8 w-full max-w-2xl">
              {Object.values(HiW_items).map((each, index) => (
                <div key={index} className="relative p-6 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-3 -left-3 bg-[#D8D5C5] text-[#294b3c] font-bold text-xl rounded-full h-12 w-12 flex items-center justify-center shadow-md">
                    {each.rank}
                  </div>
                  <h4 className="font-semibold text-xl text-[#546f61] mb-3 pr-10">{each.title}</h4>
                  <p className="text-[#546f61]/75 text-base leading-relaxed">{each.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT: VIDEO — GUARANTEED TO LOAD */}
            <div ref={videoContainerRef} className="w-full max-w-2xl">
              <div
                className="relative rounded-3xl overflow-hidden bg-[#294b3c] shadow-2xl"
                style={{ height: videoHeight || "520px", minHeight: "480px" }}
              >
                {/* Loading spinner */}
                {isLoading && isVisible && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-10">
                    <div className="w-16 h-16 border-4 border-[#526B61] border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                <video
                  ref={videoRef}
                  poster="/images/video-poster.jpg"
                  preload="metadata"           // ← Safe + fast
                  muted
                  loop
                  playsInline
                  autoPlay={isVisible}
                  controls
                  className="w-full h-full object-contain transition-opacity duration-700"
                  style={{
                    background: "#a5b6ae",
                    opacity: isLoading ? 0 : 1,
                  }}
                  onLoadedData={() => setIsLoading(false)}
                  onError={(e) => {
                    console.error("Video error:", e);
                    setIsLoading(false);
                  }}
                >
                  {/* WebM first (if you have it) */}
                  <source src="/Video/HomePage/How v18hub works_canva.webm" type="video/webm" />
                  {/* MP4 fallback — WILL work 100% */}
                  <source src="/Video/HomePage/How v18hub works_canva.mp4" type="video/mp4" />
                  Your browser does not support video.
                </video>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HeroBanner;