import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";
import { GoTrash } from "react-icons/go";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router";
import UserAccountItem from "./UserAccountItem";
import { useModalStore } from "../../store/modal.store";

export default function Account() {
  const { t } = useTranslation();
  const { setOpenApikey, setOpenDelete } = useModalStore();

  return (
    <>
      {/* accounts */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">{t("dashboard.accounts.title")}</div>

        {/* accounts */}
        <div className="flex flex-col items-center gap-2">
          {/* account */}
          <UserAccountItem />
        </div>

        {/* new account */}
        <Link to="/account/login" className="border rounded-lg px-4 py-2 flex items-center justify-between border-blue-400 hover:border-blue-500 focus:border-blue-500 transition-all text-blue-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer">
          <div className="text-sm font-medium">
            {t("dashboard.accounts.add_account")}
          </div>
          <LuPlus size={24} />
        </Link>
      </div>

      {/* security settings */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">{t("dashboard.security.title")}</div>

        {/* items */}
        <div className="flex flex-col gap-2">
          <Link
            to="/auth/recovery"
            className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
          >
            {t("dashboard.security.change_password")}
          </Link>
          {/* <Link
            to="/auth/recovery"
            className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
          >
            {t("dashboard.security.change_apikey")}
          </Link>
          <Link
            to="/auth/recovery"
            className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
          >
            {t("dashboard.security.logout_all")}
          </Link> */}
        </div>
      </div>

      {/* api settings */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">{t("dashboard.api.title")}</div>

        {/* settings */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-x-1">
            <div className="rounded-lg text-neutral-400 border border-neutral-800 px-4 py-2 text-sm flex items-center w-full bg-neutral-800 select-none">
              gl_a342*******************
            </div>
            <div
              className="p-2 text-red-400 border border-red-400 rounded-lg hover:text-red-500 hover:border-red-500 transition-all focus:text-red-500 focus:hover-red-500 flex items-center justify-center cursor-pointer"
              onClick={() => setOpenDelete(true)}
            >
              <GoTrash size={16} />
            </div>
          </div>

          {/* new account */}
          {/* <div
            className="border rounded-lg px-4 py-2 flex items-center justify-between border-blue-400 hover:border-blue-500 focus:border-blue-500 transition-all text-blue-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer"
            onClick={() => setOpenApikey(true)}
          >
            <div className="text-sm font-medium">
              {t("dashboard.api.add_apikey")}
            </div>
            <LuPlus size={24} />
          </div> */}

          {/* buttons */}
          <div className="flex gap-x-2 gap-y-1 items-center flex-wrap">
            <Button
              type="default"
              classNames={{
                root: "w-fit! bg-transparent! border-1 border-neutral-700! hover:border-neutral-800! transition-all! focus:border-neutral-800! text-neutral-100! text-xs! hover:text-neutral-300! focus:text-neutral-300!",
              }}
              // icon={<BiConversation size={16} />}
              size={"small"}
            >
              {t("dashboard.api.buttons.check_api_connect")}
            </Button>
            <Button
              type="default"
              classNames={{
                root: "w-fit! bg-transparent! border-1 border-neutral-700! hover:border-neutral-800! transition-all! focus:border-neutral-800! text-neutral-100! text-xs! hover:text-neutral-300! focus:text-neutral-300!",
              }}
              // icon={<BiConversation size={16} />}
              size={"small"}
            >
              {t("dashboard.api.buttons.check_telegram_connect")}
            </Button>
          </div>
        </div>
      </div>

      {/* extraction settings */}
      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">
          {t("dashboard.extraction.title")}
        </div>

        {/* settings */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="request_interval" className="text-sm font-medium">
              {t("dashboard.extraction.request_interval.label")}
            </label>
            <Input
              id="request_interval"
              type="text"
              name="request_interval"
              size="medium"
              // value=""
              className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
              placeholder={t(
                "dashboard.extraction.request_interval.placeholder"
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="messages_per_request"
              className="text-sm font-medium"
            >
              {t("dashboard.extraction.messages_per_request.label")}
            </label>
            <Input
              id="messages_per_request"
              type="text"
              name="messages_per_request"
              size="medium"
              // value=""
              className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
              placeholder={t(
                "dashboard.extraction.messages_per_request.placeholder"
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="chunk_size" className="text-sm font-medium">
              {t("dashboard.extraction.chunk_size.label")}
            </label>
            <Input
              id="chunk_size"
              type="text"
              name="chunk_size"
              size="medium"
              // value=""
              className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
              placeholder={t("dashboard.extraction.chunk_size.placeholder")}
            />
          </div>
          {/* <div className="flex flex-col gap-1">
              <label htmlFor="auto_pause" className="text-sm font-medium">
                {t("dashboard.extraction.auto_pause.label")}
              </label>
              <Input
                id="auto_pause"
                type="text"
                name="auto_pause"
                size="medium"
                // value=""
                className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
                placeholder={t("dashboard.extraction.auto_pause.placeholder")}
              />
            </div> */}
          <Button
            type="default"
            classNames={{
              root: "w-fit! bg-blue-400! hover:bg-blue-500! transition-all! focus:bg-blue-500! text-neutral-100! border-0! text-sm!",
            }}
            // icon={<BiConversation size={16} />}
            size={"medium"}
          >
            {t("dashboard.extraction.buttons.save_changes")}
          </Button>
        </div>
      </div>
    </>
  );
}
