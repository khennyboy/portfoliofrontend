import { SimpleGrid } from "@chakra-ui/react";
import { ProjectCardSkeleton } from "./Skeleton";

const FallbackSkeleton = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
      {Array.from({ length: 6 }, () => {
        return <ProjectCardSkeleton />;
      })}
    </SimpleGrid>
  );
};

export default FallbackSkeleton;
