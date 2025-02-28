import { cn } from "@/lib/utils";
import { VariantProps } from "tailwind-variants";
import { inputVariants } from "./text-input.component.style";

type TextInputProps = VariantProps<typeof inputVariants> & {
  disabled?: boolean;
};

function TextInput({
  variant = "primary",
  disabled,
  className,
  type,
  ...props
}: TextInputProps & React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, disabled }), className)}
      {...props}
    />
  );
}

export default TextInput;
