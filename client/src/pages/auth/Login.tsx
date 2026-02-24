import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Button, Input } from "antd";
import { Link } from "react-router";

export default function Login() {
  const { t } = useTranslation();
  return (
    <div className="">
      <Helmet>
        <title>{t("login.page_title")}</title>
      </Helmet>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-md font-medium">
            {t("login.username.label")}
          </label>
          <Input
            id="username"
            type="text"
            name="username"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("login.username.placeholder")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-md font-medium">
            {t("login.password.label")}
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            size="large"
            // value=""
            className="text-sm text-neutral-100! bg-neutral-800! border-neutral-700! placeholder:text-neutral-500!"
            placeholder={t("login.password.placeholder")}
          />
        </div>

        <Link to={"/auth/recovery"} className="text-sm text-blue-500">
          Forgot your password? Recover it
        </Link>

        <Button
          type="default"
          classNames={{
            root: "bg-green-400! hover:bg-green-500! transition-all! focus:bg-green-500! text-neutral-100! border-0!",
          }}
          size={"large"}
        >
          {t("login.buttons.login")}
        </Button>
      </form>
    </div>
  );
}
