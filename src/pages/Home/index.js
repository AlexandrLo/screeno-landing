import React from "react";

import FeaturesBig from "components/FeatureImages";
import FeaturesGrid from "components/FeatureGrid";
import Gallery from "components/Gallery";
import Hero from "components/Hero";
import LogoCloud from "components/LogoCloud";

function Home() {
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

export default Home;
