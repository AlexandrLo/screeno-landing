import React from "react";

import { Box, Container, Image, Wrap, WrapItem } from "@chakra-ui/react";

import partnerLogos from "assets/json/partner-logos.json";

function LogoCloud() {
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
          {partnerLogos.map((logo, index) => (
            <WrapItem key={index}>
              <Image
                src={logo}
                w="100%"
                h={["16px", "20px", "24px", "28px", "32px"]}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}

export default LogoCloud;
