import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./button.component.style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "primaryDestructive"
    | "secondaryDestructive"
    | "cta";
  disabled?: boolean;
};

function Button({
  variant = "primary",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, disabled })} {...props}>
      {children}
    </button>
  );
}

export default Button;
