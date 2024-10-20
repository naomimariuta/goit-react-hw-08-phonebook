import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      textAlign="center"
      mt={8}
      p={4}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.50"
    >
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Welcome to Your Contacts Book
      </Text>
      <Text fontSize="xl" mb={6}>
        Manage your contacts with ease.
      </Text>
      <Link to="/contacts">
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
