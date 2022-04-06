import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Box, useBreakpointValue } from "@chakra-ui/react";

function Parallax({
  children,
  offset = { base: 15, md: 25, xl: 50 },
  ...props
}) {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const offsetBreakpoints =
    typeof offset === "object" ? offset : { base: offset };
  const responsiveOffset = useBreakpointValue(offsetBreakpoints);

  const onResize = () => {
    setElementTop(
      ref.current.getBoundingClientRect().top + window.scrollY ||
        window.pageYOffset,
    );
    setClientHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + responsiveOffset;
  const yTransform = useTransform(
    scrollY,
    [initial, final],
    [responsiveOffset, -responsiveOffset],
  );
  const y = useSpring(yTransform, { stiffness: 400, damping: 90 });

  return (
    <Box {...props}>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </Box>
  );
}

Parallax.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
};

export default Parallax;
