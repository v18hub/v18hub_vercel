/* src/components/Homepage Components/What_Our_Learners_Say/What_Our_Learners_Say.tsx */
import { useState } from "react";
import { Tweet_card } from "../../../utils/ui/Tweet_card/Tweet_Card";
import "./What_Our_Learners_Say.css";

interface Testimonial {
  name: string;
  username: string;
  text: string;
}

const staticTestimonials: Testimonial[] = [ /* your data */ ];

const What_Our_Learners_Say = () => {
  const [testimonials] = useState<Testimonial[]>(staticTestimonials);

  return (
    <section className="bg-[#f4f2ee] py-20 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 lg:px-[75px]">
        <h3 className="text-[#294b3c] text-3xl sm:text-4xl lg:text-5xl leading-snug mb-12 font-bold">
          What Our Learners Say
        </h3>

        {/* Perfect seamless scroller */}
        <div className="scroller">
          <div className="animate-scroll">
            {/* First set */}
            {testimonials.map((t, i) => (
              <TweetCardWrapper key={`a-${i}`} {...t} />
            ))}
            {/* Second set for infinite loop */}
            {testimonials.map((t, i) => (
              <TweetCardWrapper key={`b-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TweetCardWrapper = ({ name, username, text }: Testimonial) => {
  const firstLetter = name[0].toUpperCase();

  return (
    <div className="group flex-shrink-0 w-80 sm:w-96">
      <Tweet_card
        name={name}
        username={username}
        text={text}
        className="transition-transform duration-300 group-hover:scale-105 shadow-lg"
        firstLetter={firstLetter}
      />
    </div>
  );
};

export default What_Our_Learners_Say;