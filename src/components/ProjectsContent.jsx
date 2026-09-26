import { chakra } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import useGetProjects from "../hooks/getProject";
import { scaleUp, staggerContainer } from "../utils/animation";
import ProjectCard from "./ProjectCard";

const MotionGrid = chakra(motion.div);
const MotionItem = chakra(motion.div);

const chunk = (arr, size) => {
  const rows = [];
  for (let i = 0; i < arr.length; i += size) rows.push(arr.slice(i, i + size));
  return rows;
};

const ProjectsContent = () => {
  const { data } = useGetProjects();
  const shouldReduceMotion = useReducedMotion();
  const columns = 3; // matches your lg breakpoint
  const rows = chunk(data, columns);

  return (
    <chakra.div display="flex" flexDirection="column" gap={{ base: 6, md: 8 }}>
      {rows.map((row, rowIndex) => (
        <MotionGrid
          key={rowIndex}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: 6, md: 8 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={shouldReduceMotion ? undefined : staggerContainer(0.08)}
        >
          {row.map((p) => (
            <MotionItem key={p._id} variants={shouldReduceMotion ? undefined : scaleUp}>
              <ProjectCard project={p} />
            </MotionItem>
          ))}
        </MotionGrid>
      ))}
    </chakra.div>
  );
};

export default ProjectsContent;