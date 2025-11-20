/* src/components/Homepage Components/What_Our_Learners_Say/What_Our_Learners_Say.tsx */
import { useEffect, useState } from "react";
import { Tweet_card } from "../../../utils/ui/Tweet_card/Tweet_Card";
import "./What_Our_Learners_Say.css";

interface Testimonial {
  name: string;
  username: string;
  text: string;
}

/* --------------------------------------------------------------
   1. Static data (replace with API later – only ONE line to change)
   -------------------------------------------------------------- */
const staticTestimonials: Testimonial[] = [
  {
    name: "Prakrithi",
    username: "Prakrithi",
    text:
      "I really enjoyed being part of the genai cohort. It was one of the most insightful and engaging learning experiences I’ve had. Your way of teaching ma’am made even complex concepts easy to understand. Ma’am your explanations were clear, structured and very motivating✨✨ \
      The sessions helped me gain a strong foundation in how genai systems work and how to implement them practically.",
  },
  {
    name: "Taran",
    username: "Taran",
    text:
      "The cohort was about 90% practical and 10% theory, which helped in understanding logic and frameworks effectively. \
      Maam, would tell us what to do and give us some suggestions and frameworks and we had to figure out how to do it and code it, with full support when stuck. \
      Reading 15-20 online resources provided my maam , improved my understanding of RAG topics and i understood that going through articles and posts as a computer science is very important to keep u updated and ease your understanding.",
  },
  {
    name: "Thanu",
    username: "Thanu",
    text:
      "The cohort was really informative and it got me more interested in AI and the different domains to dive into. The way you explained the concepts and provided so many reference materials made things easy to understand.",
  },
  {
    name: "Dheeraj",
    username: "Dheeraj",
    text:
      "Really enjoyed the session got an insight of the industry. Thank you.",
  },
  {
    name: "Manish",
    username: "Manish",
    text:
      "This is a nice and amazing experience. It gives lots of new technical skills and lots of insights in it. \
      The webinar gave me a clear understanding of what a data scientist actually does in real-world scenarios. \
      The career paths explained were practical and inspiring! As a fresher, I always felt confused between data analyst, \
      data engineer, and data scientist roles. This session broke it down perfectly. I feel more confident about choosing my direction. \
      Loved the practical advice on how to build a portfolio, get internships, and transition into data science roles. Highly recommended for anyone starting out",
  },
  {
    name: "Sumit",
    username: "Sumit",
    text:
      "I attended your data science webinar. It was really informative.",
  },
];

const What_Our_Learners_Say = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  /* ----------------------------------------------------------
     2. Load static data (later replace with fetch)
     ---------------------------------------------------------- */
  useEffect(() => {
    setTestimonials(staticTestimonials);

    // ----> WHEN API IS READY, UNCOMMENT THIS BLOCK <----
    // fetch("/api/testimonials")
    //   .then((r) => r.json())
    //   .then((data) => setTestimonials(data))
    //   .catch((e) => console.error(e));
  }, []);

  return (
    <section className="bg-[#f4f2ee] py-20">
      {/* ---------- Container (same width as other sections) ---------- */}
      <div className="max-w-[1380px] mx-auto px-4 lg:px-[75px] pt-10 pb-5">
        <h3 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap">
          What Our Learners Say
        </h3>

        {/* ---------- Horizontal scroller ---------- */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {/* ---- First copy (for seamless loop) ---- */}
            {testimonials.map((t, i) => (
              <TweetCardWrapper key={i} {...t} />
            ))}

            {/* ---- Second copy (loop) ---- */}
            {testimonials.map((t, i) => (
              <TweetCardWrapper key={i + testimonials.length} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* --------------------------------------------------------------
   Tiny wrapper → adds hover pause + zoom + first-letter avatar
   -------------------------------------------------------------- */
const TweetCardWrapper = ({ name, username, text }: Testimonial) => {
  const firstLetter = name[0].toUpperCase(); // ← CHANGE: name, not username

  return (
    <div className="group flex-shrink-0 w-80">
      <Tweet_card
        name={name}
        username={username}
        text={text}
        className="group-hover:scale-105" // ← Remove bg/text – now in Tweet_card
        firstLetter={firstLetter}
      />
    </div>
  );
};

export default What_Our_Learners_Say;