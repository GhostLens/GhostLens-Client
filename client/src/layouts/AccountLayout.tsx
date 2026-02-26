import { Link, Outlet, useLocation } from "react-router";
import Notfound from "../pages/Notfound";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GoChevronRight } from "react-icons/go";

export default function AccountLayout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [allows] = useState(["login", "verify", "two-step"]);

  let pathChunks = pathname?.trim()?.split("/");
  const path = pathChunks[pathChunks.length - 1];

  //! TASK: If the path is equal to register, it is first checked that this page will not be executed if a membership has already been made.

  if (!allows.includes(path)) return <Notfound />;
  return (
    <div className="fixed w-full h-full flex items-center justify-center overflow-y-auto">
      <div className=" border border-neutral-800 rounded-xl divide-y-2 divide-neutral-800 sm:min-w-md! mx-4 mt-30 mb-10">
        {/* header */}
        <div className="flex items-center p-4 justify-between gap-x-4">
          <div className="text-lg font-bold ">Telegram Account login</div>
          <Link
            to="/dashboard"
            className="flex items-center text-xs! text-blue-400 hover:text-blue-500! focus:text-blue-500! transition-all whitespace-nowrap"
          >
            {t("shared.back_to_dashboard")}
            <GoChevronRight size={16} />
          </Link>
        </div>
        {/* content */}
        <div className="p-4">
          <Outlet />
        </div>
        {/* buttons */}
        {/* <div className="p-4"></div> */}
      </div>
    </div>
  );
}
