import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";
import { socials } from "../data/skills";
import { useColorMode } from "./ui/color-mode";

const quickLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const muted = isDark ? "whiteAlpha.700" : "gray.600";
  const faint = isDark ? "whiteAlpha.500" : "gray.500";

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={isDark ? "whiteAlpha.100" : "blackAlpha.100"}
      pt={12}
      pb={6}
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "start" }}
          gap={6}
          mb={10}
        >
          <VStack
            align={{ base: "center", md: "flex-start" }}
            gap={3}
            textAlign={{ base: "center", md: "left" }}
            maxW="sm"
          >
            <Text fontFamily="heading" fontWeight={700} fontSize="xl">
              Sheriff
              <Text as="span" color="brand.400">
                .
              </Text>
            </Text>
            <Text fontSize="sm" color={muted} maxW={"300px"}>
              Frontend developer building fast, responsive interfaces with
              React, Next.js, and TypeScript.
            </Text>
            <HStack gap={2}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  as="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  variant="ghost"
                  size="sm"
                  fontSize="16px"
                  color={muted}
                  _hover={{ color: "brand.400", bg: "transparent" }}
                >
                  <s.IconComponent />
                </IconButton>
              ))}
            </HStack>
          </VStack>

          {/* Quick links */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontWeight={600} fontSize="sm">
              Quick links
            </Text>
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                fontSize="sm"
                color={muted}
                _hover={{ color: "brand.400" }}
              >
                {l.label}
              </Link>
            ))}
          </VStack>

          {/* Contact */}
          <VStack align={{ base: "center", md: "flex-start" }} gap={3}>
            <Text fontWeight={600} fontSize="sm">
              Get in touch
            </Text>
            <Link
              href="mailto:your@email.com"
              fontSize="sm"
              color={muted}
              _hover={{ color: "brand.400" }}
            >
              abdullateefkehinde848@email.com
            </Link>
            <Link
              href="/Sheriff_Abdullateef_Resume.pdf"
              download
              rel="noopener noreferrer"
              fontSize="sm"
              color={muted}
              _hover={{ color: "brand.400" }}
            >
              Download resume
            </Link>
          </VStack>
        </Flex>

        <Separator borderColor={isDark ? "whiteAlpha.100" : "blackAlpha.100"} />

        <Flex align="center" justify="space-around" gap={3} pt={6}>
          <Text fontSize="xs" color={faint} textAlign="center">
            © {new Date().getFullYear()} Sheriff Abdullateef. Built with React
            &amp; Chakra UI.
          </Text>

          <IconButton
            as="a"
            href="#top"
            aria-label="Back to top"
            variant="ghost"
            size="sm"
            color={muted}
            _hover={{ color: "brand.400", bg: "transparent" }}
          >
            <FiArrowUp />
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
}
