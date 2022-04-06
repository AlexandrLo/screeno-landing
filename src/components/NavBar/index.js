import React from "react";
import { Container, Box, Button, HStack, Link, Show } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "assets/logo.svg";
import MobileNav from "./MobileNav";

function NavBar() {
  const links = [
    {
      name: "Examples",
      path: "/examples",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <Box>
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          <HStack spacing="6rem">
            <Link as={NavLink} to="/">
              <Logo />
            </Link>
            <Show above="lg">
              <HStack spacing="5.25rem">
                {links.map((link) => {
                  return (
                    <Button
                      key={`nav${link.path}`}
                      as={NavLink}
                      to={link.path}
                      variant="link"
                      colorScheme="whiteAlpha"
                      color="white"
                    >
                      {link.name}
                    </Button>
                  );
                })}
              </HStack>
            </Show>
          </HStack>
          <Show above="lg">
            <HStack spacing="1.125rem">
              <Button variant="ghost" colorScheme="whiteAlpha" color="white">
                Log In
              </Button>
              <Button colorScheme="blue">Start Free Trial</Button>
            </HStack>
          </Show>
          <MobileNav links={links} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
