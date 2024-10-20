import React from 'react';
import { Box, Heading, VStack, Divider } from '@chakra-ui/react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <Box
      maxWidth="800px"
      mx="auto"
      mt={8}
      p={6}
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
    >
      <Heading as="h1" size="xl" mb={4} textAlign="center" color="teal.600">
        PhoneBook
      </Heading>

      <VStack spacing={6} align="stretch">
        <ContactForm />

        <Divider borderColor="gray.300" />

        <Heading as="h2" size="lg" color="teal.500">
          Contacts
        </Heading>
        <Filter />

        <ContactList />
      </VStack>
    </Box>
  );
};

export default Contacts;
