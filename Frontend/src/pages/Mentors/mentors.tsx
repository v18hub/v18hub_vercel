// src/pages/mentors.tsx
import { Helmet } from "@vuer-ai/react-helmet-async";
import { MentorCard, type Mentor } from "../../components/Mentors/MentorCard";

const mentors: Mentor[] = [
  {
    id: "1",
    name: "Neeraj Sharma",
    role: "Mentor",
    title: "CEO - v18hub",
    image: "/Images/mentors/neeraj_sharma.jpeg",
    bio: "Neeraj Sharma is an AI practitioner, educator, and founder of v18hub, a collaborative platform \
    connecting industry and academia through project-based learning.\n\n \
    With 25 years of industry experience spanning freelancing, software engineering, deep learning, \
    and Generative AI, she focuses on translating emerging technologies into practical, real-world applications.\n\n \
    Neeraj works closely with students and institutions to design hands-on cohorts that bridge the gap \
    between academic learning and industry expectations. Through v18hub, she enables learners to work \
    on real-world problems, build strong technical foundations, and develop industry-ready skills. \
    \n\nShe is passionate about mentorship, innovation, and creating ecosystems where learners become \
    tech-ready through experience - not just theory.",
    // expertise: ["Computer Vision", "Deep Learning", "MLOps", "Research"],
    experience: "25 years • Ex-Carrier,LTTS, Cisco",
    linkedin: "https://www.linkedin.com/in/neeraj-sharma-00788ba/",
  },
  {
    id: "2",
    name: "Sandeep Aparajit",
    role: "Mentor",
    title: "Founder - Be Fit n Happy",
    image: "/Images/mentors/sandeep_aparajit.jpeg",
    bio: "Sandeep Aparajit is a seasoned technology professional and strategic leader with over 15 years \
        of experience in driving innovation and digital transformation. As a mentor for v18hub, \
        Sandeep leverages his deep expertise in Artificial Intelligence and emerging technologies to \
        empower the next generation of tech leaders and entrepreneurs.\n\nThroughout his career, Sandeep \
        has demonstrated a unique ability to bridge the gap between complex technological frameworks \
        and real-world business applications. His professional journey is marked by a strong commitment \
        to education and skill development, having designed comprehensive entrepreneurship curricula and \
        led initiatives focused on preparing students for the rapidly evolving digital economy.\n\nBeyond his \
        technical acumen, Sandeep is a dedicated community leader based in Nagpur, where he oversees \
        significant philanthropic projects in healthcare and education. His holistic approach to mentorship \
        combines rigorous technical training with the foundational principles of leadership and social responsibility.\
        \n\nAn advocate for continuous learning, Sandeep brings a disciplined and energized perspective to his role, \
        guiding students not only in mastering AI but also in developing the mindset required to thrive in a \
        competitive global landscape.",
    // expertise: ["AI Agents", "Healthcare AI", "LLMs", "System Design"],
    experience: "15 years • Ex-Microsoft",
    linkedin: "https://www.linkedin.com/in/sandeepaparajit/",
  },
  {
    id: "3",
    name: "Yoga Balaji",
    role: "Mentor",
    title: "Data Scientist at Mu Sigma",
    image: "/Images/mentors/yoga_balaji.jpeg",
    bio: "Yoga Balaji is a Data Scientist at Mu Sigma, specializing in AI, data analytics, \
          predictive modeling, and cloud solutions, working with Fortune 500 organizations to \
          drive customer-centric, high-impact decision systems.\n\n \
          Yoga Balaji has addressed 10,000+ students and professionals as a keynote speaker, \
          panelist, judge, and mentor across academic and industry platforms.\n\n \
          Beyond his corporate role, he serves as a Mentor with Smart India Hackathon and Naan Mudhalvan, \
          a Project Reviewer for the Rise Program, a Selector for the Ellison Scholars Program \
          (Harvard University) and the Rhodes Scholarship (University of Oxford), and a volunteer \
          with the UN SDG Committee. His work focuses on advancing responsible, human-centric AI and \
          sustainable innovation.",
    // expertise: ["Time Series", "Forecasting", "Causal AI", "Python"],
    experience: "5 years • Mu Sigma",
    linkedin: "https://www.linkedin.com/in/yogabalaji-g",
  },
];

const Mentors = () => {
  return (
    <>
      <Helmet>
        <title>Our Mentors | v18hub</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Learn from industry experts and researchers shaping the future of AI in India." />
        <meta name="keywords" content="AI mentors, machine learning experts, v18hub mentors, AI education India" />
        <link rel="canonical" href="https://v18hub.in/mentors" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://v18hub.in/mentors" />
        <meta property="og:title" content="Our Mentors | v18hub" />
        <meta property="og:description" content="Learn from industry experts and researchers shaping the future of AI in India." />
        <meta property="og:image" content="https://v18hub.in/og-mentors.jpg" />
        <meta property="og:site_name" content="v18hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mentors | v18hub" />
        <meta name="twitter:description" content="Learn from industry experts and researchers shaping the future of AI in India." />
        <meta name="twitter:image" content="https://v18hub.in/og-mentors.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "v18hub Mentors",
              "url": "https://v18hub.in/our-mentors",
              "description": "Expert AI/ML mentors at v18hub guiding learners through hands-on programs.",
              "numberOfItems": mentors.length,
              "itemListElement": mentors.map((m, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                  "@type": "Person",
                  "name": m.name,
                  "jobTitle": m.title,
                  "description": m.bio.replace(/\n/g, " ").trim(),
                  "image": `https://v18hub.in${m.image}`,
                  "url": m.linkedin && m.linkedin !== "#" 
                    ? m.linkedin 
                    : "https://v18hub.in/our-mentors",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "v18hub",
                    "url": "https://v18hub.in"
                  }
                }
              }))
            }, null, 2)
          }}
        />
      </Helmet>

      <div className="min-h-screen bg-[#f6f5ec] font-open-sans">
        {/* Hero */}
        <div className="bg-[#294b3c] text-[#f6f5ec] pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Mentors</h1>
            <p className="text-xl text-[#a5b6ae] max-w-2xl mx-auto">
              Learn directly from practitioners who are building real AI systems.{/*   at top companies and research labs. */}
            </p>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.length > 0 ? (
              mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))
            ) : (
              <p className="col-span-3 text-center text-[#546f61] py-12 italic">
                No mentors listed yet. Check back soon.
              </p>
            )}
          </div>
        </div>

        {/* CTA Section
        <div className="bg-[#294b3c] py-16 text-[#f6f5ec]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold mb-4">Become a v18hub Mentor</h2>
            <p className="text-[#a5b6ae] mb-8 max-w-md mx-auto">
              Are you an experienced AI/ML professional who wants to give back to the community?
            </p>
            <a
              href="/registration?type=mentor"
              className="inline-block px-10 py-4 bg-[#f6f5ec] text-[#294b3c] rounded-xl font-semibold hover:bg-[#a5b6ae] transition-colors"
            >
              Apply to Become a Mentor
            </a>
          </div>
        </div> */}

        {/* Footer */}
        {/* <footer className="bg-[#294b3c] text-[#a5b6ae] py-12 border-t border-[#546f61]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm">© 2026 v18hub. Shaping the future of AI education in India.</p>
            <div className="flex justify-center gap-6 mt-6 text-sm">
              <a href="/terms" className="hover:text-[#f6f5ec]">Privacy Policy</a>
              <a href="/about/contact-us" className="hover:text-[#f6f5ec]">Contact Us</a>
            </div>
          </div>
        </footer>*/}
      </div> 
    </>
  );
};

export default Mentors;
