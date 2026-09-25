// components/AnimatedSection.jsx
import { chakra } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const MotionBox = chakra(motion.div);

export const AnimatedSection = ({
  children,
  variants,
  delay = 0,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 1,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "linear",
      }}
      variants={shouldReduceMotion ? "" : variants}
      {...props}
    >
      {children}
    </MotionBox>
  );
};
