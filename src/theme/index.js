import { extendTheme } from "@chakra-ui/react";
import "@fontsource/mulish/variable.css";

import Container from "theme/components/Container";
import Button from "theme/components/Button";
import Link from "theme/components/Link";
import Heading from "theme/components/Heading";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "MulishVariable",
    body: "MulishVariable",
  },
  colors: {
    blue: {
      50: "#e0edff",
      100: "#b3d2ff",
      200: "#80b5ff",
      300: "#4d97ff",
      400: "#2680ff",
      500: "#006aff",
      600: "#0062ff",
      700: "#0057ff",
      800: "#004dff",
      900: "#003cff",
    },

    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#141516",
    },
  },
  sizes: {
    container: {
      sm: "592px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
  },
  components: {
    Container,
    Button,
    Link,
    Heading,
  },
});

export default theme;
