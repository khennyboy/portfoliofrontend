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

        _hover: {
          bg: "brand.600",
          transform: "translateY(-1px)",
        },

        _active: {
          bg: "brand.700",
        },

        transition: "all 0.15s ease",
      },

      outline: {
        borderColor: {
          base: "gray.300",
          _dark: "whiteAlpha.300",
        },

        color: {
          base: "gray.800",
          _dark: "white",
        },

        _hover: {
          bg: {
            base: "gray.100",
            _dark: "whiteAlpha.100",
          },
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
          50: { value: "#E8F5FD" },
          100: { value: "#D5EDFC" },
          200: { value: "#B9E0FA" },
          300: { value: "#8CCCF7" },
          400: { value: "#4FB4F2" },
          500: { value: "#1D9BF0" },
          600: { value: "#1A8CD8" },
          700: { value: "#1479BD" },
          800: { value: "#0F5F96" },
          900: { value: "#0A4168" },
        },

        surface: {
          dark: { value: "#000000" },
          darkAlt: { value: "#16181C" },
          darkCard: { value: "#1D1F23" },

          light: { value: "#FFFFFF" },
          lightAlt: { value: "#F7F9F9" },
          lightCard: { value: "#EFF3F4" },
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
    "body": {
      bg: {
        base: "surface.light",
        _dark: "surface.dark",
      },

      color: {
        base: "gray.800",
        _dark: "whiteAlpha.900",
      },
    },

    "::selection": {
      background: "brand.400",
      color: "white",
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;