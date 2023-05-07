import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileDrawer from "./Mobile-drawer";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  HStack,
  Show,
} from "@chakra-ui/react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import socials from "../data/data.js";
// import { Show, Hide } from "@chakra-ui/react";

const Header = () => {
  const [anchor, setAnchor] = React.useState("");
  const scrollDir = useScrollDirection();

  const handleClick = (e) => {
    const anchorVal = e.target.classList[0];
    console.log(setAnchor(anchorVal));
    const id = `${anchorVal}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // header show / hide animation depending on scroll direction
  const stylesTranslateY = {
    translateY: "-200px",
  };
  const stylesTranslate = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    translateY: "0",
    transitionProperty: "transform",
    transitionDuration: "10.9s",
    transitionTimingFunction: "ease-out",
    backgroundColor: "#18181b",
    zIndex: "10",
  };
  return (
    <Box sx={scrollDir == "up" ? stylesTranslate : stylesTranslateY}>
      <Box color="white" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Show above="md">
            <nav>
              {
                /* Add social media links based on the `socials` data */
                socials.map((social, index, array) => {
                  return (
                    <a
                      href={social.url}
                      key={index}
                      style={{
                        marginRight: "30px",
                      }}
                    >
                      <FontAwesomeIcon icon={social.icon} size="2x" />
                    </a>
                  );
                })
              }
            </nav>
          </Show>

          <nav>
            <HStack spacing="30px" fontWeight="semibold">
              {/* Add links to Projects and Contact me section */}
              <a
                // style={stylesButton}
                href={`#${anchor}`}
                className="projects"
                onClick={handleClick}
              >
                Projects
              </a>
              <a
                // style={stylesButton}
                href={`#${anchor}`}
                className="contactme"
                onClick={handleClick}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
          <MobileDrawer />
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
