import { Box, Flex, Text, Heading, Link, Image, VStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Flex justify="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTM0NjU5NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        </Flex>
        <VStack spacing={2} align="center" my={4}>
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Frontend Developer | React Expert</Text>
        </VStack>
        <Text textAlign="center" px={3}>
          Welcome to my portfolio! I am a passionate Frontend Developer with expertise in React, dedicated to building optimized, user-friendly web applications. Check out my projects and get in touch!
        </Text>
        <Flex justify="space-around" mt={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} />
          </Link>
          <Link href="https://johndoe.com/resume.pdf" isExternal>
            <IconButton aria-label="Resume" icon={<FaFileAlt />} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
