import React from "react";
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/slices/userSlice";
import {Breadcrumbs} from '../components/Breadcrumbs.tsx'

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("username");
    navigate("/login");
  };

  const username = localStorage.getItem('username');
  return (
    <>
    <div className="main-container">
      <h1 className="text-[3rem] text-primary text-center font-bold tracking-tight mb-2">
        Logged In !!</h1>
        <p className="text-center text-2xl font-bold">Hello, {username} </p>
      <Box className="flex justify-center gap-20">
        <button
          onClick={handleLogOut}
          className="logout-button bg-red-500 text-white px-4 py-2 rounded mt-10">
          Logout
        </button>
      </Box>

    </div>
      <Breadcrumbs />
    </>
  );
};

export default Success;
