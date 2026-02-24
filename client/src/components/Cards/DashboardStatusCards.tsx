import { useTranslation } from "react-i18next";
import { BiConversation } from "react-icons/bi";
import { TbBrandDatabricks, TbPremiumRights } from "react-icons/tb";

export default function DashboardStatusCards() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-12 gap-2">
      <div
        className="col-span-12 sm:col-span-6! lg:col-span-4! p-4 rounded-lg flex flex-col gap-4 min-w-full"
        style={{
          background: "linear-gradient(90deg, #D397FA, #8364E8)",
        }}
      >
        {/* icon + title */}
        <div className="flex gap-x-2 items-center">
          <TbBrandDatabricks size={24} />
          <div className="text-md font-bold text-neutral-100">
            {t("dashboard.statusbar.cards.data.title")}
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col leading-relaxed">
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>{t("dashboard.statusbar.cards.data.extracted")}</span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>{t("dashboard.statusbar.cards.data.recorded")}</span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>{t("dashboard.statusbar.cards.data.queued")}</span>
            <span>12</span>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 sm:col-span-6! lg:col-span-4! p-4 rounded-lg flex flex-col gap-4 min-w-full"
        style={{
          background: "linear-gradient(90deg, #EF709B, #FA9372)",
        }}
      >
        {/* icon + title */}
        <div className="flex gap-x-2 items-center">
          <BiConversation size={24} />
          <div className="text-md font-bold text-neutral-100">
            {t("dashboard.statusbar.cards.chats.title")}
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col leading-relaxed">
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>{t("dashboard.statusbar.cards.chats.all")}</span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>{t("dashboard.statusbar.cards.chats.sent_messages")}</span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>
              {t("dashboard.statusbar.cards.chats.messages_received")}
            </span>
            <span>12</span>
          </div>
        </div>
      </div>
      <div
        className="col-span-12 sm:col-span-6! lg:col-span-4! p-4 rounded-lg flex flex-col gap-4 min-w-full"
        style={{
          background: "linear-gradient(90deg, #6D51A5, #E4A7C5)",
        }}
      >
        {/* icon + title */}
        <div className="flex gap-x-2 items-center">
          <TbPremiumRights size={24} />
          <div className="text-md font-bold text-neutral-100">
            {t("dashboard.statusbar.cards.subscription.title")}
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col leading-relaxed">
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>
              {t("dashboard.statusbar.cards.subscription.amount_paid")}
            </span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>
              {t("dashboard.statusbar.cards.subscription.remaining_time")}
            </span>
            <span>12</span>
          </div>
          <div className="flex gap-1 text-sm items-center justify-between">
            <span>
              {t("dashboard.statusbar.cards.subscription.data_capacity")}
            </span>
            <span>12/30 GB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
