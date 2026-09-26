import { SimpleGrid } from "@chakra-ui/react";
import useGetProjects from "../hooks/getProject";
import { AnimatedSection } from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import { slideUp } from "../utils/animation";

const ProjectsContent = () => {
  const { data } = useGetProjects();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {data.map((p, index) => (
        <AnimatedSection key={p._id} variants={slideUp} custom={index}>
          <ProjectCard project={p} />
        </AnimatedSection>
      ))}
    </SimpleGrid>
  );
};

export default ProjectsContent;