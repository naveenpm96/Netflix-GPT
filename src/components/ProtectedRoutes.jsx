import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// Define AuthRedirect component
export const AuthRedirect = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/browse");
    }
  }, [isAuthenticated, navigate]);

  return !isAuthenticated ? children : null;
};

// Define ProtectedRoutes component
const ProtectedRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
