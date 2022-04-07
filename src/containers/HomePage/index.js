import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "components/NavBar";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";
import FeaturesGrid from "components/FeaturesGrid";

function HomePage() {
  return (
    <div>
      <Box bg="gray.900">
        <NavBar />
        <Hero />
        <LogoCloud />
      </Box>
      <FeaturesGrid />
    </div>
  );
}

export default HomePage;
