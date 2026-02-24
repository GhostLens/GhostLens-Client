import { useTranslation } from "react-i18next";
import DashboardStatusCards from "../../components/Cards/DashboardStatusCards";
import { Button } from "antd";
import { BiConversation } from "react-icons/bi";
import { BsReverseListColumnsReverse } from "react-icons/bs";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 md:grid grid-cols-12 p-4 gap-x-4">
      <div className="col-span-4 border border-neutral-800 rounded-xl ">
        side bar
      </div>
      <div className="col-span-8 flex flex-col gap-4">
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
          {/* content */}
          <div className="p-4">{/* <DashboardStatusCards /> */}</div>
        </div>
      </div>
    </div>
  );
}
