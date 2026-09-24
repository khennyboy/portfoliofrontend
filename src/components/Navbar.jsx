import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Link,
  Container,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useColorMode } from "./ui/color-mode";
import { socials } from "../data/skills";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      insetX={0}
      zIndex={20}
      bg={
        colorMode === "dark" ? "rgba(10,15,30,0.75)" : "rgba(255,255,255,0.8)"
      }
      shadow={"xs"}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
    >
      <Container maxW="6xl" py={4}>
        <Flex align="center" justify="space-between">
          <Link href="#top" _hover={{ textDecoration: "none" }}>
            <Text fontFamily="heading" fontWeight={700} fontSize="xl">
              Sheriff
              <Text as="span" color="brand.400">
                .
              </Text>
            </Text>
          </Link>

          <HStack gap={{ base: 4, md: 6 }}>
            <HStack gap={4} display={{ base: "none", sm: "flex" }}>
              {socials.map(({ IconComponent, href, label }) => (
                <IconButton
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variant="ghost"
                  size="sm"
                  fontSize="18px"
                  color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
                  _hover={{ color: "brand.400", bg: "transparent" }}
                >
                  <IconComponent />
                </IconButton>
              ))}
            </HStack>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              variant="outline"
              size="sm"
              borderRadius="full"
            >
              {colorMode === "dark" ? <FiSun /> : <FiMoon />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
