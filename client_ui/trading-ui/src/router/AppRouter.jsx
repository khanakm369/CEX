import React from 'react'
import { Routes , Route , Navigate } from 'react-router-dom'
import Signin from '../features/auth/pages/Signin';
import Signup from '../features/auth/pages/Signup';

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirect root URL to signin */}
      <Route path="/" element={<Navigate to="/signin" replace />} />

      {/* Public Routes */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRouter;