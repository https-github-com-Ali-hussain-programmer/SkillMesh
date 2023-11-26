import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Button,
  DrawerOverlay,
} from "@chakra-ui/react";
import {ActiveLinks} from '../../Components';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Category } from "@/utils/data";
interface NavbarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
function NavbarDrawer({ isOpen, onClose }: NavbarDrawerProps) {
  const pathname = usePathname();
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>
            <span className="text-3xl font-bold">
              <ActiveLinks url={"/"} pathname={""}>
                SkillMesh.
              </ActiveLinks>
            </span>
          </DrawerHeader>

          <DrawerBody>
            <div className="">
              <h1 className=" px-3 font-medium text-xl text-[#A835C4] py-2">
                {" "}
                <ActiveLinks url={"/category"} pathname={pathname}>
                  Categories
                </ActiveLinks>{" "}
              </h1>
            </div>
            <Accordion allowToggle={true}>
              {Category.map((categoryItem, index) => (
                <AccordionItem key={index} className="border-none">
                  {({ isDisabled }) => (
                    <>
                      <h2 className="text-md font-bold">
                        <AccordionButton>
                          <span>{categoryItem.category}</span>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        <div className="item flex gap-5 flex-col">
                          {categoryItem.subfields.map((subfield, subIndex) => (
                            <span className="text-lightGrey" key={subIndex}>
                              <ActiveLinks
                                pathname={pathname}
                                url={`/category/${subfield}`}
                              >
                                {subfield}
                              </ActiveLinks>
                            </span>
                          ))}
                        </div>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue">Sign Out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavbarDrawer;
