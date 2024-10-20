import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'reduxtoolkit/operations';
import { Box, Button, Text } from '@chakra-ui/react';

const UserMenu = ({ email }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="gray.200"
      padding="2"
      borderRadius="md"
      mb={4}
    >
      <Text fontWeight="bold">{email}</Text>{' '}
      <Button colorScheme="teal" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
