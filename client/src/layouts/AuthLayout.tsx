import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router";
import Notfound from "../pages/Notfound";
import { useState } from "react";

export default function AuthLayout() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [allows] = useState(["login", "register", "recovery"]);

  let pathChunks = pathname?.trim()?.split("/");
  const path = pathChunks[pathChunks.length - 1];

  //! TASK: If the path is equal to register, it is first checked that this page will not be executed if a membership has already been made.

  if (!allows.includes(path)) return <Notfound />;
  return (
    <div className="fixed w-full h-full flex items-center justify-center overflow-y-auto">
      <div className=" border border-neutral-800 rounded-xl divide-y-2 divide-neutral-800 sm:min-w-md! mx-4 mt-30 mb-10">
        {/* header */}
        <div className="flex items-center p-4">
          <div className="text-lg font-bold ">{t(`${path}.header_title`)}</div>
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
