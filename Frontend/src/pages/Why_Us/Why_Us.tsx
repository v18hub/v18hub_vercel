import { Link } from "react-router-dom";
// import { GraduationCap, Building2, Rocket,} from "lucide-react";

const Why_Us = () => {

  const steps = [
    {
      img: "/Images/forecasting_and_timseries.jpg",
      title: "Start with Real Problems",
      desc: "Each cohort is built around actual industry challenges or real-world data.",
    },
    {
      img: "/Images/partners_track_project.png",
      title: "Learn by Building.",
      desc: "Students begin hands-on work from Day 1 with weekly milestones and goals.",
    },
    {
      img: "/Images/mentoring.jpg",
      title: "Guided by Experts",
      desc: "Mentors from academia and industry provide continuous feedback and guidance.",
    },
    {
      img: "/Images/evaluation.png",
      title: "Evaluate & Showcase",
      desc: "Work is documented on GitHub, reviewed by mentors, and certified for outcomes.",
    },
  ];

  return (
    <div className="font-open-sans bg-[#f6f5ec] text-[#294b3c]">
      {/* SECTION 1 - HERO */}
      <section className="flex flex-col items-center justify-center text-center py-[8vh] px-6">

        <h2 className="text-4xl md:text-5xl font-semibold mb-3">
          Why v18hub?
        </h2>
        <p className="mt-12 text-[#294b3c] text-3xl font-semibold max-w-3xl mx-auto">
          Knowledge grows through DOING
        </p>
      </section>

      {/* SECTION 2 - WHAT WE DO */}
      <section className="py-[10vh] px-[5vw]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT - Overlapping images */}
          <div className="w-full md:w-[45%] flex items-center justify-center">
            <div className="relative w-[78vw] max-w-[52vh] h-[36vh] -mt-4 
                            md:w-[64vh] md:h-[44vh] md:-mt-20 
                            mx-auto">  {/* ← mx-auto prevents horizontal overflow */}

              {/* Main Image */}
              <div className="absolute inset-0 w-full h-full rounded-2xl hover:scale-105 shadow-lg overflow-hidden">
                <img
                  src="/Images/why_us_mentor.png"
                  alt="Track projects and progress"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Image – pulled in on mobile, dramatic on desktop */}
              <div className="absolute bottom-[-3rem] left-[-1rem] 
                              md:bottom-[-7rem] md:left-[-6rem] 
                              w-[26vh] h-[26vh] 
                              rounded-2xl shadow-xl overflow-hidden border-4 border-white 
                              hover:scale-105 transition-transform duration-300 z-10">
                <img
                  src="/Images/why_us_industry.png"
                  alt="Project dashboard preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT Text */}
          <div className="w-full md:w-[50%] text-[#294b3c]">
            {/* <h3 className="text-3xl md:text-4xl font-semibold mb-6">What We Do?</h3> */}
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-semibold">We are the only platform in India</span> creating such an ecosystem and 
              introducing <span className="font-semibold">project-based learning at this depth and scale - 
              connecting learners, mentors, educators, and industry through real-world problem solving.</span>
              <br /><br />
              At v18hub, we bring <span className="font-semibold">academia and industry closer</span> through a 
              <span className="font-semibold"> collaborative, project-based learning model.</span>
              <br /><br />
              v18hub is a <span className="font-semibold">cohort-based platform</span> where real problems - 
              <span className="font-semibold">either shared by industry partners and innovation-driven organizations 
              or derived from publicly available real-world challenges</span> - are turned into structured learning cohorts.
              <br /><br />
              Through collaborative, hands-on cohorts, <span className="font-semibold">students build end-to-end solutions, document their work like real engineers, </span>
              and graduate with portfolios that demonstrate practical skills - not just certificates.
              <br /><br />
              Our mission is to <span className="font-semibold">empower the next generation of AI talent with confidence, clarity, 
              and tech-ready capabilities.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HOW WE MAKE LEARNING REAL (2x2 GRID) */}
      <section className="bg-[#a5b6ae] py-[10vh] px-[5vw] text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-[#294b3c]">
          How We Make Learning Real
        </h3>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Square Image */}
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-[#294b3c] mb-3">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-base text-[#294b3c] leading-relaxed text-center">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[#294b3c] text-xl max-w-3xl mx-auto">
          This isn’t an internship. It's applied, project-based learning - structured, mentored, and measurable.
        </p>
      </section>


      {/* SECTION 4 - A WIN–WIN FOR EVERYONE */}
      <section className="py-[12vh] px-[5vw] text-center">
        <h3 className="text-3xl md:text-4xl font-semibold mb-14 text-[#294b3c]">
          A Win–Win for Everyone
        </h3>

        {/* Vertically stacked panels */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Learners",
              desc: "Gain hands-on experience, build projects, and understand real-world expectations.",
            },
            {
              title: "Educators",
              desc: "Make academic programs more practical and outcome-driven.",
            },
            {
              title: "Industry Partners",
              desc: "Engage with trained, motivated students ready to solve real problems.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`
                group relative p-10 rounded-2xl border-2 border-[#294b3c] 
                bg-transparent hover:bg-[#294b3c] transition-all duration-300 
                text-left flex flex-col
              `}
            >
              {/* Title */}
              <h4 className="text-3xl font-semibold text-[#6A1F1B] group-hover:text-[#f6f5ec] mb-4 transition-colors duration-300">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-base md:text-lg text-[#6A1F1B] group-hover:text-[#f6f5ec] leading-relaxed transition-colors duration-300">
                {card.desc}
              </p>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#294b3c] pointer-events-none transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-[#6A1F1B] font-semibold text-xl max-w-3xl mx-auto">
          Together, we’re building a continuous learning and innovation ecosystem.
        </p>
      </section>

      {/* SECTION 5 — BUILDING A SUSTAINABLE LEARNING COMMUNITY */}
      <section className="py-[12vh] px-[5vw] bg-[#a5b6ae] text-center">
        {/* TITLE — Centered on top */}
        <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-[#102820] max-w-4xl mx-auto">
          Building a Sustainable Learning Community
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

          {/* LEFT — Two images + vertical centering */}
          <div className="w-full md:w-[45%] flex flex-col items-end space-y-6">

            {/* First Image: Small, square, right-aligned */}
            <div className="w-32 h-32 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/Images/self sustainablity.webp"
                alt="Sustainable learning icon"
                className="w-full h-full object-contain bg-white p-4"
              />
            </div>

            {/* Second Image: Reduced size */}
            <div className="w-full flex justify-center">
              <div className="w-[36vh] h-[32vh] rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/Images/tracking_cohort.png"
                  alt="Team collaborating in modern office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Text: LEFT-ALIGNED + VERTICALLY CENTERED */}
          <div className="w-full md:w-[50%] flex items-center">
            <div className="text-left">
              <p className="text-base md:text-lg leading-relaxed text-[#294b3c]">
                At <strong className="font-bold">v18Hub</strong>, every cohort creates ripple effects. Students who complete a program often return as peer mentors, helping the next batches under expert supervision.
                <br /><br />
                Each cohort includes research-driven topics that encourage collaboration, exploration, and continuous learning.
                <br /><br />
                Over time, this creates a <strong className="font-bold">self-sustaining circle of innovation</strong> - learners mentoring learners, guided by educators and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA */}
      <section className="py-[10vh] text-center flex flex-col items-center justify-center gap-6">
        <h3 className="text-3xl md:text-4xl font-semibold mb-2">
          Join the Movement
        </h3>
        <p className="text-lg md:text-xl text-[#294b3c] max-w-3xl">
          Be part of the change in how India learns and builds. Whether you’re a
          learner, educator, mentor, or industry partner - v18hub is your space
          to collaborate, innovate, and grow.
        </p>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          <Link
            to="/explore-cohorts"
            className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
          >
            Explore Cohorts
          </Link>
          {/* <Link
            to="/registration/mentor"
            className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
          >
            Mentor With Us
          </Link>
          <Link
            to="/registration/industry_partner"
            className="inline-flex font-medium items-center rounded-lg bg-[#546f61] px-6 py-3 text-[#f6f5ec] justify-center hover:bg-[#294b3c] active:scale-95 transition-transform"
          >
            Join as a Partner
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default Why_Us;