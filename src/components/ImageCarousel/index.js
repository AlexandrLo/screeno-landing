import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

function ImageCarousel({ images, reverse = false, ...props }) {
  const [elementY, setElementY] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  const ref = useRef();

  const onResize = () => {
    setElementY(
      ref.current.getBoundingClientRect().top + window.scrollY ||
        window.pageYOffset,
    );
    console.log(ref.current.scrollWidth);
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
    setTimeout(() => {
      setElementWidth(ref.current.scrollWidth);
    }, 1000);
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  const { scrollY } = useViewportScroll();

  const initialScroll = elementY - clientHeight;
  const finalScroll = elementY + clientHeight;
  const initialTransform = 0;
  const finalTransform = -elementWidth + clientWidth;
  const transformRange = [initialTransform, finalTransform];
  const transform = useTransform(
    scrollY,
    [initialScroll, finalScroll],
    reverse ? transformRange.reverse() : transformRange,
  );
  const x = useSpring(transform, { stiffness: 400, damping: 90 });

  return (
    <Box overflowX="clip">
      <motion.div ref={ref} style={{ x }}>
        <HStack spacing={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}>
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

export default ImageCarousel;
