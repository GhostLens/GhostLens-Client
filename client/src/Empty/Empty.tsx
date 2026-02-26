import { useTranslation } from "react-i18next";
import { SlGhost } from "react-icons/sl";
import { Link } from "react-router";

export default function Empty() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8 text-neutral-200 my-10 justify-center items-center ">
      <SlGhost size={48} />

      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium">{t("shared.empty")}</div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-light">{t("shared.empty_dialog_2")}</div>
          <div className="flex flex-wrap gap-x-2">
            <Link
              to="/dashboard"
              className="text-sm text-blue-400! hover:text-blue-500! focus:text-blue-500!"
            >
              {t("dashboard.page_title.dashboard")}
            </Link>
            <Link
              to="/dashboard/activity"
              className="text-sm text-blue-400! hover:text-blue-500! focus:text-blue-500!"
            >
              {t("activity.title")}
            </Link>
            <Link
              to="/profile"
              className="text-sm text-blue-400! hover:text-blue-500! focus:text-blue-500!"
            >
              {t("profile.title")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
