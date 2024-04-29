import React from "react";
import useAuth from "../../Hooks/auth/useAuth";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { authState } = useAuth();
  const location = useLocation();
  return (
    <>
      {authState?.isAuthenticated ? (
        children
      ) : (
        <Navigate
          to="/login"
          state={{ from: location }}
          replace
        />
      )}
    </>
  );
};

export default ProtectedRoute;
