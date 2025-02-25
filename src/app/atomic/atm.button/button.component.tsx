import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./button.component.style";
import { VariantProps } from "tailwind-variants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
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
