import { Box, Textarea, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const FloatingTextarea = ({ label, error, ...props }) => {
  const inputBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const inputColor = useColorModeValue("gray.900", "white");
  const labelColor = useColorModeValue("gray.500", "whiteAlpha.500");

  return (
    <Box>
      <Box
        position="relative"
        h="150px"
        w="full"
        rounded="xl"
        overflow="hidden" 
        border="1px solid"
        borderColor={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        bg={inputBg}
        _focusWithin={{
          borderColor: "purple.500",
          boxShadow: "0 0 0 1px var(--chakra-colors-purple-500)",
        }}
      >
        <Textarea
          {...props}
          placeholder=" "
          bg="transparent"
          color={inputColor}
          border="none"
          outline="none"
          rounded="none"
          h="full"
          w="full"
          pt="24px"
          pb="8px"
          pl="16px"
          pr="16px" // Prevents text & scrollbar from sticking directly to the right border
          resize="none"
          fontSize={{ base: "sm", md: "md" }}
          _focus={{
            boxShadow: "none",
            outline: "none",
          }}
          css={{
            WebkitOverflowScrolling: "touch",
            /* Sleek, inset scrollbar styling */
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            /* Floating Label CSS rules */
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
