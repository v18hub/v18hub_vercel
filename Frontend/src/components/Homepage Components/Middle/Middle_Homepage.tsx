// Middle_Homepage.tsx — ONLY YOUR REQUESTED CHANGES
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "../../animations/Scroll_Animation"; // ← Make sure path is correct

const Middle_Homepage = () => {
  const [hover_selected, setHover_selected] = useState<string | null>(null);

  const types_of_users = [
    {
      type: "Learners",
      title: "AS A LEARNER",
      subtext:
        "Don't just learn - build. Solve real-world problems, develop practical skills, and transform yourself from industry-ready to genuinely tech-ready.",
      button1: "Start Learning",
      registration_href: "/registration/learner",
      knowMore_href: "/ourcommunity/learners"
    },
    {
      type: "Mentors",
      title: "AS A MENTOR",
      subtext:
        "Guide. Inspire. Shape the future. Empower learners with your expertise while staying connected to innovation.",
      button1: "Mentor with Us",
      registration_href: "/registration/mentor",
      knowMore_href: "/ourcommunity/mentors"
    },
    {
      type: "Educators",
      title: "AS A EDUCATOR",
      subtext:
        "Elevate your curriculum beyond the textbook. Connect your students with hands-on projects and track their growth in a meaningful new way.",
      button1: "Join as an Educator",
      registration_href: "/registration/educator",
      knowMore_href: "/ourcommunity/educators"
    },
    {
      type: "Industry Partner",
      title: "AS A INDUSTRY PARTNER",
      subtext:
        "Turn challenges into opportunities. Share real use-cases, get fresh ideas, and co-create with the next generation of passionate learners.",
      button1: "Become a Partner",
      registration_href: "/registration/industry_partner",
      knowMore_href: "/ourcommunity/industry-partners"
    },
  ];

    const [hover_selected_data, sethover_selected_data] = useState(types_of_users[0]);

    useEffect(() => {
        if (hover_selected) {
            const found = types_of_users.find((user) => user.type === hover_selected)
            if (found) {
                sethover_selected_data(found);
            }
            if (import.meta.env.DEV) {}
                console.log(found);
            }
    }, [hover_selected])

  return (
    <div className="flex flex-col font-open-sans w-full">
      {/* Main Section */}
      <div className="bg-[#a5b6ae] py-[50px] flex justify-center items-center lg:h-[750px]">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl px-4 lg:gap-36">
          {/* Left panel */}
          <div className="w-full lg:max-w-[530px] flex flex-col gap-8 items-center text-center lg:text-left">
            <ScrollAnimation delay={0.1}>
              <div className="text-[#6A1F1B] text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap">
                FIND YOUR PLACE IN OUR{" "}
                <span className="text-[#294b3c] font-caveat text-5xl sm:text-6xl lg:text-7xl leading-tight">
                  ecosystem
                </span>
              </div>
            </ScrollAnimation>

            {/* INCREASED SPACE + SMALLER BUTTONS + ANIMATED */}
            <ScrollAnimation delay={0.2}>
              <div className="mt-12 lg:mt-20 lg:flex flex-col gap-3 hidden">
                <div className="text-xl text-[#294b3c] sm:text-2xl font-medium">
                  {hover_selected_data.title}
                </div>
                <div className="text-sm text-[#294b3c] sm:text-base leading-relaxed text-justify">
                  {hover_selected_data.subtext}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <Link
                    to={hover_selected_data.knowMore_href}
                    className="transition-transform flex items-center justify-center px-3 py-2.5 text-sm rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium text-center"
                  >
                    Know More
                  </Link>
                  {/* <Link
                    to={hover_selected_data.registration_href}
                    className="transition-transform flex items-center justify-center px-3 py-2.5 text-sm rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium text-center"
                  >
                    {hover_selected_data.button1}
                  </Link> */}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right panel */}
          <div className="w-full lg:max-w-[530px] flex flex-col gap-18">
            {types_of_users.map((each, index) => (
              <ScrollAnimation key={each.type} delay={0.15 + index * 0.05}>
                <Link to={each.knowMore_href}>
                  <div
                    onMouseEnter={() => setHover_selected(each.type)}
                    onMouseLeave={() => setHover_selected(null)}
                    className={`active:scale-95 cursor-pointer flex flex-col gap-4 sm:gap-6 transition-transform ${
                      hover_selected === each.type ? "scale-105" : ""
                    }`}
                  >
                    <div
                      className={`flex justify-between items-center text-xl sm:text-2xl lg:text-3xl transition-colors duration-300 ${
                        hover_selected === each.type ? "text-[#25473A]" : "text-white"
                      }`}
                    >
                      <div>{each.type}</div>
                      <ArrowRight
                        size={40}
                        className={`p-2 rounded-full transition-colors duration-300 ${
                          hover_selected === each.type
                            ? "bg-[#25473A] text-white"
                            : "bg-transparent text-white"
                        }`}
                      />
                    </div>
                    <div
                      className={`h-0.5 transition-colors duration-300 ${
                        hover_selected === each.type ? "bg-[#25473A]" : "bg-white"
                      }`}
                    />
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle_Homepage;