import React from 'react'
import { AntdModal, MuiButton, MuiFormLabel, MuiTextField } from '../../../shared'
import { useTemplateContext } from '..'
import { Divider, Stack } from '@mui/material'
import { NewTemplate } from '../style'
import { successMessage } from '../../../utils'

export const CreatenewMileStone =React.memo( () => {
  const { newMileStone, onToggleMilestoneModal } = useTemplateContext({ load: true })
  const { ModalCancelBtn, ModalSaveBtn } = NewTemplate();
  const handleSave = () => {
    onToggleMilestoneModal(false)
    successMessage({message:"Milestone added successfully"})
  }
  return (
    <React.Fragment>
      <AntdModal
        title={"Add new Milestone"}
        isModalOpen={newMileStone}
        handleCancel={() => onToggleMilestoneModal(false)}
      >
        <Divider />
        <Stack sx={{ padding: "16px", gap: "30px" }}>
          <Stack sx={{ gap: "8px" }}>
            <MuiFormLabel
              label={"Milestone name"}
              mandatory={true}
              htmlFor={"milestone_name"}
            />
            <MuiTextField
              placeholder={"Please type"}
              id={"milestone_name"}
              name={"milestone_name"}
            />
          </Stack>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <MuiButton
              variant={"contained"}
              btnName={"Cancel"}
              sx={ModalCancelBtn}
              onClick={() => onToggleMilestoneModal(false)}
            />
            <MuiButton
              variant={"outlined"}
              btnName={"Save"}
              sx={ModalSaveBtn}
              onClick={() => handleSave()}
            />
          </Stack>
        </Stack>
      </AntdModal>
    </React.Fragment>
  );
})
