import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  <Box as="nav" bg="teal.500" padding="4">
    <Flex justify="space-between" align="center">
      {isAuthenticated ? (
        <>
          <NavLink to="/contacts">
            <Button colorScheme="teal" variant="ghost">
              Contacts
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register">
            <Button colorScheme="teal" variant="ghost">
              Register
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button colorScheme="teal" variant="ghost">
              Login
            </Button>
          </NavLink>
        </>
      )}
    </Flex>
  </Box>;
};

export default Navigation;
