import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'reduxtoolkit/operations';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password }));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="400px" margin="0 auto">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="full">
        Login
      </Button>
    </Box>
  );
};

export default Login;
