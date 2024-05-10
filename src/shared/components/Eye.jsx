import { IconButton } from '@mui/material'
import React from 'react'
import eye from "../../assets/svg/View-eye.svg"
export const Eye = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <img src={eye} />
    </IconButton>
  );
};
