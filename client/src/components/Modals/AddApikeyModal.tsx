import { Input, Modal } from "antd";
import { useState } from "react";
import { useModalStore } from "../../store/modal.store";
import { useTranslation } from "react-i18next";

export default function AddApikeyModal() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { openApikey, setOpenApikey } = useModalStore();
  const { t } = useTranslation();

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenApikey(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpenApikey(false);
  };

  return (
    <Modal
      title={t("modal.titles.add_apikey")}
      open={openApikey}
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
          root: "bg-blue-400! hover:bg-blue-500! focus:bg-blue-500! transition-all",
        },
      }}
      cancelButtonProps={{
        classNames: {
          root: "bg-red-400! hover:bg-red-500! focus:bg-red-500! transition-all border-0! text-neutral-100!",
        },
      }}
      okText={t("modal.buttons.submit")}
      cancelText={t("modal.buttons.cancel")}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <div className="flex flex-col gap-1 py-4">
        <Input
          id="add_apikey"
          type="text"
          name="add_apikey"
          size="medium"
          // value=""
          className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
          placeholder={t("modal.inputs.add_apikey.placeholder")}
        />
      </div>
    </Modal>
  );
}
