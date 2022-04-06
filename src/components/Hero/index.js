import React from "react";
import {
  Box,
  Container,
  Text,
  HStack,
  VStack,
  Stack,
  Button,
  Heading,
  Show,
  Image,
  Circle,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import HeroImageBig from "assets/hero-image-big.png";
import HeroImageSmall from "assets/hero-image-small.png";
import HoverBadge from "components/HoverBadge";
import Parallax from "components/Parallax";

function Hero() {
  return (
    <Container
      maxW={{ base: "container.sm", xl: "container.xl" }}
      pt={{ base: "3rem", md: "4.75rem" }}
      pb={{ base: "3rem", xl: "6.25rem" }}
    >
      <Stack
        direction={{ base: "column", xl: "row" }}
        justifyContent={{ base: "start", md: "center", xl: "space-between" }}
        alignItems={{ base: "center", xl: "end" }}
        spacing="3rem"
      >
        {/* Text */}
        <VStack
          maxW={{ xl: "27.5rem" }}
          alignItems={{ base: "start", md: "center", xl: "start" }}
          textAlign={{ base: "start", md: "center", xl: "start" }}
          spacing="3rem"
        >
          <VStack spacing="1rem">
            <Heading as="h1" size="md" color="white">
              Reach more people in real time
            </Heading>
            <Text color="white" lineHeight="1.5">
              The Screeno ecosystem is designed to help you generate profit. Set
              up complete sales and marketing funnels with ease using the
              Screeno
            </Text>
          </VStack>
          <Wrap spacing="1.875rem">
            <WrapItem>
              <Button colorScheme="blue">Start Free Trial</Button>
            </WrapItem>

            <WrapItem>
              <Button variant="outline" colorScheme="white">
                Log In
              </Button>
            </WrapItem>
          </Wrap>
        </VStack>
        {/* Image */}
        <Show>
          <Box w="100%" maxW="543px" p={{ base: "1rem", md: "0" }}>
            <Box position="relative">
              <Image src={HeroImageBig} alt="Hero image" />
              <HoverBadge right="-1rem" top="-1rem">
                <Circle size="6px" bg="red" />
                <Text>Live</Text>
              </HoverBadge>
              <Parallax position="absolute" left="-1rem" bottom="-2.5rem">
                <Image
                  src={HeroImageSmall}
                  maxW={["7rem", "8rem", "10rem", "15rem", "auto"]}
                  shadow="2xl"
                  alt="Hero image"
                />
              </Parallax>
            </Box>
          </Box>
        </Show>
      </Stack>
    </Container>
  );
}

export default Hero;
