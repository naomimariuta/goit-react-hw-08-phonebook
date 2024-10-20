import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'reduxtoolkit/selectors';

const PrivateRoute = ({ element }) => {
  const user = useSelector(selectCurrentUser);

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
