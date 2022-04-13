import React, { useLayoutEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";
import { Box, HStack, Image } from "@chakra-ui/react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

function ImageCarousel({ images, reverse = false, ...props }) {
  // Disable motion if reduce motion enabled
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Box overflowX="clip" {...props}>
        <HStack
          spacing={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}
          justifyContent="center"
          pl={
            reverse
              ? "0"
              : ["80px", "100px", "120px", "140px", "160px", "180px"]
          }
          pr={
            !reverse
              ? "0"
              : ["80px", "100px", "120px", "140px", "160px", "180px"]
          }
        >
          {images.map((image, index) => (
            <Image
              w={["160px", "200px", "240px", "280px", "320px", "360px"]}
              borderRadius={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}
              key={`image-${index}`}
              src={image}
            />
          ))}
        </HStack>
      </Box>
    );
  }

  const [elementY, setElementY] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const { scrollY } = useViewportScroll();
  const ref = useRef();

  const setDimensions = () => {
    setElementY(
      ref.current.getBoundingClientRect().top + window.scrollY ||
        window.pageYOffset,
    );
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
    setElementWidth(ref.current.scrollWidth);
  };

  useLayoutEffect(() => {
    setDimensions();
    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, [ref]);

  const scrollRange = [elementY - clientHeight, elementY + clientHeight];
  const transformRange = [0, -elementWidth + clientWidth];
  const transform = useTransform(
    scrollY,
    scrollRange,
    reverse ? transformRange.reverse() : transformRange,
  );
  const transformSpring = useSpring(transform, { stiffness: 400, damping: 90 });

  return (
    <Box overflowX="clip" {...props}>
      <motion.div ref={ref} style={{ x: transformSpring }}>
        <HStack
          spacing={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}
          onLoad={useDebouncedCallback(() => {
            setElementWidth(ref.current.scrollWidth);
          }, 1000)}
        >
          {images.map((image, index) => (
            <Image
              w={["160px", "200px", "240px", "280px", "320px", "360px"]}
              borderRadius={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}
              key={`image-${index}`}
              src={image}
            />
          ))}
        </HStack>
      </motion.div>
    </Box>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
  reverse: PropTypes.bool,
};

export default ImageCarousel;
