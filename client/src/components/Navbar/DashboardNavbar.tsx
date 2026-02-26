import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

export default function DashboardNavbar() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  let pathChunks = pathname?.trim()?.split("/");
  const path = pathChunks[pathChunks.length - 1];
  return (
    <div className="w-full h-18 border-b border-neutral-800 px-6 grid grid-cols-3 justify-between items-center">
      {/* project name */}
      <div className="text-2xl font-bold text-neutral-200">GhostLens</div>

      {/* page name */}
      <div className="text-xl font-medium place-self-center">{t(`dashboard.page_title.${path}`)}</div>

      <div className="flex items-center justify-end"></div>
    </div>
  );
}
