import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      // maxidth="1280px"
      // style={{ outline: "2px solid white" }}
      // style={{ overFlow: "hidden" }}
    >
      <VStack
        maxWidth="1280px"
        // style={{ outline: "2px solid white" }}
        minHeight="100vh"
        {...boxProps}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
