import React from "react";

import { ArrowRight } from "phosphor-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useToken,
} from "@chakra-ui/react";

function Feature({
  heading = "Heading",
  text = "Text",
  imageSrc,
  imageAlt = "",
  to = "/",
  reverse = false,
  children,
  ...props
}) {
  const [blue400] = useToken("colors", ["blue.400"]);

  return (
    <Stack
      w="100%"
      direction={{
        base: "column-reverse",
        xl: reverse ? "row-reverse" : "row",
      }}
      justifyContent={{ base: "start", md: "center", xl: "space-between" }}
      alignItems="center"
      spacing={["1.5rem", "3rem"]}
      {...props}
    >
      {/* Text */}
      <Box maxW={{ base: "100%", xl: "440px" }}>
        <VStack alignItems="start" spacing="1.5rem">
          <Heading as="h2" size="h2" color="white">
            {heading}
          </Heading>
          <Text color="white" lineHeight="1.5">
            {text}
          </Text>
          <Link color="white" as={NavLink} to={to}>
            <HStack>
              <Text fontWeight="700">Learn More</Text>
              <ArrowRight color={blue400} />
            </HStack>
          </Link>
        </VStack>
      </Box>
      {/* Image */}
      <Box
        maxW={{ base: "100%", xl: "555px" }}
        ml={reverse ? "0" : "1rem"}
        mr={reverse ? "1rem" : "0"}
      >
        <Box position="relative">
          <Image
            rounded={["1rem", "1.5rem", "2rem"]}
            src={imageSrc}
            alt={imageAlt}
          />
          {children}
        </Box>
      </Box>
    </Stack>
  );
}

Feature.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  to: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Feature;
