// components/Button/styles.ts
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex gap-sm h-xl w-xxl px-md py-sm rounded-sm font-medium font-semibold",
  variants: {
    variant: {
      primary:
        "bg-brand-primary-dark border border-sm text-white radius-sm hover:bg-brand-primary-x-dark focus:border-cta active:bg-feedback-success-x-dark",
      primaryDestructive:
        "bg-feedback-error-medium border border-sm text-white hover:bg-feedback-error-dark focus:border-feedback-error-dark active:bg-feedback-error-x-dark",
      secondary:
        "border border-sm border-brand-primary-dark text-brand-primary-dark hover:border-brand-primary-x-dark hover:text-brand-primary-x-dark focus:border-lg active:border-brand-primary-x-dark",
      secondaryDestructive:
        "border border-sm border-feedback-error-medium text-feedback-error-medium hover:border-feedback-error-dark hover:text-feedback-error-dark focus:border-lg active:border-feedback-error-dark",
      cta: "bg-gray-x-dark border border-sm hover:bg-gray-dark text-white focus:border-gray-x-dark active:bg-gray-xx-dark",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});
