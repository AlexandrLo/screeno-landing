import React from "react";
import { Box } from "@chakra-ui/react";
import FeaturesBig from "components/FeaturesBig";
import Gallery from "components/Gallery";
import FeaturesGrid from "blocks/FeaturesGrid";
import Hero from "blocks/Hero";
import LogoCloud from "blocks/LogoCloud";
import NavBar from "blocks/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoCloud />
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
