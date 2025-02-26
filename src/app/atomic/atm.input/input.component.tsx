import { cn } from "@/lib/utils";
import { VariantProps } from "tailwind-variants";
import { inputVariants } from "./input.component.style";

type InputProps = VariantProps<typeof inputVariants> & {
  disabled?: boolean;
};

function Input({
  variant = "primary",
  disabled,
  className,
  type,
  ...props
}: InputProps & React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, disabled }), className)}
      {...props}
    />
  );
}

export default Input;
