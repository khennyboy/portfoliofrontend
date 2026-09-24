import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FiDownload, FiMessageSquare } from "react-icons/fi";
import { useColorMode } from "./ui/color-mode";

export default function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Box as="section" id="top">
      <Container maxW="6xl" minH="dvh" display="flex">
        <Flex
          pt={{ base: 4, md: 0 }}
          flex={1}
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent={{ base: "center", md: "space-between" }}
          gap={{ base: 4, md: 8 }}
        >
          <Box
            flex={{ base: "initial", md: "1" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              color="brand.400"
              fontWeight={700}
              fontSize="sm"
              letterSpacing="0.08em"
              mb={2}
            >
              Frontend Engineer
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight={1.1}
              mb={3}
            >
              Hi, I'm{" "}
              <Text as="span" color="brand.400">
                Sheriff Abdullateef
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
              maxW="500px"
              mx={{ base: "auto", md: 0 }}
              mb={8}
            >
              Frontend Engineer specializing in React, Next.js, and TypeScript.
              I build clean, high-performance interfaces and ship them
              end-to-end from component to production.
            </Text>
            <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
              <Button
                as="a"
                href="/Sheriff_Abdullateef_Resume.pdf"
                target="_blank"
                size="lg"
              >
                Resume <FiDownload />
              </Button>
              <Button as="a" href="#contact" variant="outline" size="lg">
                Contact me <FiMessageSquare />
              </Button>
            </HStack>
          </Box>

          <Box flexShrink={0}>
            <Box
              w={{ base: "220px", md: "300px" }}
              h={{ base: "220px", md: "300px" }}
              borderRadius="full"
              overflow={"hidden"}
            >
              <Box
                as="img"
                src="https://res.cloudinary.com/dfnjiuou/image/upload/f_auto,q_auto/v1790206354/my_dp.png"
                alt="Sheriff Abdullateef"
                w="100%"
                h="100%"
                objectFit="cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
