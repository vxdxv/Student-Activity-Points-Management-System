// src/components/ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // Path to your AuthContext

export default ProtectedRoute;
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // Prevent premature redirect
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
