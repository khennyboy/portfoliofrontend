import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import skills from "../data/skills.js";
import { useColorMode } from "./ui/color-mode.jsx";

export default function Skills() {
  const { colorMode } = useColorMode();
  const cardBg = colorMode === "dark" ? "surface.darkCard" : "white";
  const border = colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100";

  return (
    <Box as="section" id="skills" py={{ base: 14, md: 20 }}>
      <Container maxW="6xl">
        <Text
          color="brand.400"
          fontWeight={700}
          fontSize="sm"
          letterSpacing="0.08em"
          mb={2}
        >
          What I know
        </Text>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={10}>
          Skills
        </Heading>

        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
          gap={{ base: 4, md: 5 }}
        >
          {skills.map((s) => (
            <Flex
              key={s.label}
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              bg={cardBg}
              border="1px solid"
              borderColor={border}
              borderRadius="xl"
              py={5}
              px={2}
              transition="transform 0.15s ease, border-color 0.15s ease"
              _hover={{
                transform: "translateY(-3px)",
                borderColor: "brand.400",
              }}
            >
              <Icon
                as={s.icon}
                boxSize={8}
                mb={3}
                color={colorMode === "dark" ? "whiteAlpha.800" : "gray.700"}
              />
              <Text fontSize="sm" fontWeight={600}>
                {s.label}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
