import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }
  if (loading) {
    <span className="loading loading-ball loading-xl"></span>;
  }
  return <Navigate to="/signin" state={location?.pathname}></Navigate>;
};
