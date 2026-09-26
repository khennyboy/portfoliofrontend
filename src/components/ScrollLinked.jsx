import { chakra } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";

const MotionBox = chakra(motion.div);

export default function ScrollLinked({ children }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <MotionBox
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#7C4DEF",
          zIndex: 9999,
        }}
      />
      {children}
    </>
  );
}