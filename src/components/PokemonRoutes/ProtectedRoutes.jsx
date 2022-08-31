import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ProtectedRoutes = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);

  if (nameTrainer) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
