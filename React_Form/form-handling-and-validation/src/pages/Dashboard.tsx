import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/slices/userSlice";
import {Breadcrumbs} from '../components/Breadcrumbs.tsx'

const Dashboard = () => {
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
      <div className="login-container justify-center items-center font-semibold flex flex-col text-3xl ">
        Hello, {username}
      <button
        onClick={handleLogOut}
        className="logout-button bg-red-500 text-white px-4 py-2 rounded mt-10 text-sm">
        Logout
      </button>
          </div>

      <Breadcrumbs />
    </>
  );
};

export default Dashboard;
