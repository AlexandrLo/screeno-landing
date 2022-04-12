import React from "react";

import {
  Box,
  Container,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";

function LogoCloud() {
  // Import all partner logos
  var req = require.context("assets/partnerLogos", false, /\.svg/);
  const logos = req.keys().map(req);

  // Init responsive logo size
  const svgHeight = useBreakpointValue([
    "16px",
    "20px",
    "24px",
    "28px",
    "32px",
  ]);

  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        py={{ base: "3.125rem", md: "4.25rem" }}
      >
        <Wrap
          spacing={{ base: "3rem", md: "3rem" }}
          justify={{ base: "center", xl: "space-between" }}
        >
          {logos.map((logo, index) => (
            <WrapItem key={index}>
              {logo.default({ width: "100%", height: svgHeight })}
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}

export default LogoCloud;
