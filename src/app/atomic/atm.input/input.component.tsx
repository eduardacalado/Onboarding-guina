import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { inputVariants } from "./input.component.style";
import { VariantProps } from "tailwind-variants";

type InputRootProps = VariantProps<typeof inputVariants> &
  ComponentProps<"div"> & {
    disabled?: boolean;
  };

function InputRoot({ variant, disabled, className, ...props }: InputRootProps) {
  return (
    <div
      className={cn(inputVariants({ variant, disabled }), className)}
      {...props}
    />
  );
}

type InputFieldProps = ComponentProps<"input"> & {
  disabled?: boolean;
};

function InputField({ type, ...props }: InputFieldProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className="outline-none w-full placeholder-gray-x-dark"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"button"> {}

function InputIcon({ children, ...props }: InputIconProps) {
  return (
    <button className="flex outline-none" {...props}>
      {children}
    </button>
  );
}

export const Input = {
  Root: InputRoot,
  Icon: InputIcon,
  Field: InputField,
};
