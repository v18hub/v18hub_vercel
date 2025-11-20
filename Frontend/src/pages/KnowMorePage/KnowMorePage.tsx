import { Know_More_Educator } from "../../components/Know_More_Pages/Know_More_Educator/Know_More_Educator";
import { Know_More_Learner } from "../../components/Know_More_Pages/Know_More_Learner/Know_More_Learner";
import { Know_More_IndustryPartner } from "../../components/Know_More_Pages/Know_More_Industry_Partner/Know_More_Industry_Partner";
import { Know_More_Mentor } from "../../components/Know_More_Pages/Know_More_Mentor/Know_More_Mentor";
import { useLocation, Link } from "react-router-dom";

const KnowMorePage = () => {
  const location = useLocation();

  const Know_More_Data: any = (() => {
    switch (location.pathname) {
      case "/ourcommunity/learners":
        return { ...Know_More_Learner, role: "Learners" };
      case "/ourcommunity/educators":
        return { ...Know_More_Educator, role: "Educators" };
      case "/ourcommunity/mentors":
        return { ...Know_More_Mentor, role: "Mentors" };
      case "/ourcommunity/industry-partners":
        return { ...Know_More_IndustryPartner, role: "Industry Partners" };
      default:
        return null;
    }
  })();

  if (!Know_More_Data) {
    return (
      <div className="text-center py-20 text-gray-600">
        Page data not found.
      </div>
    );
  }

  const cta = Know_More_Data.cta?.[0];

  return (
    <div className="font-open-sans bg-[#f4f2ee] min-h-screen w-full flex justify-center py-16">

      {/* SAME WIDTH CONTAINER */}
      <div className="w-full max-w-6xl px-6">

        {/* BIG ROLE HEADING */}
        <h1 className="text-center text-5xl md:text-5xl font-bold text-[#294b3c] mb-12">
          {Know_More_Data.role}
        </h1>

        {/* TOP TEXT — SAME WRAP WIDTH */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-[#546f61]">
            {Know_More_Data.title}
          </p>
        </div>

        {/* EXACT SAME "HOW DOES IT WORK?" SECTION */}
        <div className="font-medium text-3xl md:text-4xl text-[#294b3c] text-center mb-12">
          How does it work?
        </div>

        {/* ORIGINAL LAYOUT — UNCHANGED */}
        <div className="flex flex-col gap-12 justify-center items-center">
          {Know_More_Data.how_does_it_work.map((each: any, i: number) => (
            <div
              key={i}
              className={`flex flex-col w-full md:flex-row items-center justify-between gap-8 rounded-xl py-8 transition-all duration-300 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image — same size */}
              <div className="h-[180px] w-[300px] sm:w-[20vw] sm:h-[15vw] bg-[#E6EAE7] flex items-center justify-center rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={each.img}
                  alt={each.inner_title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text — same alignment */}
              <div className={`flex-1 text-center ${i % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                <p className="font-semibold text-[#294b3c] text-xl sm:text-2xl mb-3">
                  {each.inner_title}
                </p>
                <p className="text-[#546f61] text-lg sm:text-xl leading-relaxed">
                  {each.inner_desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SAME CTA */}
        <div className="flex flex-wrap gap-5 justify-center items-center mt-16">
          {cta?.button1 && (
            <Link
              to={cta.button1.href}
              className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
            >
              {cta.button1.label}
            </Link>
          )}
          {cta?.button2 && (
            <Link
              to={cta.button2.href}
              className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
            >
              {cta.button2.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowMorePage;