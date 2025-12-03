// import { InputText } from 'primereact/inputtext';
import "./Our_Story.css";

const Our_Story = () => {

  return (
    <div className="bg-[#F6F5ED] w-full font-open-sans">

      {/* MAIN CONTAINER */}
      <div className="sm:mx-[75px] mx-5 flex flex-col gap-16">

        {/* TOP HEADING WITH SPACING */}
        <div className="pt-12 text-center">
          <h1 className="font-[400] text-xl sm:text-3xl text-[#294b3c]">
            A Project based learning platform connecting Industry Partners,<br className="hidden sm:block" /> Educators, Learners and Mentors to learn and solve the problems together.
          </h1>
        </div>

        {/* ====================== OUR STORY – WITH 4 MOCK IMAGES ====================== */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10 bg-[#F6F5ED] py-16 px-6 rounded-2xl">

          {/* LEFT: 4 MOCK IMAGE GRID (kept exactly as you provided) */}
          <div className="flex flex-col gap-5 w-full max-w-lg mt-16">
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Left tall image */}
              <div className="w-full sm:w-[60%] h-64 sm:h-80 rounded-2xl shadow-md overflow-hidden">
                <img
                  src="/Images/industry_powered_cohorts.png"
                  alt="Industry-powered cohorts"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two stacked smaller images */}
              <div className="flex flex-row sm:flex-col gap-5 w-full sm:w-[40%]">
                <div className="w-full h-32 sm:h-[8rem] rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/empower_students.png"
                    alt="Students building projects"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-32 sm:h-[8rem] rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/ai_agent.jpg"
                    alt="Mentor guidance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom wide image */}
            <div className="w-full h-40 sm:h-48 rounded-2xl shadow-md overflow-hidden">
              <img
                src="/Images/our_story.png"
                alt="Community collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: STORY TEXT */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            <h1 className="text-[#294b3c] font-semibold text-2xl sm:text-4xl text-center lg:text-left">
              Our Story
            </h1>

            <div className="bg-[#a5b6ae] p-6 sm:p-8 rounded-2xl shadow-md text-[#294b3c] text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Our founder, masters in commerce turned technologist, faced the uphill task of re-entering the workforce after a long career break. Her journey into software engineering and later Data Science revealed how hard it is to find proper guidance, relevant experience, and affordable, practical learning opportunities.
              </p>
              <p>
                In 2022, while contributing to an academia-industry initiative, she realized that the real challenge isn't lack of knowledge - it's lack of application. Conversations with students and educators made one thing clear: <strong>hands-on learning is the bridge between theory and industry.</strong>
              </p>
              <p>
                That insight sparked v18Hub - a cohort-based collaborative platform where <strong>students learn by building</strong>. Projects shared by industry partners or inspired by real-world problems become the foundation for learning, guided by mentors from academia and industry.
              </p>
              <p>
                Learners access theory through curated resources, but from Day 1, they build, discuss, and publish their work on GitHub. Because at v18Hub, <strong>learning begins when you start building.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* ====================== OUR VALUES – STARTS AT LEFT EDGE (ORANGE ARROW) ====================== */}
        <div className="bg-[#F9F6F1] py-16 px-6 rounded-2xl">

          <div className="max-w-5xl mx-auto">

            {/* HEADING – starts at the left edge */}
            <h1 className="text-[#294b3c] font-medium text-2xl sm:text-3xl text-center lg:text-left mb-8">
              Our<br className="sm:hidden" /> Values
            </h1>

            {/* GRID – full width, responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#294b3c] text-base sm:text-lg leading-relaxed">
              {/* Learning By Doing */}
              <div className="bg-[#a5b6ae] p-6 rounded-xl shadow-md">
                <h3 className="text-[#294b3c] font-semibold text-xl mb-3">Learning By Doing</h3>
                <p>
                  We believe true understanding comes from action. Every learner at v18Hub builds, experiments, and applies concepts to real challenges - because knowledge grows only when put into practice.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#a5b6ae] p-6 rounded-xl shadow-md">
                <h3 className="text-[#294b3c] font-semibold text-xl mb-3">Vision</h3>
                <p>
                  To create an ecosystem where academia and industry collaborate seamlessly, nurturing learners who are not just job-ready but tech-ready, innovation-driven and future-focused.
                </p>
              </div>

              {/* Purpose */}
              <div className="bg-[#a5b6ae] p-6 rounded-xl shadow-md">
                <h3 className="text-[#294b3c] font-semibold text-xl mb-3">Purpose</h3>
                <p>
                  To make learning experiential, affordable  - transforming curiosity into capability through real-world problem solving.
                </p>
              </div>

              {/* Community */}
              <div className="bg-[#a5b6ae] p-6 rounded-xl shadow-md">
                <h3 className="text-[#294b3c] font-semibold text-xl mb-3">Community</h3>
                <p>
                  We grow together. Our cohorts thrive on collaboration, mentorship, and peer learning, creating a self-sustaining circle of builders, thinkers, and mentors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ====================== EMAIL SUBSCRIPTION ====================== */}
        {/* <div className="flex flex-col items-center gap-5 pb-12">
          <h1 className="text-[#537367] font-medium text-lg sm:text-3xl text-center max-w-3xl">
            Provide your email address to subscribe for the v18Hub report
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <InputText
              id="email"
              type="email"
              keyfilter="email"
              placeholder="user@example.com"
              className="w-full"
            />
            <button className="transition-transform p-3 rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium whitespace-nowrap">
              Submit
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Our_Story;