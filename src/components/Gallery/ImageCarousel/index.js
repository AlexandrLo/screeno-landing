import React from "react";

import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useReducedMotion } from "framer-motion";

import AnimatedSlider from "./AnimatedSlider";
import StaticSlider from "./StaticSlider";

function ImageCarousel({ images, reverse = false }) {
  // Disable motion if reduce motion enabled
  const prefersReducedMotion = useReducedMotion();

  const spacings = [
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "1.75rem",
  ];
  const imageWidths = [
    "10rem",
    "12.5rem",
    "15rem",
    "17.5rem",
    "20rem",
    "22.5rem",
  ];
  const offsets = imageWidths.map(
    (width, i) => `${parseInt(width) / 2 + parseInt(spacings[i])}rem`,
  );

  return (
    <Box overflowX="hidden">
      {prefersReducedMotion ? (
        <StaticSlider
          images={images}
          reverse={reverse}
          sizes={{ spacings, imageWidths, offsets }}
        />
      ) : (
        <AnimatedSlider
          images={images}
          reverse={reverse}
          sizes={{ spacings, imageWidths }}
        />
      )}
    </Box>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
  reverse: PropTypes.bool,
};

export default ImageCarousel;
