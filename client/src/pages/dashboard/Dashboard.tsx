import { useTranslation } from "react-i18next";
import DashboardStatusCards from "../../components/Cards/DashboardStatusCards";
import { Button, Dropdown, type MenuProps } from "antd";
import { BiConversation } from "react-icons/bi";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { TbDots } from "react-icons/tb";
import { Link } from "react-router";
import { LiaTelegram } from "react-icons/lia";
import Account from "../../components/Account/Account";
import { CiUser } from "react-icons/ci";
import { useRef } from "react";
import { useModalStore } from "../../store/modal.store";
import { useActiviyStore } from "../../store/activity.store";
import ActivityItemCard from "../../components/Activity/ActivityItemCard";
import Empty from "../../Empty/Empty";

export default function Dashboard() {
  const { t } = useTranslation();
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { setOpenSelectAccount } = useModalStore();
  const { activities } = useActiviyStore();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to=""
          className="text-blue-400! hover:text-blue-500! focus:text-blue-500! transition-all"
        >
          {t("chat_history.options.edit_chat")}
        </Link>
      ),
    },
    {
      key: "2",
      danger: true,
      label: t("chat_history.options.delete_chat"),
    },
  ];

  const toggleActivityItem = (id: string) => {
    contentRefs.current.forEach((el) => {
      if (el) {
        if (el.parentElement?.getAttribute("id") === id) {
          el.classList.toggle("hidden");
        } else {
          el.classList.add("hidden");
        }
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 md:grid grid-cols-12 p-4 gap-x-4">
      {/* sidebar */}
      <div className="col-span-4 xl:col-span-3 md:flex flex-col gap-6 hidden">
        <Account />
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
        <div className="flex items-center gap-x-2 flex-wrap gap-y-1">
          <div className="flex md:hidden">
            <Link to="/profile">
              <Button
                type="default"
                classNames={{
                  root: "bg-emerald-400! hover:bg-emerald-500! transition-all! focus:bg-emerald-500! text-neutral-100! border-0! text-sm!",
                }}
                icon={<CiUser size={16} />}
                size={"medium"}
              >
                {t("dashboard.buttons.profile")}
              </Button>
            </Link>
          </div>
          <Button
            type="default"
            onClick={() => setOpenSelectAccount(true)}
            classNames={{
              root: "bg-blue-400! hover:bg-blue-500! transition-all! focus:bg-blue-500! text-neutral-100! border-0! text-sm!",
            }}
            icon={<LiaTelegram size={16} />}
            size={"medium"}
          >
            {t("dashboard.buttons.telegram_chats")}
          </Button>
          <Button
            type="default"
            classNames={{
              root: "border border-neutral-700! bg-transparent! hover:bg-transparent!  hover:border-neutral-800! transition-all! focus:bg-transparent! focus:border-neutral-800! text-neutral-100! text-sm!",
            }}
            icon={<BiConversation size={16} />}
            size={"medium"}
          >
            {t("dashboard.buttons.ghostlens_chats")}
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
          <div className="p-4 text-lg font-bold bg-neutral-800 flex justify-between items-center">
            <span>{t("dashboard.activity.header_title")}</span>
            <Link
              to="/dashboard/activity"
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("shared.see_more")}
            </Link>
          </div>
          {/* activities */}
          <div className="p-4 flex flex-col gap-2">
            {activities.length > 0 ? activities.map((activity) => (
              <ActivityItemCard
                activity={activity}
                toggleActivityHandler={toggleActivityItem}
                refs={contentRefs}
              />
            )): <Empty/>}
          </div>
        </div>
        <div className="border border-neutral-800 rounded-xl divide-y divide-neutral-800 overflow-hidden">
          {/* header */}
          <div className="p-4 text-lg font-bold bg-neutral-800 flex justify-between items-center">
            <span>{t("dashboard.chat_history.header_title")}</span>
            <Link
              to="/"
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("shared.see_more")}
            </Link>
          </div>
          {/* chats */}
          <div className="p-4 flex flex-col gap-2 divide-y divide-neutral-800">
            <div className="flex items-center justify-between gap-x-4 pb-2">
              <Link
                to=""
                className="w-full whitespace-normal text-medium line-clamp-2 text-blue-400 text-sm h-full hover:text-blue-500 focus:text-blue-500 transition-all"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                animi sed numquam ab, fugit nostrum debitis doloribus totam
                tempore sunt ducimus suscipit ipsam molestias saepe dicta
                maiores. Ipsum, voluptate vero.
              </Link>
              <Dropdown
                menu={{ items }}
                classNames={{
                  root: "[&>ul]:bg-neutral-800! [&>ul]:border-neutral-700! [&>ul]:border",
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <div className="cursor-pointer">
                    <TbDots size={24} />
                  </div>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
