import React, { useRef } from "react";

import { List } from "phosphor-react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Hide,
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

function MobileNav({ links, ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Hide above="lg">
      {/* Menu button */}
      <Button
        variant="circle"
        px="0"
        colorScheme="whiteAlpha"
        color="white"
        onClick={onOpen}
      >
        <List size={28} weight="bold" />
      </Button>
      {/* Menu overlay */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        {...props}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerHeader>
            <HStack justify="end" align="center">
              <DrawerCloseButton position="initial" color="white" />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            {/* Navigation links */}
            <VStack>
              {links.map((link) => {
                return (
                  <Link
                    variant="menu"
                    as={NavLink}
                    key={`mobile-nav${link.path}`}
                    to={link.path}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </VStack>
            {/* Login buttons */}
            <VStack w="100%" alignItems="stretch" py="3rem">
              <Button as={NavLink} to="/signup" colorScheme="blue">
                Start Free Trial
              </Button>
              <Button
                as={NavLink}
                to="/login"
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
              >
                Log In
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
}

MobileNav.propTypes = {
  links: PropTypes.array,
};

export default MobileNav;
