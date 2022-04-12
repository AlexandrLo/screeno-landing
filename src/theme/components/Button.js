import { theme as defaultTheme } from "@chakra-ui/react";

const Button = {
  baseStyle: {
    borderRadius: "1000px",
    _focus: { boxShadow: "none" },
  },
  sizes: {
    md: {
      px: "1.75rem",
      h: "2.875rem",
    },
  },
  variants: {
    circle: (props) => ({
      ...defaultTheme.components.Button.variants.ghost(props),
      borderRadius: "1000px",
      px: 0,
      h: "2.875rem",
      w: "2.875rem",
    }),

    outline: (props) => {
      const { colorScheme: c } = props;
      props.colorScheme = "whiteAlpha";
      if (c === "white") {
        return {
          ...defaultTheme.components.Button.variants.outline(props),
          borderColor: "white",
          color: "white",
        };
      } else {
        return defaultTheme.components.Button.variants.outline(props);
      }
    },
  },
};

export default Button;
