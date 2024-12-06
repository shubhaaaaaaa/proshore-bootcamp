import React from "react";
import {useSelector} from "react-redux"
import {Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ allowedRole }) => {
  const username = useSelector((state) => state.user.username);

  if (allowedRole === "admin" && username === "admin") {
    return <Outlet />;
  } else if (allowedRole !== "admin" && username) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute