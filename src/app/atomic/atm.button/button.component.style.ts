// components/Button/styles.ts
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "h-10 w-47 px-4 py-2 rounded-sm font-medium font-semibold",
  variants: {
    variant: {
      primary:
        "bg-brand-primary-dark border border-2 text-white radius-sm hover:bg-brand-primary-x-dark focus:border-cta active:bg-feedback-success-x-dark",
      primaryDestructive:
        "bg-feedback-error-medium border border-2 text-white hover:bg-feedback-error-dark focus:border-feedback-error-dark active:bg-feedback-error-x-dark",
      secondary:
        "border border-2 border-brand-primary-dark text-brand-primary-dark hover:border-brand-primary-x-dark hover:text-brand-primary-x-dark focus:border-3 active:border-brand-primary-x-dark",
      secondaryDestructive:
        "border border-2 border-feedback-error-medium text-feedback-error-medium hover:border-feedback-error-dark hover:text-feedback-error-dark focus:border-3 active:border-feedback-error-dark",
      cta: "bg-gray-x-dark border border-2 hover:bg-gray-dark text-white focus:border-gray-x-dark active:bg-gray-xx-dark",
      link: "text-brand-primary-dark hover:underline focus:border focus:border-2 focus:border-brand-primary-dark active:text-brand-accessory-magenta",
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
