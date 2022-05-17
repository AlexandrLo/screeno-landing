import React from "react";

import PropTypes from "prop-types";
import { HStack, Image } from "@chakra-ui/react";

function StaticSlider({ images, reverse = false, sizes }) {
  return (
    <HStack
      spacing={sizes.spacings}
      justifyContent="center"
      pl={reverse ? "0" : sizes.offsets}
      pr={!reverse ? "0" : sizes.offsets}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          w={sizes.imageWidths}
          borderRadius={sizes.spacings}
        />
      ))}
    </HStack>
  );
}

StaticSlider.propTypes = {
  images: PropTypes.array,
  reverse: PropTypes.bool,
  sizes: PropTypes.shape({
    spacings: PropTypes.arrayOf(PropTypes.string),
    imageWidths: PropTypes.arrayOf(PropTypes.string),
    offsets: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default StaticSlider;
