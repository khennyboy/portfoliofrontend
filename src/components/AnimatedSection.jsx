import { chakra } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

const MotionBox = chakra(motion.div);

export const AnimatedSection = ({
  children,
  variants,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      variants={shouldReduceMotion ? undefined : variants}
      {...props}
    >
      {children}
    </MotionBox>
  );
};
