import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/slices/userSlice";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";

import Classic from "../ckeditor/Classic.js";
import { handleImageChange } from "../components/images/handleImageChange.js";

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
    <>
      <div className="main-container">
        <h1 className="text-[3rem] text-primary text-center font-bold tracking-tight mb-2">
          Logged In !!
        </h1>
        <p className="text-center text-2xl font-bold">Hello, {username}</p>

        <Classic />

        <Box className="flex justify-center gap-20 mt-10">
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleImageChange(event, setImage)}
            className="border-2 p-2 rounded-md"
          />

          {image && (
            <Box className="flex justify-center mt-4">
              <img
                src={image}
                alt="Selected Preview"
                className="max-w-[300px] rounded-md"
              />
            </Box>
          )}
        </Box>

        <Box className="flex justify-center gap-20">
          <button
            onClick={handleLogOut}
            className="logout-button bg-red-500 text-white px-4 py-2 rounded mt-10"
          >
            Logout
          </button>
        </Box>
      </div>
      <Breadcrumbs />
    </>
  );
};

export default Success;
