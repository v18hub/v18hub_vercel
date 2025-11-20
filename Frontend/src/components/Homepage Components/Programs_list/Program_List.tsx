// Program_List.tsx — FINAL & COMPLETE
import { Link } from "react-router-dom";
import { useState } from "react"
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "../../animations/Scroll_Animation"; // Adjust path if needed

interface Program {
  type_of: string;
  slogan: string;
  href: string;
}

const Program_List = () => {
  const [hover_selected, setHover_selected] = useState<string | null>(null);

  const Programs_List: Program[] = [
    {
      type_of: "Industry Cohorts",
      slogan: "Work on live use cases from industry partners. Solve real problems, build prototypes, and gain practical, job-ready experience.",
      href: "/explore-cohorts#industry-cohorts"
    },
    {
      type_of: "Foundational Cohorts",
      slogan: "Build your fundamentals with real datasets, step by step. Designed for beginners to gain confidence in AI and data skills.",
      href: "/explore-cohorts#foundational-cohorts"
    },
    {
      type_of: "Webinars",
      slogan: "Quick, interactive sessions (2-3 hours) to spark awareness, simplify concepts, and introduce you to emerging technologies.",
      href: "/explore-cohorts#webinars"
    }
  ];

  return (
    <section className="bg-[#f6f5ec] py-20 pb-20">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-[75px] pt-10 pb-5">
        {/* Title */}
        <ScrollAnimation delay={0.1}>
          <h3 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap">
            Programs
          </h3>
        </ScrollAnimation>

        {/* Program Cards — EXACT ORIGINAL DESIGN + ORANGE SHADOW */}
        <div className="space-y-4">
          {Programs_List.map((each, index) => (
            <ScrollAnimation key={each.type_of} delay={0.15 + index * 0.08}>
              <Link
                to={each.href}
                onMouseEnter={() => setHover_selected(each.type_of)}
                onMouseLeave={() => setHover_selected(null)}
                className={`
                  block rounded-2xl py-5 px-3 transition-transform duration-300 active:scale-95
                  shadow-sm shadow-[#ff751f]
                  lg:m-12
                  ${hover_selected === each.type_of 
                    ? "lg:bg-[#294b3c] lg:text-[#f4f2ee] lg:scale-105 lg:px-8" 
                    : ""
                  }
                `}
              >
                <div className="flex flex-col gap-3 sm:text-xl">
                  <div className="lg:text-3xl sm:text-2xl font-[450] flex justify-between items-center">
                    <span className={`
                      transition-colors duration-300
                      ${hover_selected === each.type_of 
                        ? "text-[#f4f2ee]" 
                        : "text-[#294b3c]"
                      }
                    `}>
                      {each.type_of}
                    </span>
                    <ArrowRight
                      size={40}
                      className={`
                        rounded-full transition-colors duration-300
                        ${hover_selected === each.type_of
                          ? "lg:text-[#f4f2ee]"
                          : "lg:text-transparent sm:text-[#f4f2ee]"
                        }
                      `}
                    />
                  </div>
                  <div className={`
                    font-[400] sm:text-[1rem] lg:text-[1.2rem] opacity-90 transition-colors duration-300
                    ${hover_selected === each.type_of 
                      ? "lg:text-[#f4f2ee]" 
                      : "lg:text-[#546f61]"
                    }
                  `}>
                    {each.slogan}
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program_List;