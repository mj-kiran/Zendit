import React from 'react'

export const NewTemplate = () => {
    const TextFieldStyle={
backgroundColor:"#FFFF"
    }
    const MilestoneStackStyle = {
      height: "fit-content",
      backgroundColor: "rgba(0, 0, 0, 0.0314)",
      alignItems: "center",
      padding: "20px",
      gap: "16px",
    };
    const AddTaskBtnStyle = {
      width: "118px",
      height: "40px",
      color: "#FFFF",
      backgroundColor: "#6666B3",
      borderRadius: "8px",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#6666B3",
        boxShadow: "none",
      },
    };
    const AddNewMBtnStyle = {
      width: "214px",
      height: "40px",
      color: "#000080",
      borderColor: "#000080",
      borderRadius: "8px",
      boxShadow: "none",
      fontSize: "12px",
    };
    const CancelBtnStyle = {
      width: "125px",
      height: "40px",
      color: "#263032",
      borderColor: "#E8E9EB",
      borderRadius: "8px",
      boxShadow: "none",
      fontSize: "12px",
    };
    const SubmitBtnStyle = {
      backgroundColor: "#000080",
      color: "#FFFF",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#000080",
      },
    };
     const DropdownStyle = {
       width: "100%",
    };
      const DropdownColorStyle = {
        width: "80%",
      };
      const LabelStyle = {
        fontSize: "12px",
        color: "#263032",
      };
      const ColorsStackStyle = {
        width: "40%",
        gap: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    };
    const TaskBoxStyle = {
      height: "50px",
      width: "100%",
      backgroundColor: "#FFFFFF",
      borderRadius: "8px",
      borderColor: "#EFEFEF",
      display: "flex",
      flexDirection: "row",
        alignItems: "center",
        padding: "10px 8px",
      justifyContent:"space-between"
    };
    const TaskBoxContentStyle = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
gap: "8px",
    };
    const chipStyle = {
      border: "1px solid #000080",
        padding: "6px",
      borderRadius:"6px !important"
    };
    const taskChipStyle = {
        width: "88px",
        borderRadius: "6px !important",
        color:"#263032 !important"
  }
  const ModalCancelBtn = {
    backgroundColor: "#FFFFFF",
    color: "#263032",
    boxShadow: "none",
    border: "1px solid #E8E9EB",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      boxShadow: "none",
    },
  };
  const ModalSaveBtn = {
    backgroundColor: "#000080",
    color: "#FFFFFF",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#000080",
    },
  };
    return {
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
      TaskBoxStyle,
      TaskBoxContentStyle,
      chipStyle,
      taskChipStyle,
      ModalCancelBtn,
      ModalSaveBtn,
    };
}
