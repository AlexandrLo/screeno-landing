import React from "react";

import FeaturesBig from "blocks/FeaturesBig";
import FeaturesGrid from "blocks/FeaturesGrid";
import Gallery from "blocks/Gallery";
import Hero from "blocks/Hero";
import LogoCloud from "blocks/LogoCloud";

function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <FeaturesGrid />
      <FeaturesBig />
      <Gallery />
    </>
  );
}

export default HomePage;
