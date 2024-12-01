import React from 'react'
import { Button, Box } from "@mui/material";

const Success = () => {
  return (
    <div className='main-container'>
      <h1 className="text-[3rem] text-center font-bold tracking-tight mb-10">
      Logged&nbsp;<span className="text-primary">In !!</span>
      </h1>
      <Box className="flex justify-center gap-20">
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
