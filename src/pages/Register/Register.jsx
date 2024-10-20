import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'reduxtoolkit/operations';
import { Box, Button, Input, FormLabel, FormControl } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="400px" margin="0 auto">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={e => setName(e.target.value)} />
      </FormControl>
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
        Register
      </Button>
    </Box>
  );
};

export default Register;
