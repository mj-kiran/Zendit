import React from "react";
import userImage from "../../../assets/svg/userImage.svg"
import "../style/template.list.style.scss";
import { Eye, ReactTable, StatusBadge } from "../../../shared";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TemplateList = () => {
  const navigate=useNavigate()
  const data = [
    {
      _id: 1,
      name: "Installation Template",
      template_type: "Installation",
      active: true,
      created_by: "David Nowak",
      image: userImage,
    },
    {
      _id: 2,
      name: "Crane Template",
      template_type: "Crane",
      active: false,
      created_by: "David Nowak",
      image: userImage,
    },
  ];
  const ActionButton = ({row}) => { 
    const { _id } = row?.original
    return <Eye onClick={() => navigate(`./detailPage/${_id}`)} />;
  };
  const CreatedBy = React.memo(({ row }) => {
    const { created_by, image } = row?.original;
    return (
      <div className="c-by">
        <Avatar src={image} alt="User Avatar" className="avatar-custom" />
        <div>{created_by}</div>
      </div>
    );
  });
  const TemplateName = React.memo(({ row }) => {
    const { name } = row?.original;
    return (
      <Typography variant="body2" color="#000080">{ name}</Typography>
    )
  })
  const columns = React.useMemo(
    () => [
      {
        Header: "Template name",
        accessor: "name",
        Cell: TemplateName,
      },
      {
        Header: "Template type",
        accessor: "template_type",
      },
      {
        Header: "Created by",
        accessor: "created_by",
        Cell: CreatedBy,
      },
      {
        Header: "Status",
        accessor: "enable",
        disableSortBy: true,
        Cell: ({ row }) => {
          const { active } = row?.original;
          return <StatusBadge status={active} />;
        },
      },
      {
        Header: "Actions",
        disableSortBy: true,
        Cell: ActionButton,
      },
    ],
    []
  );
  const handleAddNew = () => {
  navigate("/detailPage")
}
  return (
    <React.Fragment>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className="head-name" my={2}>
          Templates
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: "121px",
            height: "31px",
            borderRadius: "50px",
            borderColor: "#000080",
            color: "#000080",
          }}
          onClick={handleAddNew}
        >
          + Add New
        </Button>
      </Stack>
      <ReactTable columns={columns ?? []} data={data ?? []} />
    </React.Fragment>
  );
};
