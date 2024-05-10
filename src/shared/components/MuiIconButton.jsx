import { IconButton } from '@mui/material';
import React from 'react'

export const MuiIconButton = ({ children, onClick }) => {
  return (
    <React.Fragment>
      <IconButton aria-label="delete" onClick={onClick}>
        {children}
      </IconButton>
    </React.Fragment>
  );
};
