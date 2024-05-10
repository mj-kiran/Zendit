import { FormLabel } from '@mui/material';
import React from 'react'

export const MuiFormLabel = ({ htmlFor, sx, label, mandatory }) => {
  return (
    <React.Fragment>
      <FormLabel htmlFor={htmlFor} sx={sx}>
        {label ?? ""}&nbsp;
        {mandatory && <span style={{ color: "#FF0000" }}>*</span>}
      </FormLabel>
    </React.Fragment>
  );
};
