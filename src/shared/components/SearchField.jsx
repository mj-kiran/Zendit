import { IconButton, InputBase, Stack, TextField } from '@mui/material';
import React from 'react'
import serachIcon from "../../assets/svg/Search.svg"
export const SearchField = ({ onChange, value }) => {
  return (
    <Stack
      width={"304px"}
      height={"40px"}
      bgcolor={"transparent"}
      borderRadius={"20px"}
      position={"relative"}
      border={"1px solid #EFEFEF"}
      className="search_boxWrapper"
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: 250 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search..." }}
        value={value || ""}
        onChange={onChange}
      />
      {/* <TextField
        placeholder="Search"
        variant="outlined"
        
        sx={{
          width: 250,
          backgroundColor: "white",
          borderRadius: 2,
          border: 0,
          borderColor: "transparent",
          ml: "51px",
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            height: "38px !important",
            borderColor: "transparent",
            outline: "none",
            "&.Mui-focused, &:hover fieldset": {
              borderColor: "transparent",
            },
          },
          "& input": {
            padding: "10px",
          },
          "& .MuiInputLabel-root": {
            top: "-7px",
          },
        }}
      /> */}
      <IconButton className="serach-icon-react-table">
        <img
          src={serachIcon}
          // className="serach-icon-react-table"
          style={{ width: "15px" }}
        />
      </IconButton>
    </Stack>
  );
};
