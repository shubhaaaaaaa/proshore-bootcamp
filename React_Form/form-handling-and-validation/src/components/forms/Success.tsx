import React from 'react'
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../slices/userSlice';

const Success = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearUser()); 
    localStorage.removeItem("username");
    navigate("/login"); 
  };

  
  const username = useSelector((state) => state.user.username);
  return (
    <div className='main-container'>
      <h1 className="text-[3rem] text-center font-bold tracking-tight mb-10">
        Logged&nbsp;<span className="text-primary">In !!</span>
        <p>Hello, {username} </p>
      </h1>
      <Box className="flex justify-center gap-20">
            <button
              onClick={handleLogOut}
              className="logout-button bg-red-500 text-white px-4 py-2 rounded mt-4"
            >
              Logout
            </button>
            <Button
            href="/"
              sx={{
                backgroundColor: '#00438a',
                color: "white",
                "&:hover": {
                  backgroundColor: "#002a56",
                },
              }}
              variant="contained"
              type="submit">
              Start Over
            </Button>
            </Box>
    </div>
  )
}

export default Success
