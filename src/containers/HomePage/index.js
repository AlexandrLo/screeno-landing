import React from "react";
import { Box } from "@chakra-ui/react";
import LogoCloud from "components/LogoCloud";
import FeaturesGrid from "components/FeaturesGrid";
import FeaturesBig from "components/FeaturesBig";
import Gallery from "components/Gallery";
import Hero from "blocks/Hero";
import NavBar from "blocks/NavBar";

function HomePage() {
  return (
        <LogoCloud />
    <>
      <NavBar />
      <Hero />
      <FeaturesGrid />
      <Box bg="gray.900">
        <FeaturesBig />
      </Box>
      <Gallery />
      <Box bg="gray.100" h={"560px"} />
    </>
  );
}

export default HomePage;
