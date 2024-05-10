import { Stack } from "@mui/material";
import React from "react";
import "../Style/sidebar.style.scss";
import { Link } from "react-router-dom";

export const DropupContent = ({ contents,title,path }) => {
  return (
    <React.Fragment>
      <Stack class="dropup-content">
        <p class="side-head1">{title??""}</p>
        {contents?.map((item) => (
          <Link to={path??""}>{item??""}</Link>
        ))}
        {/* <div class="bottom-b1" style={{ margin: "0px 18px" }}></div> */}
      </Stack>
    </React.Fragment>
  );
};
