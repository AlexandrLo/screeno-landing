import React, { useState } from "react";

import {
  Broadcast,
  ChartLine,
  CurrencyCircleDollar,
  DesktopTower,
  UploadSimple,
  VideoCamera,
} from "phosphor-react";
import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import FeatureCell from "./FeatureCell";

function FeaturesGrid() {
  const [features] = useState([
    {
      icon: <UploadSimple />,
      heading: "Upload & Organize",
      text: "Upload in bulk, organize content in categories, add custom filters & upload extras",
    },
    {
      icon: <VideoCamera />,
      heading: "Stream On-Demand",
      text: "Showcase your content in a beautiful on-demand video catalog.",
    },
    {
      icon: <Broadcast />,
      heading: "Stream Live",
      text: "Schedule events in advance & build excitement with a countdown overlay.",
    },
    {
      icon: <CurrencyCircleDollar />,
      heading: "Monetization",
      text: "Offer subscriptions or one-time purchases. Accept credit cards & PayPal.",
    },
    {
      icon: <ChartLine />,
      heading: "Analytics",
      text: "Know what your audience likes & how your content is performing.",
    },
    {
      icon: <DesktopTower />,
      heading: "For all devices",
      text: "Get organized on all devices",
    },
  ]);

  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      py={{ base: "3rem", md: "6.5rem" }}
    >
      <VStack spacing={{ base: "3rem", md: "7.5rem" }}>
        {/* Heading */}
        <VStack
          spacing="1rem"
          alignItems={{ base: "start", md: "center" }}
          textAlign={{ base: "start", md: "center" }}
        >
          <Heading as="h1" size="h1">
            All-in-one platform
          </Heading>
          <Text lineHeight="1.5">
            You take care of the video quality and we take care of everything
            else
          </Text>
        </VStack>
        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "3rem", md: "5rem", xl: "7.5rem" }}
          maxW="57rem"
        >
          {features.map((feature, index) => (
            <FeatureCell key={`feature-${index}`} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}

export default FeaturesGrid;
