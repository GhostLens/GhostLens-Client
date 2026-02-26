import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { type IActivityStore } from "../../store/activity.store";
import { LuChevronDown } from "react-icons/lu";
import { Progress } from "antd";
import type { RefObject } from "react";

export default function ActivityItemCard({
  activity,
  refs,
  toggleActivityHandler,
}: {
  activity: IActivityStore["activities"][number];
  refs: RefObject<(HTMLDivElement | null)[]>;
  toggleActivityHandler: (id: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <div
      className="border border-neutral-800 rounded-lg px-4 py-2 flex flex-col "
      id={activity.id}
    >
      {/* header */}
      <div
        className="flex items-center justify-between gap-x-4"
        onClick={() => toggleActivityHandler(activity.id)}
      >
        {/* title + progressbar */}
        <div className="flex flex-col gap-1 w-full">
          <div className="line-clamp-2 text-lg font-medium text-neutral-300">
            {t("activity.activity_titles.new_extraction")}: chat title
          </div>
          <div className="flex items-center gap-x-1 min-w-full">
            <div className="text-sm font-light text-neutral-400">
              {t("activity.progress")}:
            </div>
            <Progress
              percent={50}
              classNames={{
                indicator:
                  "text-neutral-300! text-xs! [&>span.anticon-check-circle>svg]:text-green-400! [&>span.anticon-check-circle>svg]:scale-[1.2] [&>span.anticon-close-circle>svg]:text-red-400! [&>span.anticon-close-circle>svg]:scale-[1.2]",
                // root: "max-w-xs",
                rail: "bg-neutral-800!",
              }}
              status="exception"
            />
          </div>
        </div>

        {/* chevron icon */}
        <div className="">
          <LuChevronDown size={16} />
        </div>
      </div>

      {/* content */}
      <div
        className="flex flex-wrap gap-x-6 pt-2 gap-y-4 border-t border-neutral-800 mt-2 hidden"
        ref={(e) => {
          refs.current[0] = e;
        }}
      >
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.target_chat_title")}:
            </div>
            <div className="text-sm">test</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.target_chat_id")}:
            </div>
            <div className="text-sm">12345679</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.all_messages")}:
            </div>
            <div className="text-sm">45343</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.extracted_messages")}:
            </div>
            <div className="text-sm">123</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.error_cause")}:
            </div>
            <div className="text-sm">{t("activity.notfound_error")}</div>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.extracting_from")}:
            </div>
            <div className="text-sm">User full name</div>
          </div>

          {/* //? activity status here... */}
          <div className="flex items-center gap-x-1">
            <div className="text-sm text-neutral-400">
              {t("activity.status_title")}:
            </div>
            <div className="text-sm"> {t(`activity.status.${"DONE"}`)}</div>
          </div>

          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.see_telegram_chats")}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.new_ghostlens_chat")}
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.see_logs")}
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.settings")}
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.pause")}
            </Link>
          </div>
          <div className="flex items-center gap-x-1">
            <Link
              to=""
              className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
            >
              {t("activity.cancel")}
            </Link>
          </div>

          {/* <div className="flex items-center gap-x-1">
                    <Link
                      to=""
                      className="text-sm text-blue-400 hover:text-blue-500 focus:text-blue-500 transition-all"
                    >
                      {t("activity.resume")}
                    </Link>
                  </div> */}
        </div>
      </div>
    </div>
  );
}
