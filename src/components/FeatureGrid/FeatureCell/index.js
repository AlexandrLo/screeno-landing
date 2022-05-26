import React from "react";

import PropTypes from "prop-types";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

function FeatureCell({ icon, heading, text, ...props }) {
  return (
    <VStack alignItems="start" spacing="1rem" {...props}>
      <HStack>
        <Box color="blue.400" fontSize="1.5rem">
          {icon}
        </Box>
        <Heading as="h3" size="h3">
          {heading}
        </Heading>
      </HStack>
      <Text>{text}</Text>
    </VStack>
  );
}

FeatureCell.propTypes = {
  icon: PropTypes.node,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default FeatureCell;
