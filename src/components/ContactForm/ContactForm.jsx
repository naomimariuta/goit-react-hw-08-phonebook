import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'reduxtoolkit/operations';
import { Input, Button, FormLabel, Box, Flex } from '@chakra-ui/react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = event => {
    event.preventDefault();
    if (name.trim() && number.trim()) {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleAddContact}>
      <Flex direction={'column'} justify="center" align="center" p={4}>
        <Box>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
          />
        </Box>
        <Box mt={2}>
          <FormLabel>Number:</FormLabel>
          <Input
            type="tel"
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </Box>
        <Button type="submit" mt={4} colorScheme="teal">
          Add Contact
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
