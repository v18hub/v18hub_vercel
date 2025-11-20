// components/animations/Scroll_Animation.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}

export const ScrollAnimation = ({ children, delay = 0, y = 60, x = 0, className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // custom buttery ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};