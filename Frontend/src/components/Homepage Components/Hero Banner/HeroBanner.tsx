// HeroBanner.tsx
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
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Sync height perfectly
  useEffect(() => {
    const syncHeight = () => {
      if (stepsRef.current) {
        setVideoHeight(stepsRef.current.offsetHeight);
      }
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="flex flex-col font-open-sans mx-[10px]">
      {/* HERO TOP */}
      <div className="mb-[10vh]">
        <ScrollAnimation delay={0.2}>
          <div className="h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[20rem] text-[#294b3c] font-[300] text-[6rem] sm:text-[5rem] md:text-[10rem] lg:text-[12rem] flex justify-center items-center font-roboto px-4 lg:mx-[75px]">
            v18hub
          </div>
        </ScrollAnimation>

        <div className="flex flex-col text-center lg:mx-[75px] mb-[5vh]">
          <ScrollAnimation delay={0.3}>
            <div className="text-[1rem] sm:text-[2rem] font-[600] text-[#294b3c]">
              Knowledge grows only when put in ACTION
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="text-[#546f61] text-center font-[550] text-lg sm:text-xl mt-3 max-w-5xl mx-auto px-4 leading-relaxed">
              India’s only project-based learning platform where industry partners, educators, and mentors come together to help learners solve real-world problems with real guidance.
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation delay={0.6}>
          <div className="px-4 lg:mx-[75px] flex justify-center">
            <Link
              to="/explore-cohorts"
              className="transition-transform p-3 w-full justify-center items-center sm:w-3/4 lg:w-1/2 rounded-lg bg-[#294b3c] hover:bg-[#a5b6ae] text-[#f4f2ee] active:scale-95 font-medium"
            >
              <button className="w-full">Get Started</button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      {/* HOW IT WORKS – ULTRA-TIGHT SPACING (NO GAP) */}
      <div className="px-4 lg:px-[75px] py-16 lg:py-20 bg-gradient-to-b from-white to-[#f4f2ee]">
        <div className="max-w-7xl mx-auto">

          {/* HEADER – TIGHT TO CONTENT */}
          <div className="mb-8 lg:mb-10"> {/* ← Reduced from mb-16 */}
            <ScrollAnimation delay={0.1}>
              <h3 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap">
                How it works?
              </h3>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <p className="mt-3 lg:mt-4 font-medium text-lg sm:text-xl text-[#294b3c]/80 leading-relaxed max-w-4xl">
                At v18hub, learning starts with real-world challenges. We bring together learners, educators, mentors, and industry partners to collaborate on hands-on projects that turn knowledge into action.
              </p>
            </ScrollAnimation>
          </div>

          {/* GRID – NO EXTRA GAP */}
          <ScrollAnimation delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* LEFT: 4 Steps */}
              <div ref={stepsRef} className="space-y-6 lg:space-y-7">
                {Object.values(HiW_items).map((each) => (
                  <div
                    key={each.rank}
                    className="relative bg-white rounded-2xl border-2 border-[#546f61]/10 p-6 hover:border-[#294b3c]/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -top-3 -left-3 bg-[#D8D5C5] text-[#294b3c] font-bold text-xl rounded-full h-12 w-12 flex items-center justify-center shadow-md">
                      {each.rank}
                    </div>
                    <h4 className="font-semibold text-xl text-[#546f61] mb-3 pr-10">{each.title}</h4>
                    <p className="text-[#546f61]/75 text-base leading-relaxed">{each.desc}</p>
                  </div>
                ))}
              </div>

              {/* RIGHT: Video */}
              <div className="flex items-center justify-center">
                <div
                  ref={videoContainerRef}
                  className="w-full max-w-2xl transition-all duration-500 ease-out"
                  style={{
                    height: videoHeight || "auto",
                    minHeight: videoHeight ? undefined : "500px",
                  }}
                >
                  <div className="relative h-full rounded-3xl overflow-hidden bg-[#294b3c]">
                    <div className="absolute inset-0 bg-[#a5b6ae]/30 rounded-3xl blur-3xl -z-10" />

                    {isLoading && !hasError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 z-20">
                        <div className="w-12 h-12 border-4 border-[#a5b6ae] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}

                    {hasError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-20 p-8">
                        <p className="text-gray-600 mb-4">Video failed to load</p>
                        <button onClick={() => { setHasError(false); setIsLoading(true); }} className="px-6 py-3 bg-[#a5b6ae] text-white rounded-lg hover:bg-[#25473A]">
                          Retry
                        </button>
                      </div>
                    )}

                    <video
                      src="/Video/HomePage/How v18hub works_canva.mp4"
                      poster="/images/video-poster.jpg"
                      muted
                      controls
                      loop
                      playsInline
                      preload="metadata"
                      autoPlay={!prefersReducedMotion}
                      className="w-full h-full object-contain"
                      style={{ background: "#a5b6ae" }}
                      onLoadStart={() => setIsLoading(true)}
                      onCanPlay={() => setIsLoading(false)}
                      onError={() => { setIsLoading(false); setHasError(true); }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;