import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'reduxtoolkit/operations';
import { Box, Button, Text } from '@chakra-ui/react';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="2"
      borderBottom="1px"
      borderColor="gray.300"
    >
      <Text>
        {contact.name}: {contact.number}
      </Text>
      <Button colorScheme="red" onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
};

export default ContactItem;
