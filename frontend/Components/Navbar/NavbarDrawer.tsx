import React, { useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
} from "@chakra-ui/react";

interface NavbarDrawerProps{
  isOpen:boolean, onClose:()=>void
}
function NavbarDrawer({ isOpen, onClose }:NavbarDrawerProps) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <h1>HEELO</h1>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );

}

export default NavbarDrawer;
