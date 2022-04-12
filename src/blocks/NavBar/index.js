import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Box, Button, Container, HStack, Link, Show } from "@chakra-ui/react";

import LogoWhite from "assets/logo-white.svg";
import MobileNav from "./MobileNav";

function NavBar() {
  const [navLinks] = useState([
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
  ]);

  return (
    <Box bg="gray.900">
      <Container maxW="container.xl" py="1.5rem">
        <HStack justifyContent="space-between" spacing="6rem">
          {/* Left links */}
          <HStack spacing="6rem">
            <Link as={NavLink} to="/">
              <LogoWhite />
            </Link>
            <Show above="lg">
              <HStack spacing="5.25rem">
                {navLinks.map((link) => {
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
          {/* Right Links */}
          <Show above="lg">
            <HStack spacing="1.125rem">
              <Button
                as={NavLink}
                to="/login"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
              >
                Log In
              </Button>
              <Button as={NavLink} to="/signup" colorScheme="blue">
                Start Free Trial
              </Button>
            </HStack>
          </Show>
          {/* Mobile menu */}
          <MobileNav links={navLinks} />
        </HStack>
      </Container>
    </Box>
  );
}

export default NavBar;
