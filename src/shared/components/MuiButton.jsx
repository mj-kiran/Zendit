import { Button } from '@mui/material';
import React from 'react'

export const MuiButton = ({ variant, btnName, sx, type, onClick }) => {
  return (
    <React.Fragment>
      <Button variant={variant} sx={sx} type={type ?? "button"} onClick={onClick}>
        {btnName}
      </Button>
    </React.Fragment>
  );
};
