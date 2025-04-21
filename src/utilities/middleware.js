// src/middleware/RequireAuth.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Middleware () {
  const user = JSON.parse(sessionStorage.getItem('user'));
  
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Middleware;