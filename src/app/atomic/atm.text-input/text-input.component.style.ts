import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "h-xl w-3xl p-sm flex border border-gray-medium rounded-xs text-x-small font-regular",
  variants: {
    variant: {
      primary:
        "border-sm placeholder-gray-x-dark focus:border-brand-primary-dark",
    },
    disabled: {
      true: "bg-gray-x-light placeholder-gray-dark pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
