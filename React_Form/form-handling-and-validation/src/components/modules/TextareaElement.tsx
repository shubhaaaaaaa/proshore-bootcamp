import React from 'react'
import { Textarea } from '@mui/joy';
import { FormLabel, FormControl } from "@mui/material";
import { useField } from 'formik'

export const TextareaElement = ({ name }) => {
    const [field] = useField(name);

    return (
        <FormControl fullWidth>
            
            <FormLabel
            sx={{
                fontSize: '0.7rem',
                paddingBottom: '10px',
            }}>
            Tell us more about yourself
            </FormLabel>

            <Textarea
            {...field}
            name={name}
            disabled={false}
            minRows={2}
            size="sm"
            />

        </FormControl>
            )
}
