import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "components/NavBar";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";

function HomePage() {
  return (
    <div>
      <Box bg="gray.900">
        <NavBar />
        <Hero />
        <LogoCloud />
      </Box>
    </div>
  );
}

export default HomePage;
