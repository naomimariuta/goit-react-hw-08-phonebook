import { NavLink } from 'react-router-dom';
import { Box, Button, Flex } from '@chakra-ui/react';

const Navigation = () => (
  <Box as="nav" bg="teal.500" padding="4">
    <Flex justify="space-between" align="center">
      <NavLink to="/">
        <Button colorScheme="teal" variant="ghost">
          Home
        </Button>
      </NavLink>
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
      <NavLink to="/contacts">
        <Button colorScheme="teal" variant="ghost">
          Contacts
        </Button>
      </NavLink>
    </Flex>
  </Box>
);

export default Navigation;
