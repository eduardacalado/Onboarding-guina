import { tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "flex p-sm border border-gray-medium rounded-xs text-x-small font-regular",
  variants: {
    variant: {
      primary: "group border-sm focus-within:border-brand-primary-dark",
    },
    disabled: {
      true: "bg-gray-x-light placeholder-gray-dark pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
