import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FiMessageSquare, FiMail } from "react-icons/fi";
import { useColorMode } from "./ui/color-mode";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

export default function Contact() {
  const { colorMode } = useColorMode();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl" textAlign="center">
        <Text
          color="brand.400"
          fontWeight={700}
          fontSize="sm"
          letterSpacing="0.08em"
          mb={2}
        >
          Get in touch
        </Text>
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
          Contact
        </Heading>
        <Text
          color={colorMode === "dark" ? "whiteAlpha.700" : "gray.600"}
          fontSize={{ base: "md", md: "lg" }}
          mb={6}
        >
          I'd love to hear about your project and how I could help.
        </Text>

        <Flex
          mb={6}
          mx={"auto"}
          align="center"
          justify="center"
          w="50px"
          h="50px"
          borderRadius="full"
          bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.100"}
        >
          <Icon as={FiMail} boxSize={7} color="brand.400" />
        </Flex>

        <Button
          rightIcon={<FiMessageSquare />}
          size="lg"
          onClick={() => setOpenDialog(true)}
        >
          Contact me
        </Button>
      </Container>
      <ContactDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Box>
  );
}


