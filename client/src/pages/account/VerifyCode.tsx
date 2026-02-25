import { Button, Input, type GetProps } from "antd";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { createStaticStyles } from "antd-style";

const { OTP } = Input;

const styles = createStaticStyles(({ css, cssVar }) => ({
  focusEffect: css`
    border-width: ${cssVar.lineWidth};
    border-radius: ${cssVar.borderRadius};
    transition: box-shadow ${cssVar.motionDurationMid};
    &:hover {
      border: var(--border-neutral-800);
    }
    &:focus-visible {
      border-color: lab(66.128% 0 0);
      box-shadow: 0 0 0 4px
        color-mix(in oklab, lab(66.128% 0 0) 50%, transparent);
    }
  `,
}));

type OTPProps = GetProps<typeof Input.OTP>;

const stylesFnOTP: OTPProps["styles"] = (info) => {
  if (info.props.size === "middle") {
    return {
      input: {
        borderColor: "#6E8CFB",
        width: 32,
      },
    } satisfies OTPProps["styles"];
  }
  return {};
};

export default function VerifyCode() {
  const { t } = useTranslation();
  const classNames = styles;

  return (
    <div className="">
      <Helmet>
        <title>{t("telegram.login.page_title")}</title>
      </Helmet>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="verify_code" className="text-md font-medium">
            {t("telegram.login.verify_code.label")}
          </label>
          <div className="flex items-center justify-center">
            <OTP
              classNames={{...classNames, 
                input: "bg-neutral-800! border-neutral-700! shadow-0! text-neutral-100!"
              }}
              styles={stylesFnOTP}
              size="middle"
              length={5}
              // separator="*"
            />
          </div>
          <div className="text-xs text-neutral-200 bg-sky-600 rounded-lg px-4 py-2">
            {t("telegram.login.verify_code.description")}
          </div>
        </div>

        <Button
          type="default"
          classNames={{
            root: "bg-green-400! hover:bg-green-500! transition-all! focus:bg-green-500! text-neutral-100! border-0!",
          }}
          size={"large"}
        >
          {t("telegram.login.buttons.login")}
        </Button>
      </form>
    </div>
  );
}
