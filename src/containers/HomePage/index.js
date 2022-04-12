import React from "react";
import Gallery from "components/Gallery";

import FeaturesBig from "blocks/FeaturesBig";
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
      <FeaturesBig />
      <Gallery />
    </>
  );
}

export default HomePage;
