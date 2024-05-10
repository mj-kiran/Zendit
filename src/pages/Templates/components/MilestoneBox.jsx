import React from 'react'
import { Avatar, Stack, Typography } from "@mui/material";
import deleteRed from "../../../assets/svg/deleteRed.svg";
import edit from "../../../assets/svg/edit.svg";
import star from "../../../assets/svg/Star.svg";
import { MuiChip, MuiIconButton } from '../../../shared';
import { NewTemplate } from '../style';
import { useTemplateContext } from '..';

export const MilestoneBox = () => {
  const { taskChipStyle, chipStyle } = NewTemplate();
  const { onToggleMilestoneList } = useTemplateContext();
  
  return (
    <React.Fragment>
      <Stack
        sx={{
          height: "129px",
          width: "97%",
          backgroundColor: "#FFFFFF",
          boxShadow: "2px 2px 16px -4px rgba(8, 21, 66, 0.25)",
          padding: "16px",
          borderRadius: "6px",
          gap: "12px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            sx={{ flexDirection: "row", gap: "8px", alignItems: "center" }}
          >
            <Typography>Milestone name :</Typography>
            <MuiChip
              variant={"outlined"}
              sx={chipStyle}
              label={" Main Install"}
              icon={<img src={star} />}
            />
          </Stack>
          <Stack sx={{ display: "flex", flexDirection: "row" }}>
            <MuiIconButton
              children={<img src={deleteRed} />}
              onClick={() => onToggleMilestoneList(false)}
            />
            <MuiIconButton children={<img src={edit} />} />
          </Stack>
        </Stack>
        <Stack>
          <Typography>Tasks :</Typography>
          <MuiChip
            sx={taskChipStyle}
            avatar={
              <Avatar
                sx={{ backgroundColor: "#000080", color: "#FFFFFF !important" }}
              >
                <Typography> 1</Typography>
              </Avatar>
            }
            label={"Task 1"}
          />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
