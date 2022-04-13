import React, { useLayoutEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";

function Parallax({
  children,
  offset = { base: 15, md: 25, xl: 50 },
  motionDirection = "y",
  scrollDirection = "y",
  spring = true,
  ...props
}) {
  // Disable motion if reduce motion enabled
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <Box {...props}>{children}</Box>;
  }

  const responsiveOffset = useBreakpointValue(
    typeof offset === "object" ? offset : { base: offset },
  );
  const { scrollY, scrollX } = useViewportScroll();
  const ref = useRef(null);
  const [elementCoord, setElementCoord] = useState(0);
  const [clientDimension, setClientDimension] = useState(0);

  /**
   * Updates coordinates
   *
   */
  const onResize = () => {
    if (motionDirection === "y") {
      setElementCoord(
        ref.current.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset,
      );
      setClientDimension(window.innerHeight);
    } else if (motionDirection === "x") {
      setElementCoord(
        ref.current.getBoundingClientRect().left + window.scrollX ||
          window.pageXOffset,
      );
      setClientDimension(window.innerWidth);
    }
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Init motion
  const initial = elementCoord - clientDimension;
  const final = elementCoord + responsiveOffset;
  const transform = useTransform(
    scrollDirection === "y" ? scrollY : scrollX,
    [initial, final],
    [responsiveOffset, -responsiveOffset],
  );
  const transformSpring = useSpring(transform, { stiffness: 400, damping: 90 });

  return (
    <Box {...props}>
      <motion.div
        ref={ref}
        style={{ [motionDirection]: spring ? transformSpring : transform }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

Parallax.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
  motionDirection: PropTypes.oneOf(["x", "y"]),
  scrollDirection: PropTypes.oneOf(["x", "y"]),
  spring: PropTypes.bool,
};

export default Parallax;
