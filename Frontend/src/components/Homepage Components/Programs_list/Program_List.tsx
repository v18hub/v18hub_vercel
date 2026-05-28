// Program_List.tsx — UPDATED with Applied Cohorts + formatting
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "../../animations/Scroll_Animation"; // Adjust path if needed

interface Program {
  type_of: string;
  slogan: string | React.JSX.Element; // Allow JSX for richer formatting
  href: string;
}

const Program_List = () => {
  const [hover_selected, setHover_selected] = useState<string | null>(null);

  const Programs_List: Program[] = [
    {
      type_of: "Workshops",
      slogan: (
        <>
          Workshops are{" "}
          <strong className="font-bold lg:text-xl">
            short-duration, beginner-friendly{" "}
          </strong>
          learning programs designed to help students explore new domains, build foundational understanding, and gain practical exposure through guided hands-on sessions. They focus on developing{" "}
          <strong className="font-bold lg:text-xl">
            awareness, curiosity, and core problem-solving skills{" "}
          </strong>
          that prepare learners for deeper technical learning paths.
        </>
      ),
      href: "/programs/workshops",
    },
    {
      type_of: "Bootcamps",
      slogan: (
        <>
          Bootcamps are{" "}
          <strong className="font-bold lg:text-xl">
            structured, intensive{" "}
          </strong>and,{" "}
          <strong className="font-bold lg:text-xl">
            hands-on{" "}
          </strong>
          learning programs designed to help learners building strong fundamentals in{" "}
          <strong className="font-bold lg:text-xl">
            ML, Deep Learning, and Generative AI.{" "}
          </strong>
          These programs prepare them with the concepts and practical skills needed to work on real-world applications confidently.
        </>
      ),
      href: "/programs/bootcamps",
    },
    {
      type_of: "Preview Cohorts",
      slogan: (
        <>
          Preview Cohorts are very short-duration experiences where learners{" "}
          <strong className="font-bold lg:text-xl">
             build a part of a real cohort.{" "}
          </strong>
          Help learners to understand the {" "}
          <strong className="font-bold lg:text-xl">
            cohort learning style and collaboration process,
          </strong> before committing to a full cohort program.
          <br />
          <strong className="font-bold lg:text-xl">
            👉 Preview Cohorts have a fixed, affordable prices and fully adjustable 
          </strong>
          {" "}on upgrading to Cohort program.
          <br />
          👉 If a learner is unable to keep up within the first week of the Preview Cohort,{" "}
          <strong className="font-bold lg:text-xl">
            the full fees will be refunded.
          </strong>
        </>
      ),
      href: "/programs/preview-cohorts",
    },
    {
      type_of: "Cohorts",
      slogan: (
        <>
          Cohorts are industry-oriented programs where learners{" "}
          <strong className="font-bold lg:text-xl">
            learn by building complete, end-to-end real AI solutions.
          </strong>{" "}
          Focused on <strong className="font-bold lg:text-xl">
            in-depth learning, practical implementation, teamwork, and hands-on problem solving.{" "}
          </strong>
          These programs put strong emphasis on system design, engineering depth, and deployment-ready thinking. Each cohort culminates in a production-style project that{" "}
          <strong className="font-bold lg:text-xl">
            significantly strengthens your portfolio.
          </strong>
        </>
      ),
      href: "/programs/cohorts",
    },
    {
      type_of: "Webinars",
      slogan: (
        <>
          Quick, interactive sessions normally of 1-2 hours to {" "}
          <strong className="font-bold lg:text-xl">
            spark awareness, simplify concepts, and introduce{" "}
          </strong>
          you to emerging technologies. Free to attend - the perfect starting point before choosing a deeper program.
        </>
      ),
      href: "/programs/webinars",
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