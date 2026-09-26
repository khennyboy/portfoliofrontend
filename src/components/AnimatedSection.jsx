import { chakra } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const MotionBox = chakra(motion.div);

export const AnimatedSection = ({
  children,
  variants,
  delay = 0,
  transition = {},
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const combinedTransition = {
    ...transition,
    delay,
  };

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      transition={combinedTransition}
      variants={shouldReduceMotion ? undefined : variants}
      {...props}
    >
      {children}
    </MotionBox>
  );
};
