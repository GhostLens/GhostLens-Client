import { Button, Input } from "antd";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function TwoFactor() {
  const { t } = useTranslation();

  return (
    <div className="">
      <Helmet>
        <title>{t("telegram.login.page_title")}</title>
      </Helmet>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="two_step" className="text-md font-medium">
            {t("telegram.login.two_step.label")}
          </label>
          <Input
            id="two_step"
            type="text"
            name="two_step"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("telegram.login.two_step.placeholder")}
          />
          <div className="text-xs text-neutral-200 bg-sky-600 rounded-lg px-4 py-2">
            {t("telegram.login.two_step.description")}
          </div>
        </div>

        <Button
          type="default"
          classNames={{
            root: "bg-green-400! hover:bg-green-500! transition-all! focus:bg-green-500! text-neutral-100! border-0!",
          }}
          size={"large"}
        >
          {t("telegram.login.buttons.complete_login")}
        </Button>
      </form>
    </div>
  );
}
