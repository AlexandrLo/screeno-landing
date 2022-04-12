import { extendTheme } from "@chakra-ui/react";
import "@fontsource/mulish/variable.css";

import Container from "theme/components/Container";
import Button from "theme/components/Button";
import Link from "theme/components/Link";
import Heading from "theme/components/Heading";
import Input from "theme/components/Input";
import Textarea from "theme/components/Textarea";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
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
      50: "#FCFCFC",
      100: "#F5F5F5",
      200: "#F0F0F0",
      300: "#E0E0E0",
      400: "#C0C0C0",
      500: "#969696",
      600: "#686868",
      700: "#484848",
      800: "#2C2C2C",
      900: "#161616",
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
    Input,
    Textarea,
  },
});

export default theme;
