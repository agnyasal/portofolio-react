import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box
      position={"fixed"}
      width={{ base: "100%", lg: "100%" }}
      borderBottom={"solid"}
      bg="teal.500"
      color="white"
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Flex mr={5}>
        <Text fontSize="xl" fontWeight="bold">
          My Portfolio
        </Text>
      </Flex>

      <Box display={{ base: "flex", md: "flex" }} justifyContent="flex-end">
        <Link href="#about" margin={2} _hover={{ cursor: "pointer" }}>
          ABOUT
        </Link>
        <Link href="#skills" margin={2} _hover={{ cursor: "pointer" }}>
          SKILLS
        </Link>
        <Link href="#contact" margin={2} _hover={{ cursor: "pointer" }}>
          CONTACT
        </Link>
      </Box>
    </Box>
  );
}

export default Navbar;
