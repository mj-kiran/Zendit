import { Modal } from "antd";
import React from "react";

export const AntdModal = ({
  title,
  handleOk,
  handleCancel,
  isModalOpen,
  children,
}) => {
  return (
    <React.Fragment>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </React.Fragment>
  );
};
