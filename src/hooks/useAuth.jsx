import React, { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
