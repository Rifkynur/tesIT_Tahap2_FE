import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
const ProtectedRoute = ({ element, ...rest }) => {
  const isAuth = useAuthStore((state) => state.user);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
