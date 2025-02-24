import { AnchorHTMLAttributes } from "react";
import { buttonVariants } from "../atm.button/button.component.style";
import { ArrowLeftIcon } from "../../assets/svg/arrow-left";
import { ArrowRightIcon } from "../../assets/svg/arrow-right";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "link";
  disabled?: boolean;
  path: string;
  hasIcon?: boolean;
  iconName?: "ArrowRight" | "ArrowLeft";
  iconPlace?: "left" | "right";
};

export function LinkButton({
  variant = "link",
  disabled = false,
  hasIcon = false,
  iconName,
  iconPlace,
  children,
  path,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={path}
      className={buttonVariants({ variant, disabled, hasIcon })}
      {...props}
    >
      {hasIcon && iconPlace === "left" && iconName === "ArrowLeft" && (
        <ArrowLeftIcon />
      )}
      {children}
      {hasIcon && iconPlace === "right" && iconName === "ArrowRight" && (
        <ArrowRightIcon />
      )}
    </a>
  );
}
