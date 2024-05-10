import { createTheme } from '@mui/material'

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "48px",
          alignContent: "center",
        },
        input: {
          padding: "12.5px 14px !important",
        },
        inputMultiline: {
          padding: "0 !important",
        },
        multiline: {
          height: "auto",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
