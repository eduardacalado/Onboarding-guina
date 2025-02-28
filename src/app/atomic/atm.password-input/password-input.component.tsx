import { cn } from "@/lib/utils";
import { ComponentProps, useState } from "react";

interface InputRootProps extends ComponentProps<"div"> {}

function InputRoot({ ...props }: InputRootProps) {
  return (
    <div
      className="h-xl w-3xl p-sm flex justify-between border border-gray-medium rounded-xs text-x-small font-regular border-sm placeholder-gray-x-dark focus:border-brand-primary-dark"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

function InputField({ type, ...props }: InputFieldProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("outline-none w-full")}
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
