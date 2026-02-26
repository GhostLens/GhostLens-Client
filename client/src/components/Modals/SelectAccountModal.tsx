import { Modal } from "antd";
import { useModalStore } from "../../store/modal.store";
import { useTranslation } from "react-i18next";

export default function SelectAccountModal() {
  const { openSelectAccount, setOpenSelectAccount } = useModalStore();
  const { t } = useTranslation();

  const handleCancel = () => {
    setOpenSelectAccount(false);
  };

  return (
    <Modal
      title={t("modal.titles.select_account")}
      open={openSelectAccount}
      //   open={true}
      classNames={{
        container:
          "bg-neutral-800! text-neutral-100! [&>.ant-modal-close]:text-neutral-100!",
        title: "text-neutral-100!",
        root: "text-neutral-100!",
        footer: "hidden",
      }}
      onCancel={handleCancel}
    >
      <div className="flex flex-col gap-2 py-4">
        <div className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-neutral-700 hover:border-blue-400! focus:border-blue-400! cursor-pointer transition-all">
          <div className="flex flex-col leading-relaxed w-full">
            <div className="text-sm font-bold select_account_fullname">
              User Full name
            </div>
            <div className="text-xs font-light text-neutral-400">
              1234567890
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
