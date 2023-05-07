import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack background="white" color="black" borderBottomRadius="xl">
      <Image src={imageSrc} borderBottomRadius="xl"></Image>
      <VStack spacing="16px" p="5" alignItems="start">
        <Heading as="h4" size="lg">
          {title}
        </Heading>
        <Text size="md" fontSize="18px" fontWeight="medium">
          {description}
        </Text>
        <Link href="" fontWeight="semibold" fontSize="xl">
          <HStack alignItems="center">
            <Text align="left" alignSelf="center">
              see more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
