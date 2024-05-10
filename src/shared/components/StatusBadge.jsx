import React from 'react'
import { Stack, Typography } from "@mui/material";

export const StatusBadge = ({status}) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      width={60}
      borderRadius={2}
      p={"4px"}
      sx={{ backgroundColor: getStatusColor(status)?.bgColor }}
    >
      <Typography
        fontSize={"10px"}
        fontWeight={500}
        pl={"2px"}
        pb={"2px"}
        sx={{ color: getStatusColor(status)?.color }}
      >
        {!status ? "Inactive" : status ? "Active" : ""}
      </Typography>
    </Stack>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case true:
      return { bgColor: "#E0F7F2", color: "#03C395" };
    case false:
      return { bgColor: "#FBE9E9", color: "#E24B4B" };
    default:
      return "gray";
  }
};

  
