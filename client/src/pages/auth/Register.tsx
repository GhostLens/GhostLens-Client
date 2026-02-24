import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Button, Input } from "antd";

export default function Register() {
  const { t } = useTranslation();
  return (
    <div className="">
      <Helmet>
        <title>{t("register.page_title")}</title>
      </Helmet>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-md font-medium">
            {t("register.username.label")}
          </label>
          <Input
            id="username"
            type="text"
            name="username"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("register.username.placeholder")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md font-medium">
            {t("register.password.label")}
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("register.password.placeholder")}
          />
          <div className="text-xs text-neutral-200 bg-sky-600 rounded-lg px-4 py-2">
            {t("register.password.description")}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="repeat_password" className="text-md font-medium">
            {t("register.repeat_password.label")}
          </label>
          <Input
            id="repeat_password"
            type="password"
            name="repeat_password"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("register.repeat_password.placeholder")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="recovery_code" className="text-md font-medium">
            {t("register.recovery_code.label")}
          </label>
          <Input
            id="recovery_code"
            type="password"
            name="recovery_code"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("register.recovery_code.placeholder")}
          />
          <div className="text-xs text-neutral-200 bg-sky-600 rounded-lg px-4 py-2">
            {t("register.recovery_code.description")}
          </div>
        </div>

        <Button
          type="default"
          classNames={{
            root: "bg-green-400! hover:bg-green-500! transition-all! focus:bg-green-500! text-neutral-100! border-0!",
          }}
          size={"large"}
        >
          {t("register.buttons.register")}
        </Button>
      </form>
    </div>
  );
}
