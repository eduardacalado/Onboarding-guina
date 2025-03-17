import { ButtonHTMLAttributes } from "react";
import { buttonVariants } from "./button.component.style";
import { VariantProps } from "tailwind-variants";
import { LoadingSpinner } from "@/app/atomic/index";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    disabled?: boolean;
    isLoading: boolean;
  };

function Button({
  variant = "primary",
  disabled,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, disabled })} {...props}>
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
}

export default Button;
