import React from "react";
import { FormLabel, FormControl } from "@mui/material";

// import { Balloon } from "../../ckeditor/Balloon.js";

export const TextareaElement = ({ name }) => {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ fontSize: "0.7rem", paddingBottom: "10px" }}>
        Tell us more about yourself
      </FormLabel>
      {/* <Balloon name={name} /> */}
    </FormControl>
  );
};
