import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import FeaturesGrid from "components/FeaturesGrid";
import FeaturesBig from "components/FeaturesBig";
import Gallery from "components/Gallery";
import NavBar from "blocks/NavBar";

function HomePage() {
  return (
        <Hero />
        <LogoCloud />
    <>
      <NavBar />
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
