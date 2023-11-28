import {
  Heading,
  VStack,
  FormLabel,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <VStack paddingTop={"30px"} align="stretch" spacing={8} p={8} id="contact">
      <Heading textAlign={"center"}>Contact Me 📩</Heading>
      <Text textAlign={"center"}>
        Feel free to reach out by submitting the form below, and I will get back
        to you as soon as possible😊
      </Text>
      <VStack align="start" spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
          <FormLabel>Name</FormLabel>
          <Input type="Name" />
          <FormLabel>Subject</FormLabel>
          <Input type="Subject" />
          <FormLabel>Message</FormLabel>
          <Input type="Message" />
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default Contact;
