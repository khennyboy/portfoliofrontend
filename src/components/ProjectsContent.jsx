import { SimpleGrid } from "@chakra-ui/react";
import useGetProjects from "../hooks/getProject";
import { slideInLeft, slideInRight } from "../utils/animation";
import { AnimatedSection } from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  const { data } = useGetProjects();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {data.map((p, index) => {
        const variantType = index % 2 ? slideInLeft : slideInRight
        return (
          <AnimatedSection variants={variantType}>
            <ProjectCard key={p.title} project={p} />
          </AnimatedSection>
        );
      })}
    </SimpleGrid>
  );
};

export default ProjectsContent;
