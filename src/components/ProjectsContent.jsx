import { SimpleGrid } from "@chakra-ui/react";
import useGetProjects from "../hooks/getProject";
import ProjectCard from "./ProjectCard";
import { AnimatedSection } from "./AnimatedSection";
import { scaleUp, scaleUpTransition } from "../utils/animation";
import FallbackSkeleton from "./FallbackSkeleton";
import { ProjectCardSkeleton } from "./Skeleton";

const ProjectsContent = () => {
  const { data } = useGetProjects();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {data.map((p, index) => {
        return (
          <AnimatedSection
            key={p._id}
            variants={scaleUp}
            transition={scaleUpTransition}
            delay={index * 0.08}
          >
            <ProjectCardSkeleton/>
            {/* <ProjectCard project={p} /> */}
          </AnimatedSection>
        );
      })}
    </SimpleGrid>
  );
};

export default ProjectsContent;
