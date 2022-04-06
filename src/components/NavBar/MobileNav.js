import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Button,
  HStack,
  VStack,
  Hide,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { List } from "phosphor-react";
import NavItem from "./NavItem";

function MobileNav({ links, ...props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Hide above="lg">
      <Button
        variant="circle"
        px="0"
        colorScheme="whiteAlpha"
        color="white"
        onClick={onOpen}
      >
        <List size={28} weight="bold" />
      </Button>
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
            <VStack>
              {links.map((link) => {
                return (
                  <NavItem key={`mobile-nav${link.path}`} to={link.path}>
                    {link.name}
                  </NavItem>
                );
              })}
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
