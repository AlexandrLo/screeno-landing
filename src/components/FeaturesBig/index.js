import React from "react";
import {
  Container,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  Box,
  HStack,
  Circle,
} from "@chakra-ui/react";
import Feature from "./Feature";
import FeatureImage1 from "assets/feature-image-1.png";
import FeatureImage2 from "assets/feature-image-2.png";
import DonateOverlay from "./DonateOverlay";
import Parallax from "components/Parallax";
import { EnvelopeSimple } from "phosphor-react";
import HoverBadge from "components/HoverBadge";

function FeaturesBig() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3rem", md: "6.5rem" }}
    >
      <Heading
        as="h1"
        size="h1"
        color="white"
        pb={{ base: "3rem", md: "6.5rem" }}
        textAlign={{ base: "start", md: "center" }}
      >
        We help you grow
      </Heading>
      <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
        <Feature
          heading="Monetize your way"
          text="Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive experiences for your subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day setup."
          imageSrc={FeatureImage1}
          imageAlt="Feature Image 1"
          to="/"
        >
          <Parallax position="absolute" top="-1rem" left="-1rem">
            <DonateOverlay />
          </Parallax>
        </Feature>
        <Feature
          heading="Optimized for growth"
          text="The Screeno ecosystem is designed to help you generate profit. Set up complete sales and marketing funnels with ease using the Screeno built-in marketing tools and integrations. Generate leads and convert your audience into paying subscribers, at no extra cost."
          imageSrc={FeatureImage2}
          imageAlt="Feature Image 2"
          reverse="true"
          to="/"
        >
          <Box
            position="absolute"
            top="-1rem"
            right="-1rem"
            transform="auto"
            scale={["0.5", "0.75", "1"]}
            translateX={["25%", "12.5%", "0"]}
            translateY={["-25%", "-12.5%", "0"]}
          >
            <HoverBadge borderRadius="0.75rem" p="1rem" fontSize="32px">
              <EnvelopeSimple />
              <Circle
                size="0.75rem"
                bg="blue.400"
                position="absolute"
                top="1rem"
                right="0.85rem"
                border="2px"
                borderColor="white"
              />
            </HoverBadge>
          </Box>
        </Feature>
      </VStack>
    </Container>
  );
}

export default FeaturesBig;
