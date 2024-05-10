import { Stack, Typography } from '@mui/material';
import React from 'react'
import { MuiIconButton } from '../../../shared';
import { NewTemplate } from '../style';
import deleteRed from "../../../assets/svg/deleteRed.svg";
import edit from "../../../assets/svg/edit.svg";
import resizeicon from "../../../assets/svg/resizeicon.svg";
import {  useTemplateContext } from '../hook';

export const TaskBox = () => {
        const { TaskBoxStyle, TaskBoxContentStyle } = NewTemplate();
        const { onToggleTask } = useTemplateContext();

  return (
    <React.Fragment>
      <Stack sx={TaskBoxStyle}>
        <Stack sx={TaskBoxContentStyle}>
          <Stack
            sx={{
              width: "31px",
              height: "30px",
              backgroundColor: "#000080",
              borderRadius: "7px",
              color: "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </Stack>
          <Stack>
            <Typography>Task 1</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row" }}>
          <MuiIconButton
            children={<img src={deleteRed} />}
            onClick={() => onToggleTask(false)}
          />
          <MuiIconButton children={<img src={edit} />} />
          <MuiIconButton children={<img src={resizeicon} />} />
        </Stack>
      </Stack>
    </React.Fragment>
  );
}
