import { useTranslation } from "react-i18next";
import DashboardStatusCards from "../../components/Cards/DashboardStatusCards";

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
      </div>
    </div>
  );
}
