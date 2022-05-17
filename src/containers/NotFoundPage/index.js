import React from "react";

import { Link } from "react-router-dom";
import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <Box bg="gray.900">
      <Container
        maxW={{ base: "container.sm", xl: "container.xl" }}
        pt={{ base: "3rem", md: "4.75rem" }}
        pb={{ base: "3rem", xl: "6.25rem" }}
      >
        <VStack spacing="2rem" py="4rem">
          <Heading as="h1" size="h1" color="white">
            Page Not Found...
          </Heading>
          <Button as={Link} to="/" colorScheme="blue">
            Back to Homepage
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
