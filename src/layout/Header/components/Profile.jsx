import { Avatar, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react'
import dropdown from '../../../assets/svg/profile-dropdown.svg'
import '../../Sidebar/Style/header.style.scss'
export const Profile = () => {
  return (
    <div>
      <Stack display="flex" direction="row" alignItems="center" spacing={1}>
        <Stack>
          <Tooltip title="">
            <Avatar
              alt=""
              src=""
              variant="square"
              sx={{ borderRadius: "10px" }}
            />
          </Tooltip>
        </Stack>
        <Stack alignItems="center" direction={"row"} gap={1}>
          <Typography className="user-name">David Nowak</Typography>
                  <img src={dropdown} />
        </Stack>
      </Stack>
    </div>
  );
}
