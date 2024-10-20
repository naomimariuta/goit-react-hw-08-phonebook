import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import Home from 'pages/Home/Home';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

const App = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Router>
      <Box p={4}>
        <Navigation />
        {user && <UserMenu email={user.email} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
