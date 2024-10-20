import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'reduxtoolkit/operations';
import { Box, Button, Text } from '@chakra-ui/react';
import { selectCurrentUser } from 'reduxtoolkit/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    user && (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="gray.200"
        padding="2"
        borderRadius="md"
        mb={4}
      >
        <Text fontWeight="bold">{user.email}</Text>{' '}
        <Button colorScheme="teal" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    )
  );
};

export default UserMenu;
