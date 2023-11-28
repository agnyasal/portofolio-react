import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Me from "../../public/Me.jpeg";

function AboutMe() {
  return (
    <Flex paddingTop={"40px"} w={"100%"} id="about">
      <Box paddingBottom={"12px"} bg={"teal.500"} pt={"20px"}>
        <Box
          display={"flex"}
          width={"100vw"}
          height={{ base: "550px", lg: "60vh" }}
        >
          <Box width={"50%"} marginTop={{ base: "10px", lg: "15px" }}>
            <Heading marginLeft={"20px"} as="h1" size="xl" color={"white"}>
              Hello 🙌🏻,
              <br /> i am agnyasal
            </Heading>
            <Text
              fontSize="lg"
              color={"white"}
              marginTop={"20px"}
              marginLeft={"20px"}
            >
              Fullstack Developer
            </Text>

            <Text></Text>

            <Text
              color={"white"}
              marginTop={"20px"}
              pt={{ base: "20px", lg: "unset" }}
              width={{ base: "350px", lg: "600px" }}
              marginLeft={"20px"}
              textAlign={{ base: "center", lg: "unset" }}
            >
              As a Full Stack Web Developer, I am a seasoned professional with
              expertise in both Front-end and Back-end development. Proficient
              in HTML, CSS, and JavaScript frameworks such as React.js and
              Node.js, I specialize in creating intuitive user interfaces and
              optimizing server-side functionalities. My skills encompass
              responsive design, API integration, and a commitment to staying
              updated with the latest industry standards. With a solid
              foundation in web technologies and a keen eye for detail, I strive
              to deliver efficient and reliable solutions for every project.
            </Text>
          </Box>
          <Box
            width={"100%"}
            textAlign={"center"}
            paddingLeft={{ base: "unset", lg: "150px" }}
          >
            <Image
              borderRadius={"10px"}
              pr={{ base: "5px", lg: "unset" }}
              height={{ base: "200px", lg: "380px" }}
              w={{ base: "300px", lg: "380px" }}
              src={Me}
              alt="agnyasal"
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default AboutMe;
