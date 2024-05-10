import { Chip } from '@mui/material';
import React from 'react'

export const MuiChip = ({ variant, sx, label, icon, avatar }) => {
  return (
    <React.Fragment>
      <Chip
        icon={icon ?? ""}
        avatar={avatar ?? ""}
        label={label}
        variant={variant}
        sx={sx}
      />
    </React.Fragment>
  );
};
