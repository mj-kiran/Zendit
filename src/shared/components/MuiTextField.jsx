import { TextField } from '@mui/material';
import React from 'react'

export const MuiTextField = ({
  sx,
  className,
  id,
  name,
  value,
  onChange,
  error,
    style,
  placeholder
}) => {
  return (
    <React.Fragment>
      <TextField
        className={className}
        id={id}
        name={name}
        sx={sx}
        onChange={onChange}
        error={error}
              style={style}
              placeholder={placeholder}
      />
    </React.Fragment>
  );
};
