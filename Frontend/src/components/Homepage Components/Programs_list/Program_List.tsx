// Program_List.tsx — UPDATED with Applied Cohorts + formatting
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "../../animations/Scroll_Animation"; // Adjust path if needed

interface Program {
  type_of: string;
  slogan: string | JSX.Element; // Allow JSX for richer formatting
  href: string;
}

const Program_List = () => {
  const [hover_selected, setHover_selected] = useState<string | null>(null);

  const Programs_List: Program[] = [
    {
      type_of: "Industry Cohorts",
      slogan: (
        <>
          Cohorts built in{" "}
          <strong className="font-bold lg:text-xl">
            collaboration with industry partners or startups
          </strong>
          . Learners work on partner-driven datasets, constraints, and workflows, closely mirroring real-world engineering environments. The focus is on engineering depth, system design, deployment-ready thinking and{" "}
          <strong className="font-bold lg:text-xl">
            stands out strongly on your portfolio.
            <br />
            Industry Cohorts are priced based on depth, duration, and collaboration.
          </strong>
        </>
      ),
      href: "/explore-cohorts#industry-cohorts",
    },
    {
      type_of: "Applied Cohorts",
      slogan: (
        <>
          Production-oriented cohorts where learners{" "}
          <strong className="font-bold lg:text-xl">
            build complete, end-to-end AI systems using real datasets
          </strong>{" "}
          and real problem statements. Strong emphasis on system design, engineering depth, and deployment-ready thinking. Each cohort culminates in a production-style project that{" "}
          <strong className="font-bold lg:text-xl">
            significantly strengthens your portfolio
          </strong>{" "}
          without direct industry collaboration.{" "}
          <br />
          <strong className="font-bold lg:text-xl">
            Applied Cohorts are priced based on depth, duration, and collaboration.
          </strong>
        </>
      ),
      href: "/explore-cohorts#applied-cohorts",
    },
    {
      type_of: "Foundational Cohorts",
      slogan: (
        <>
          Designed to help learners to{" "}
          <strong className="font-bold lg:text-xl">
            build confidence and learn how to build real AI systems
          </strong>
          . Short, guided, hands-on programs using realistic datasets. No industry partner involved. Each cohort results in a completed mini-project you can{" "}
          <strong className="font-bold lg:text-xl">
            confidently add to your portfolio
          </strong>.
          <br />
          <strong className="font-bold lg:text-xl">
            👉 Foundational Cohorts have a fixed, affordable price and fully adjustable 
          </strong>
          {" "}on upgrading to an Applied or Industry Cohort.
          <br />
          👉 If a learner is unable to keep up within the first week of the Foundational Cohort,{" "}
          <strong className="font-bold lg:text-xl">
            the full fees will be refunded.
          </strong>
        </>
      ),
      href: "/explore-cohorts#foundational-cohorts",
    },
    {
      type_of: "Webinars",
      slogan: (
        <>
          Quick, interactive sessions (2-3 hours) to {" "}
          <strong className="font-bold lg:text-xl">
            spark awareness, simplify concepts, and introduce 
          </strong>
          you to emerging technologies.
        </>
      ),
      href: "/explore-cohorts#webinars",
    },
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

        {/* Program Cards */}
        <div className="space-y-6 lg:space-y-8 mt-10">
          {Programs_List.map((each, index) => (
            <ScrollAnimation key={each.type_of} delay={0.15 + index * 0.08}>
              <Link
                to={each.href}
                onMouseEnter={() => setHover_selected(each.type_of)}
                onMouseLeave={() => setHover_selected(null)}
                className={`
                  block rounded-2xl py-6 px-4 sm:px-6 lg:py-8 lg:px-10 
                  transition-all duration-300 active:scale-95
                  shadow-sm shadow-[#6A1F1B]/30 hover:shadow-xl
                  ${hover_selected === each.type_of 
                    ? "lg:bg-[#294b3c] lg:text-[#f4f2ee] lg:scale-[1.03] lg:shadow-2xl" 
                    : "bg-white"
                  }
                `}
              >
                <div className="flex flex-col gap-4 text-lg sm:text-xl">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-medium flex justify-between items-center">
                    <span
                      className={`
                        transition-colors duration-300
                        ${hover_selected === each.type_of 
                          ? "text-[#f4f2ee]" 
                          : "text-[#294b3c]"
                        }
                      `}
                    >
                      {each.type_of}
                    </span>
                    <ArrowRight
                      size={44}
                      className={`
                        rounded-full transition-colors duration-300 flex-shrink-0
                        ${hover_selected === each.type_of
                          ? "lg:text-[#f4f2ee]"
                          : "lg:text-transparent sm:text-[#294b3c]"
                        }
                      `}
                    />
                  </div>

                  <div
                    className={`
                      font-normal leading-relaxed
                      ${hover_selected === each.type_of 
                        ? "lg:text-[#f4f2ee]" 
                        : "text-[#546f61]"
                      }
                    `}
                  >
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