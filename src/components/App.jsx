import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Router>
      <Box p={4}>
        <Navigation />
        {isAuthenticated && <UserMenu />}
        <Routes>
          <Route
            path="/register"
            element={
              isAuthenticated ? <Navigate to="/contacts" /> : <Register />
            }
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/contacts" /> : <Login />}
          />
          <Route
            path="/contacts"
            element={isAuthenticated ? <Contacts /> : <Navigate to="/login" />}
          />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? '/contacts' : '/login'} />}
          />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
