import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import useGetProjects from "../hooks/getProject";

const ProjectsContent = () => {
  const { data } = useGetProjects();
  console.log(data);

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {data.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </SimpleGrid>
  );
};

export default ProjectsContent;
