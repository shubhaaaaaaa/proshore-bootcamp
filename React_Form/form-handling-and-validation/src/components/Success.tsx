import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/slices/userSlice";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import Classic from "../ckeditor/Classic.js";
import { handleImageChange } from "../components/images/handleImageChange.js";
import LogoutIcon from "@mui/icons-material/Logout";

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState<string>();

  const handleLogOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/login");
  };

  const username = localStorage.getItem("username");

  return (
    <div className="main-container px-8 py-4">
      <Box className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-[2.5rem] text-primary font-bold tracking-tight">
          Welcome!
        </h1>
        <button
          onClick={handleLogOut}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2 shadow-md"
        >
          <LogoutIcon fontSize="small" />
          Logout
        </button>
      </Box>

      <Box className="text-center">
        <p className="text-xl font-semibold mb-6">Hello, <span className="text-primary">{username}</span>!</p>
      </Box>

      <Box className="mb-10">
        <Classic />
      </Box>

      <Box className="flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => handleImageChange(event, setImage)}
          className="border-2 border-dashed border-gray-300 p-3 rounded-lg text-gray-600 hover:border-gray-500 focus:outline-none"
        />
        {image && (
          <img
            src={image}
            alt="Selected Preview"
            className="max-w-[300px] rounded-md shadow-md border border-gray-300"
          />
        )}
      </Box>

      <Box className="mt-10">
        <Breadcrumbs />
      </Box>
    </div>
  );
};

export default Success;
