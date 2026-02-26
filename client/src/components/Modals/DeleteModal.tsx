import { Modal } from "antd";
import { useState } from "react";
import { useModalStore } from "../../store/modal.store";
import { useTranslation } from "react-i18next";

export default function DeleteModal() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { openDelete, setOpenDelete } = useModalStore();
  const { t } = useTranslation();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenDelete(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  return (
    <Modal
      title={t("modal.titles.delete_apikey")}
      open={openDelete}
      //   open={true}
      classNames={{
        container:
          "bg-neutral-800! text-neutral-100! [&>.ant-modal-close]:text-neutral-100!",
        title: "text-neutral-100!",
        root: "text-neutral-100!",
      }}
      onOk={handleOk}
      okButtonProps={{
        classNames: {
          root: "bg-red-400! hover:bg-red-500! focus:bg-red-500! transition-all border-0! text-neutral-100!",
        },
      }}
      cancelButtonProps={{
        classNames: {
          root: "bg-neutral-600! hover:bg-neutral-700! focus:bg-neutral-700! transition-all border-0! hover:text-neutral-100! focus:text-neutral-100! text-neutral-100!",
        },
      }}
      okText={t("modal.buttons.delete")}
      cancelText={t("modal.buttons.cancel")}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
        <p>
            {t("modal.dialogs.delete_apikey")}
        </p>

    </Modal>
  );
}
