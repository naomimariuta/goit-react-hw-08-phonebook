import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reduxtoolkit/operations';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Input, FormLabel, Text, VStack } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector(state => state.auth);

  const handleLogin = async e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  return (
    <Box
      maxWidth="400px"
      mx="auto"
      mt={8}
      p={6}
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
    >
      <VStack spacing={4} as="form" onSubmit={handleLogin}>
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        {error && <Text color="red.500">{error}</Text>}

        <Button
          type="submit"
          colorScheme="teal"
          isLoading={isLoading}
          loadingText="Logging in"
        >
          Login
        </Button>

        <Text>
          Don't have an account?{' '}
          <Button as={Link} to="/register" colorScheme="teal" variant="link">
            Register
          </Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;
