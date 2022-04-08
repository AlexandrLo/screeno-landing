import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import ImageCarousel from "components/ImageCarousel";
import React from "react";

function index() {
  var req = require.context("assets/thumbnails", false, /\.png$/);
  const images = req.keys().map(req);

  return (
    <Box py={{ base: "3rem", md: "6.5rem" }}>
      <VStack spacing={{ base: "3rem", md: "6.5rem" }}>
        <VStack spacing="1rem">
          <Heading as="h1" size="h1">
            See what's next
          </Heading>
          <Text>Watch your favorite content on our platform</Text>
        </VStack>
        <VStack spacing={["0.75rem", "1rem", "1.25rem", "1.5rem", "1.75rem"]}>
          <ImageCarousel
            reverse={false}
            images={images.slice(0, Math.floor(images.length / 2))}
          />
          <ImageCarousel
            reverse={true}
            images={images.slice(Math.floor(images.length / 2))}
          />
        </VStack>
      </VStack>
    </Box>
  );
}

export default index;
