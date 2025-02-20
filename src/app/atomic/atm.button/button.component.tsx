import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./button.component.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "primaryDestructive"
    | "secondaryDestructive"
    | "link"
    | "cta";
  disabled?: boolean;
};

export function Button({
  variant = "primary",
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, disabled })} {...props}>
      {children}
    </button>
  );
}
