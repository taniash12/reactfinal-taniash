import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({
    type="text",
    label,
    error,
    helperText,
    name,
    onChange,
    value,
    styles
}) => {
  return (
    <TextField
        type={type}
        label={label}
        name={name}
        onChange={onChange}
        error={error}
        helperText={helperText}
        value={value}
        color={error ? "error" : "info"}
        sx={{
            width:"100%",
            marginTop:3,
            "& fieldset": {
                borderRadius:"20px",
            },
            ...styles,
        }}
    />
  );
};
