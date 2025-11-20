import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export interface CohortCardProps {
  cohort_id: string | number;
  imageSrc: string;
  tag?: string;
  title: string;
  description: string;
  cohortTitle: string;
  startDate: string;
  duration: string;
  skills: string;
}

const Cohort_Card = React.forwardRef<HTMLAnchorElement, CohortCardProps>(
  (
    { cohort_id, imageSrc, title, description, cohortTitle, startDate, duration, skills, }, ref
  ) => (

    <motion.a
      ref={ref}
      className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[410px] lg:h-[550px] rounded-2xl overflow-hidden snap-start"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      {/* Image */}
      <Link to={`/programs/cohorts/${cohort_id}`}>
        <img
          src={imageSrc}
          alt="image"
          className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-card p-5 flex flex-col justify-between">
          <div className="space-y-2">
            
            {/* Cohort Title */}
            <h3 className="text-base font-semibold text-primary line-clamp-1">
              {cohortTitle}
            </h3>

            {/* Main Offer Title */}
            <h2 className="text-lg sm:text-xl font-bold text-card-foreground leading-tight">
              {title}
            </h2>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col gap-1 text-sm text-muted-foreground mt-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{startDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{duration}</span>
              </div>
            </div>

            {/* Skills (with ellipsis overflow) */}
            <div className="lg:flex items-start gap-2 mt-2 hidden">
              <GraduationCap className="w-4 h-4 text-primary mt-[2px]" />
              <p
                className="text-xs text-muted-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[240px]"
                title={skills}
              >
                {skills}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="w-8 h-8 rounded-full bg-[#F6F5ED] flex items-center justify-center text-[#526B61] transform transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#526B61] group-hover:text-white hover:bg-[#25473A]">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.a>

  )
);

Cohort_Card.displayName = "Cohort_Card";
export default Cohort_Card;
