import { SimpleGrid } from "@chakra-ui/react";
import useGetProjects from "../hooks/getProject";
import { scaleUp } from "../utils/animation";
import { AnimatedSection } from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  const { data } = useGetProjects();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {data.map((p, index) => {
        return (
          // <AnimatedSection variants={scaleUp}>
            <ProjectCard key={p.title} project={p} />
          // </AnimatedSection>
        );
      })}
    </SimpleGrid>
  );
};

export default ProjectsContent;
