import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "./DrawerComponent";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import React from "react";
import { Show, Hide } from "@chakra-ui/react";
import socials from "../data/data.js";

export default function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      sx={{
        "@media (min-width: 770px)": {
          display: "none",
        },
      }}
    >
      {/* // Menu Button */}
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="18px" color="black" />
      </Button>
      {/* // Drawer Component */}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        title="contact me"
        footer={<p>Pete • © 2022</p>}
      >
        <VStack alignItems="left" spacing="25px">
          {
            /* Add social media links based on the `socials` data */
            socials.map((social, index, array) => {
              return (
                <a href={social.url} key={index} target="_blank">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              );
            })
          }
        </VStack>
      </Drawer>
    </Flex>
  );
}
