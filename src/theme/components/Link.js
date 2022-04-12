const Link = {
  baseStyle: {
    _focus: { boxShadow: "none" },
  },
  variants: {
    menu: {
      display: "block",
      borderRadius: "md",
      fontWeight: 600,
      w: "100%",
      px: "1.75rem",
      py: "0.75rem",
      color: "white",
      _activeLink: {
        color: "blue.400",
        _hover: {
          color: "white",
        },
      },
      _hover: {
        textDecoration: "none",
        bg: "blue.400",
        color: "white",
      },
    },
  },
};

export default Link;
