import { Button, IconButton, Stack } from "@mui/material";
import React from "react";
import "../Style/sidebar.style.scss";
import icon1 from "../../../assets/svg/Icon1.svg";
import icon2 from "../../../assets/svg/Icon2.svg";
import icon3 from "../../../assets/svg/Icon3.svg";
import icon4 from "../../../assets/svg/Icon4.svg";
import icon5 from "../../../assets/svg/Icon5.svg";
import icon6 from "../../../assets/svg/Icon6.svg";
import icon7 from "../../../assets/svg/Icon7.svg";
import { DropupContent } from "./DropupContent";
export const SidebarContent = () => {
  const iconData = [
    {
      imgSrc: icon1,
      title: "Option1",
      contents: [
        "Dummy Data 1",
        "Dummy Data 2",
        "Dummy Data 3",
        "Dummy Data 4",
        "Dummy Data 5",
      ],
    },
    {
      imgSrc: icon2,
      title: "Option2",
      contents: [
        "Dummy Data 6",
        "Dummy Data 7",
        "Dummy Data 8",
        "Dummy Data 9",
        "Dummy Data 10",
      ],
    },
    {
      imgSrc: icon3,
      title: "Option3",
      contents: [
        "Dummy Data 11",
        "Dummy Data 12",
        "Dummy Data 13",
        "Dummy Data 14",
        "Dummy Data 15",
      ],
    },
    {
      imgSrc: icon4,
      title: "Option4",
      contents: [
        "Dummy Data 16",
        "Dummy Data 17",
        "Dummy Data 18",
        "Dummy Data 19",
        "Dummy Data 20",
      ],
    },
    {
      imgSrc: icon5,
      title: "Option5",
      contents: [
        "Dummy Data 21",
        "Dummy Data 22",
        "Dummy Data 23",
        "Dummy Data 24",
        "Dummy Data 25",
      ],
    },
    {
      imgSrc: icon6,
      title: "Option6",
      contents: [
        "Dummy Data 26",
        "Dummy Data 27",
        "Dummy Data 28",
        "Dummy Data 29",
        "Dummy Data 30",
      ],
    },
    {
      imgSrc: icon7,
      title: "Option7",
      contents: [
        "Dummy Data 31",
        "Dummy Data 32",
        "Dummy Data 33",
        "Dummy Data 34",
        "Dummy Data 35",
      ],
    },
  ];
  return (
    <React.Fragment>
      <Stack gap={1}>
        {iconData?.map((item, index) => (
          <Stack key={index} className="dropup">
            <Button
              sx={{
                width: "69px",
                height: "50px",
                borderRadius: "0px 8px 8px 0px",
              }}
              key={index}
              className="sidebar-icons"
            >
              <img src={item?.imgSrc} alt="icon" className="sidebar-icon" />
            </Button>
            <DropupContent contents={item?.contents} title={item?.title} />
          </Stack>
        ))}
      </Stack>
    </React.Fragment>
  );
};
