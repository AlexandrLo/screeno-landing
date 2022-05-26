import React, { useEffect, useState } from "react";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";

import ImageCarousel from "./ImageCarousel";
import previewsData from "assets/json/video-previews.json";

function Gallery() {
  const [previewRows, setPreviewRows] = useState([[], []]);

  useEffect(() => {
    // Slice video previews data in two rows
    setPreviewRows([
      previewsData.slice(0, Math.floor(previewsData.length / 2)),
      previewsData.slice(Math.floor(previewsData.length / 2)),
    ]);
  }, []);

  return (
    <Box py={{ base: "3rem", md: "6.5rem" }}>
      <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
        <VStack spacing="1rem">
          <Heading as="h1" size="h1">
            See what&apos;s next
          </Heading>
          <Text>Watch your favorite content on our platform</Text>
        </VStack>
        <VStack spacing={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}>
          <ImageCarousel reverse={false} images={previewRows[0]} />
          <ImageCarousel reverse={true} images={previewRows[1]} />
        </VStack>
      </VStack>
    </Box>
  );
}

export default Gallery;
