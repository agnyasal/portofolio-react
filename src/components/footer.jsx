import { Box, Divider, Link, Text, VStack } from "@chakra-ui/react";

function footer() {
  return (
    <Box p={4} bg="teal.500" color="white">
      <VStack align="center" spacing={4}>
        <Text fontSize="xs" fontWeight="bold">
          Agnya Salsabila Setiadi
        </Text>
        <Divider />
        <Text>&copy; 2023 My Company. All rights reserved.</Text>
        <Link href="#">Terms of Service</Link>
        <Link href="#">Privacy Policy</Link>
      </VStack>
    </Box>
  );
}

export default footer;
