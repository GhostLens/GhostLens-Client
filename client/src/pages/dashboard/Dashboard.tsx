import { useTranslation } from "react-i18next";
import DashboardStatusCards from "../../components/Cards/DashboardStatusCards";
import { Button, Image, Input } from "antd";
import { BiConversation } from "react-icons/bi";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { TbDots } from "react-icons/tb";
import { LuPlus } from "react-icons/lu";
import { Link } from "react-router";
import { GoTrash } from "react-icons/go";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 md:grid grid-cols-12 p-4 gap-x-4">
      {/* sidebar */}
      <div className="col-span-4 xl:col-span-3 flex flex-col gap-6">
        {/* accounts */}
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold">
            {t("dashboard.accounts.title")}
          </div>

          {/* accounts */}
          <div className="flex flex-col items-center gap-2">
            {/* account */}
            <div className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-neutral-800">
              {/* full name + id */}
              <div className="flex flex-col leading-relaxed">
                <div className="text-sm font-bold">User Full name</div>
                <div className="text-xs font-light text-neutral-400">
                  1234567890
                </div>
              </div>

              {/* dots */}
              <div className="cursor-pointer">
                <TbDots size={24} />
              </div>
            </div>
          </div>

          {/* new account */}
          <div className="border rounded-lg px-4 py-2 flex items-center justify-between border-blue-400 hover:border-blue-500 focus:border-blue-500 transition-all text-blue-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer">
            <div className="text-sm font-medium">
              {t("dashboard.accounts.add_account")}
            </div>
            <LuPlus size={24} />
          </div>
        </div>

        {/* security settings */}
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold">
            {t("dashboard.security.title")}
          </div>

          {/* items */}
          <div className="flex flex-col gap-2">
            <Link
              to="/auth/recovery"
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("dashboard.security.change_password")}
            </Link>
            <Link
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
            </Link>
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
              <div className="p-2 text-red-400 border border-red-400 rounded-lg hover:text-red-500 hover:border-red-500 transition-all focus:text-red-500 focus:hover-red-500 flex items-center justify-center cursor-pointer">
                <GoTrash size={16} />
              </div>
            </div>

            {/* new account */}
            {/* <div className="border rounded-lg px-4 py-2 flex items-center justify-between border-blue-400 hover:border-blue-500 focus:border-blue-500 transition-all text-blue-400 hover:text-blue-500 focus:text-blue-500 cursor-pointer">
              <div className="text-sm font-medium">
                {t("dashboard.api.add_apikey")}
              </div>
              <LuPlus size={24} />
            </div> */}
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

        {/* advanced settings */}
        <div className=""></div>
      </div>
      <div className="col-span-8 xl:col-span-9 flex flex-col gap-4">
        <div className="border border-neutral-800 rounded-xl divide-y divide-neutral-800 overflow-hidden">
          {/* header */}
          <div className="p-4 text-lg font-bold bg-neutral-800">
            {t("dashboard.statusbar.header_title")}
          </div>
          {/* content */}
          <div className="p-4">
            <DashboardStatusCards />
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            type="default"
            classNames={{
              root: "bg-blue-400! hover:bg-blue-500! transition-all! focus:bg-blue-500! text-neutral-100! border-0! text-sm!",
            }}
            icon={<BiConversation size={16} />}
            size={"medium"}
          >
            {t("dashboard.buttons.chats")}
          </Button>
          <Button
            type="default"
            classNames={{
              root: "bg-gray-400! hover:bg-gray-500! transition-all! focus:bg-gray-500! text-neutral-100! border-0! text-sm!",
            }}
            icon={<BsReverseListColumnsReverse size={16} />}
            size={"medium"}
          >
            {t("dashboard.buttons.logs")}
          </Button>
        </div>
        <div className="border border-neutral-800 rounded-xl divide-y divide-neutral-800 overflow-hidden">
          {/* header */}
          <div className="p-4 text-lg font-bold bg-neutral-800">
            {t("dashboard.chat_history.header_title")}
          </div>
          {/* chats */}
          <div className="p-4 flex flex-col gap-2 divide-y divide-neutral-800">
            <div className="flex items-center justify-between gap-x-4 pb-2">
              <div className="w-full whitespace-normal text-medium line-clamp-2 text-neutral-200 text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi sed numquam ab, fugit nostrum debitis doloribus totam
                tempore sunt ducimus suscipit ipsam molestias saepe dicta
                maiores. Ipsum, voluptate vero.
              </div>
              <div className="cursor-pointer">
                <TbDots size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
