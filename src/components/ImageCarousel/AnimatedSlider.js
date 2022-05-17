import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";
import { HStack, Image } from "@chakra-ui/react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

function AnimatedSlider({ images, reverse = false, sizes }) {
  const [elementY, setElementY] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const { scrollY } = useViewportScroll();
  const ref = useRef();

  useEffect(() => {
    window.addEventListener("resize", setDimensions);
    return () => window.removeEventListener("resize", setDimensions);
  }, []);

  const setDimensions = useDebouncedCallback(() => {
    setElementY(
      ref.current.getBoundingClientRect().top + window.scrollY ||
        window.pageYOffset,
    );
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
    setElementWidth(ref.current.scrollWidth);
  }, 300);

  const scrollRange = [elementY - clientHeight, elementY + clientHeight];
  const transformRange = [0, -elementWidth + clientWidth];
  const transform = useTransform(
    scrollY,
    scrollRange,
    reverse ? transformRange.reverse() : transformRange,
  );
  const transformSpring = useSpring(transform, { stiffness: 300, damping: 90 });

  return (
    <motion.div ref={ref} style={{ x: transformSpring }}>
      <HStack spacing={sizes.spacings} onLoad={setDimensions}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            w={sizes.imageWidths}
            borderRadius={sizes.spacings}
          />
        ))}
      </HStack>
    </motion.div>
  );
}

AnimatedSlider.propTypes = {
  images: PropTypes.array,
  reverse: PropTypes.bool,
  sizes: PropTypes.shape({
    spacings: PropTypes.arrayOf(PropTypes.string),
    imageWidths: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default AnimatedSlider;
