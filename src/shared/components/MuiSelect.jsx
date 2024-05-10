import { MenuItem, Select } from '@mui/material';
import React from 'react'

export const MuiSelect = ({
  id,
  name,
  value,
  sx,
  onChange,
  onBlur,
  error,
  style,
  contents,
  placeholder,
  register,
}) => {
  return (
    <React.Fragment>
      <Select
        displayEmpty
        id={id ?? ""}
        name={name ?? ""}
        sx={sx ?? ""}
        error={error ?? ""}
        style={{ ...(style ?? "") }}
        onChange={onChange}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <em>{placeholder ?? ""}</em>;
          }

          return selected;
        }}
      >
        <MenuItem disabled value="">
          <em>{placeholder ?? ""}</em>
        </MenuItem>
        {contents?.map((item, index) => (
          <MenuItem key={index} value={item ?? ""}>
            {item ?? ""}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};
