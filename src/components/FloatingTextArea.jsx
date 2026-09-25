import { Box, Textarea, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const FloatingTextarea = ({ label, error, ...props }) => {
  const inputBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const inputColor = useColorModeValue("gray.900", "white");
  const labelColor = useColorModeValue("gray.500", "whiteAlpha.500");

  return (
    <Box>
      <Box position="relative" h="150px" w="full">
        <Textarea
          {...props}
          placeholder=" "
          bg={inputBg}
          color={inputColor}
          outline={"none"}
          border="1px solid"
          borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          rounded="xl"
          h="150x"
          pt="24px"
          pb="6px"
          resize="none"
          fontSize={{ base: "sm", md: "md" }}
          _focus={{
            bg: inputBg,
            borderColor: "purple.500",
            boxShadow: "0 0 0 1px var(--chakra-colors-purple-500)",
          }}
          css={{
            "&:focus + label, &:not(:placeholder-shown) + label": {
              transform: "translateY(-12px) scale(0.75)",
              fontSize: "0.8rem",
            },
          }}
        />
        <Text
          as="label"
          position="absolute"
          left="16px"
          top="18px"
          color={labelColor}
          fontSize="md"
          pointerEvents="none"
          transition="all 0.15s ease"
          transformOrigin="left top"
        >
          {label}
        </Text>
      </Box>

      <Text
        color="red.400"
        fontSize="xs"
        my={1}
        minH="16px"
        visibility={error ? "visible" : "hidden"}
      >
        {error || " "}
      </Text>
    </Box>
  );
};

export default FloatingTextarea;
