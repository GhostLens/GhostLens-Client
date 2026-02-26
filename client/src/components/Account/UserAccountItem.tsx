import { Dropdown, type MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { TbDots } from "react-icons/tb";
import { Link } from "react-router";

export default function UserAccountItem() {
  const { t } = useTranslation();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to=""
          className="text-blue-400! hover:text-blue-500! focus:text-blue-500! transition-all"
        >
          {t("user_account.options.telegram_chats")}
        </Link>
      ),
    },
    {
      key: "2",
      danger: true,
      label: t("user_account.options.logout"),
    },
  ];

  return (
    <div className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-neutral-800">
      {/* full name + id */}
      <Link to="" className="flex flex-col leading-relaxed w-full">
        <div className="text-sm font-bold">User Full name</div>
        <div className="text-xs font-light text-neutral-400">1234567890</div>
      </Link>

      {/* dots */}
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
  );
}
