import { Stack, Typography } from "@mui/material";
import React from "react";
import {
  AntdColorPicker,
  AntdModal,
  MuiAutoComplete,
  MuiButton,
  MuiFormLabel,
  MuiSelect,
  MuiTextField,
} from "../../../shared";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewTemplate } from "../style";
import { Divider } from "antd";
import { CreatenewMileStone, MilestoneBox, TaskBox } from ".";
import { schema } from "../validations";
import {useTemplateContext } from "..";
import { useNavigate } from "react-router-dom";
import { successMessage } from "../../../utils";
export const CreateOrEditTemplate =React.memo( () => {
  const {
    onToggleMilestoneModal,
    Task,
    onToggleTask,
    milestoneList,
    onToggleMilestoneList,
  } = useTemplateContext();
  const {
    TextFieldStyle,
    MilestoneStackStyle,
    AddTaskBtnStyle,
    AddNewMBtnStyle,
    CancelBtnStyle,
    SubmitBtnStyle,
    DropdownStyle,
    DropdownColorStyle,
    LabelStyle,
    ColorsStackStyle,
  } = NewTemplate();
  const TemplateName = [
    "Installation",
    "Crane template",
    "Crane template2",
    "IC template",
    "Installation template2",
    "IC template2 ",
    "Crane template3 ",
    "Installation template3",
  ];
  const TemplateType = ["Installation", "Crane", "Installation & Crane"];
  const ColorData = ["Progressing Color", "Completed Color", "Delayed Color","+ New Milestone"];
const navigate=useNavigate()
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const OnSubmit = (data) => {
    console.log(data);
    navigate("/")
    successMessage({message:"Template added successfully"})
  };
 const onChange = (value) => {
   if (value === "+ New Milestone") {
     onToggleMilestoneModal(true);
   }
 };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography className="head-name" my={2}>
            Add Templates
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "780px",
            backgroundColor: "#FFFFFF",
            padding: "40px",
            gap: "8px",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <Stack sx={{ width: "50%", gap: "8px" }}>
              <MuiFormLabel
                label={"Template type"}
                sx={LabelStyle}
                mandatory={true}
              />
              <MuiSelect
                id={"template_type"}
                name={"template_type"}
                sx={DropdownStyle}
                placeholder={"Select"}
                {...register("template_type")}
                contents={TemplateType ?? []}
                onChange={(e) => setValue("template_type", e.target.value)}
              />
            </Stack>
            <Stack sx={{ width: "50%", gap: "8px" }}>
              <MuiFormLabel
                label={"Template name"}
                sx={LabelStyle}
                mandatory={true}
              />
              <MuiSelect
                id={"template_name"}
                name={"template_name"}
                sx={DropdownStyle}
                placeholder={"Please Select"}
                contents={TemplateName ?? []}
                {...register("template_name")}
                onChange={(e) => setValue("template_name", e.target.value)}
              />
            </Stack>
          </Stack>
          <Stack my={5} gap={"16px"}>
            <Typography fontFamily={"14px"} fontWeight={500}>
              Colors
            </Typography>
            <Stack
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <Stack sx={ColorsStackStyle}>
                <MuiSelect
                  id={"color_one"}
                  name={"color_one"}
                  sx={DropdownColorStyle}
                  placeholder={"Please Select"}
                  contents={ColorData ?? []}
                  {...register("color_one")}
                  onChange={(e) => setValue("color_one", e.target.value)}
                />
                <AntdColorPicker defaultValue={"green"} />
              </Stack>
              <Stack sx={ColorsStackStyle}>
                <MuiSelect
                  id={"color_two"}
                  name={"color_two"}
                  sx={DropdownColorStyle}
                  placeholder={"Please Select"}
                  contents={ColorData ?? []}
                  {...register("color_two")}
                  onChange={(e) => setValue("color_two", e.target.value)}
                />
                <AntdColorPicker defaultValue={"red"} />
              </Stack>
              <Stack sx={ColorsStackStyle}>
                <MuiSelect
                  id={"color_three"}
                  name={"color_three"}
                  sx={DropdownColorStyle}
                  placeholder={"Please Select"}
                  contents={ColorData ?? []}
                  {...register("color_three")}
                  onChange={(e) => setValue("color_three", e.target.value)}
                />
                <AntdColorPicker defaultValue={"blue"} />
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={MilestoneStackStyle}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                width: "100%",
              }}
            >
              <Stack sx={{ width: "40%", gap: "8px" }}>
                <MuiFormLabel
                  label={"Milestone name"}
                  sx={LabelStyle}
                  mandatory={true}
                />
                <MuiAutoComplete
                  textFieldStyle={TextFieldStyle}
                  placeholder={"Please type"}
                  options={ColorData ?? []}
                  buttonText={"+ New Milestone"}
                  onButtonClick={() => onToggleMilestoneModal(true)}
                  onChange={onChange}
                />
              </Stack>
              <Stack sx={{ width: "40%", gap: "8px" }}>
                <MuiFormLabel
                  label={"Task name"}
                  sx={LabelStyle}
                  mandatory={true}
                />
                <MuiTextField
                  sx={TextFieldStyle}
                  placeholder={"Please type task name"}
                />
              </Stack>
              <Stack
                sx={{
                  width: "20%",
                  height: "66px",
                  gap: "8px",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <MuiButton
                  variant={"contained"}
                  btnName={"Add task"}
                  sx={AddTaskBtnStyle}
                  onClick={() => onToggleTask(true)}
                />
              </Stack>
            </Stack>
            {Task ? <TaskBox /> : null}
          </Stack>
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <MuiButton
              variant={"outlined"}
              btnName={"Save / Add new Milestone"}
              sx={AddNewMBtnStyle}
              onClick={() => onToggleMilestoneList(true)}
            />
          </Stack>
          {milestoneList ? <MilestoneBox /> : null}
          <Divider style={{ background: "#E5E5E5" }} />
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MuiButton
              variant={"outlined"}
              btnName={"Cancel"}
              sx={CancelBtnStyle}
              onClick={()=>navigate("/")}
            />
            <MuiButton
              type={"submit"}
              variant={"contained"}
              btnName={"Submit"}
              sx={SubmitBtnStyle}
              onClick={handleSubmit(OnSubmit)}
            />
          </Stack>
        </Stack>
        <CreatenewMileStone />
      </form>
    </React.Fragment>
  );
});
