import React from "react";
import { Text, VStack, HStack } from "@chakra-ui/react";

function DonateOverlay(props) {
  const donations = [45, 75, 15];
  return (
    <VStack
      w="263px"
      bg="white"
      p="2rem"
      borderRadius="1.75rem"
      fontWeight="700"
      spacing="1.25rem"
      boxShadow="2xl"
      transform="auto"
      scale={["0.5", "0.75", "1"]}
      translateX={["-25%", "-12.5%", "0"]}
      translateY={["-25%", "-12.5%", "0"]}
      {...props}
    >
      {donations.map((donation) => (
        <HStack
          key={`donation${donation}`}
          w="100%"
          justifyContent="space-between"
          p="1rem"
          bg="gray.100"
          borderRadius="0.75rem"
          transition="all ease 200ms"
          userSelect="none"
          _hover={{
            transform: "translate(0.5rem, -0.5rem)",
            boxShadow: "-0.5rem 0.5rem 6px rgba(0, 0, 0, 0.05)",
            bg: "blue.50",
            color: "blue.400",
          }}
          _active={{
            transform: "translate(0.3rem, -0.3rem)",
            boxShadow: "-0.3rem 0.3rem 4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Text>Donate</Text>
          <Text>${donation}</Text>
        </HStack>
      ))}
    </VStack>
  );
}

export default DonateOverlay;
