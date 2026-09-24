import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "600",
    borderRadius: "full",
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.500",
        color: "white",
        _hover: { bg: "brand.600", transform: "translateY(-1px)" },
        _active: { bg: "brand.700" },
        transition: "all 0.15s ease",
      },
      outline: {
        borderColor: { base: "gray.300", _dark: "whiteAlpha.300" },
        color: { base: "gray.800", _dark: "white" },
        _hover: {
          bg: { base: "gray.100", _dark: "whiteAlpha.100" },
        },
      },
    },
  },
});

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#F3EEFF" },
          100: { value: "#E1D4FF" },
          200: { value: "#C7B0FF" },
          300: { value: "#AB8AFF" },
          400: { value: "#9269FA" },
          500: { value: "#7C4DEF" },
          600: { value: "#6A38DE" },
          700: { value: "#582CB8" },
          800: { value: "#452291" },
          900: { value: "#331A6B" },
        },
        surface: {
          dark: { value: "#0A0F1E" },
          darkAlt: { value: "#111827" },
          darkCard: { value: "#131C2E" },
          light: { value: "#FFFFFF" },
          lightAlt: { value: "#F6F6F9" },
          lightCard: { value: "#FAFAFC" },
        },
      },
      fonts: {
        heading: { value: `'Sora', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
  globalCss: {
    "html, body": {
      bg: { base: "white", _dark: "#0A0F1E" },
      color: { base: "gray.800", _dark: "whiteAlpha.900" },
    },
    "::selection": {
      background: "brand.400",
      color: "white",
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
