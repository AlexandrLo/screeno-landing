import React from "react";

import FeaturesBig from "blocks/FeaturesBig";
import FeaturesGrid from "blocks/FeaturesGrid";
import Footer from "blocks/Footer";
import Gallery from "blocks/Gallery";
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
      <Footer />
    </>
  );
}

export default HomePage;
