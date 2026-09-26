import { Box, Skeleton, SkeletonText, HStack, Stack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export function ProjectCardSkeleton() {
  const { colorMode } = useColorMode();

  const cardBg = colorMode === "dark" ? "surface.darkCard" : "white";
  const border = colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100";

  return (
    <Box
      w="full"
      maxW="450px"
      justifySelf={"center"}
      display="flex"
      flexDirection="column"
      bg={cardBg}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      overflow="hidden"
    >
      <Skeleton height="220px" borderRadius={0} />

      <Box p={5} flex={1} display="flex" flexDirection="column" gap={3}>
        <Skeleton height="22px" width="60%" borderRadius="md" />

        <SkeletonText noOfLines={2} gap="2" skeletonHeight="14px" />

        <HStack gap={2} mt={1}>
          <Skeleton height="24px" width="60px" borderRadius="full" />
          <Skeleton height="24px" width="80px" borderRadius="full" />
          <Skeleton height="24px" width="70px" borderRadius="full" />
        </HStack>

        <HStack gap={3} flex={1} alignItems="flex-end" mt={2}>
          <Skeleton height="36px" flex={1} borderRadius="md" />
          <Skeleton height="36px" flex={1} borderRadius="md" />
        </HStack>
      </Box>
    </Box>
  );
}
