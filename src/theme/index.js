import { extendTheme } from "@chakra-ui/react";
import "@fontsource/mulish/variable.css";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "MulishVariable",
    body: "MulishVariable",
  },
});

export default theme;
