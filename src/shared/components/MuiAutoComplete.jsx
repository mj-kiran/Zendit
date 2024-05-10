import { Autocomplete, Button, Paper, TextField } from '@mui/material';
import React from 'react'

export const MuiAutoComplete =React.memo( ({
  className,
  sx,
  value,
  options,
  onChange,
  paperStyle,
  paperClass,
  textFieldClass,
  textFieldStyle,
  variant,
  textfieldValue,
  handleChange,
  placeholder,
  onButtonClick,
  buttonText,
}) => {
  return (
    <React.Fragment>
      <Autocomplete
        className={className}
        sx={sx}
        disablePortal
        forcePopupIcon={false}
        disableClearable
        value={value}
        options={options}
        onChange={(e, newValue) => onChange && onChange(newValue)}
        PaperComponent={({ children }) => (
          <Paper sx={paperStyle} className={paperClass}>
            {children}
            {/* <Button onClick={() => console.log("clicked")}>{buttonText}</Button> */}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            className={textFieldClass}
            {...params}
            sx={textFieldStyle}
            variant={variant}
            value={textfieldValue}
            onChange={handleChange}
            placeholder={placeholder}
          />
        )}
      />
    </React.Fragment>
  );
});
