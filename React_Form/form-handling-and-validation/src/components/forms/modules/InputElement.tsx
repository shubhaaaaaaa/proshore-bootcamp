import React from 'react'
import { TextField } from '@mui/material';
import { useField } from 'formik'

export const InputElement = ({ label, type, placeholder, name }) => {
  const [field] = useField(name);
  
    return (
      <>
        <TextField
                {...field}
                size="small"
                variant="outlined" 
                placeholder={placeholder}
                label={label}
                type={type}
                name={name}
                fullWidth
                slotProps={{inputLabel: {shrink: true} }}
              />
      </>
  )
}
