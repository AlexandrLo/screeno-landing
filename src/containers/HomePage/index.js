import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "components/NavBar";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import FeaturesGrid from "components/FeaturesGrid";
import FeaturesBig from "components/FeaturesBig";

function HomePage() {
  return (
    <div>
      <Box bg="gray.900">
        <NavBar />
        <Hero />
        <LogoCloud />
      </Box>
      <FeaturesGrid />
      <Box bg="gray.900">
        <FeaturesBig />
      </Box>
    </div>
  );
}

export default HomePage;
