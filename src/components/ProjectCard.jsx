import {
  Box,
  Heading,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import React from "react";

function ProjectCard({ project }) {
  const { colorMode } = useColorMode();
  const cardBg = colorMode === "dark" ? "surface.darkCard" : "white";
  const border = colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100";

  return (
    <Box
      h={"full"}
      w={"full"}
      maxW={"450px"}
      justifySelf={"center"}
      display="flex"
      flexDirection="column"
      bg={cardBg}
      border="1px solid"
      borderColor={border}
      borderRadius="2xl"
      overflow="hidden"
      shadow={"sm"}
      transition="transform 0.18s ease, box-shadow 0.18s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
      }}
      pb={2}
    >
      <Box h="220px" position="relative" overflow="hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition={"top"}
        />
      </Box>

      <Box p={5} flex={1} display="flex" flexDirection="column" gap={3}>
        <Heading as="h3" fontSize="lg">
          {project.title}
        </Heading>
        <Text
          fontSize="sm"
          color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
        >
          {project.description}
        </Text>

        <Wrap gap={2}>
          {project.stack?.map((s) => (
            <WrapItem key={s}>
              <Tag.Root
                size="sm"
                borderRadius="full"
                variant="subtle"
                bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
              >
                <Tag.Label>{s}</Tag.Label>
              </Tag.Root>
            </WrapItem>
          ))}
        </Wrap>

        <HStack gap={3} flex={1} alignItems="flex-end" mt={2}>
          <Button
            as="a"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            flex={1}
          >
            <FiGithub />
            Code
          </Button>
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            flex={1}
          >
            <FiExternalLink />
            Live
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default React.memo(ProjectCard);
