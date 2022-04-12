import React from "react";

import PropTypes from "prop-types";
import { Box, HStack } from "@chakra-ui/react";

function HoverBadge(props) {
  return (
    <Box
      bg="white"
      lineHeight="1.5"
      borderRadius="full"
      textTransform="uppercase"
      fontWeight="700"
      px="1rem"
      py="0.25rem"
      transition="all ease 200ms"
      userSelect="none"
      boxShadow="2xl"
      transform="auto"
      scale={["0.75", "1"]}
      _hover={{
        transform: "scale(1.05)",
      }}
      {...props}
    >
      <HStack>{props.children}</HStack>
    </Box>
  );
}

HoverBadge.propTypes = {
  children: PropTypes.node,
};

export default HoverBadge;
