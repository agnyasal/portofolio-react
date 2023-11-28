import { Box, Heading, Text } from "@chakra-ui/react";

function Skill() {
  return (
    <Box width={"100vw"} paddingTop={"60px"} id="skills">
      <Heading textAlign={"center"}> Skills </Heading>
      <Text padding={"12px"} textAlign={"center"}>
        The following are several skills I have mastered in building a modern
        website :
      </Text>
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent={"space-evenly"}
        w={{ base: "90%", lg: "unset" }}
        ml={"20px"}
      >
        <Box
          border={"solid"}
          height={{ base: "200px", lg: "150px" }}
          padding={"20px"}
          borderRadius={"12px"}
          marginTop={"12"}
        >
          <Heading textAlign={"center"}>Frontend Developer</Heading>
          <Box>
            <Text textAlign={"center"} fontWeight={"bold"}>
              <br />
              HTML,CSS, JavaScript, React Js, Tailwinds, Redux, Next js
            </Text>
          </Box>
        </Box>
        <Box
          border={"solid"}
          height={{ base: "200px", lg: "150px" }}
          padding={"20px"}
          borderRadius={"12px"}
          marginTop={"12"}
        >
          <Heading textAlign={"center"}>Backend Developer</Heading>
          <Box>
            <br />
            <Text textAlign={"center"} fontWeight={"bold"}>
              Node Js, MySQL, Postgresql, Firebase
            </Text>
          </Box>
        </Box>
        <Box
          border={"solid"}
          height={{ base: "200px", lg: "150px" }}
          padding={"20px"}
          borderRadius={"12px"}
          marginTop={"12"}
        >
          <Heading textAlign={"center"}>Others</Heading>
          <Box>
            <br />
            <Text textAlign={"center"} fontWeight={"bold"}>
              {" "}
              Git, GitHub, VS Code, Postman
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
